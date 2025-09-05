import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ProductCard } from '@/components/ProductCard';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { allProducts, extractBrand, matchesCategory, getUniqueBrands } from '@/data/mockData';

type SortKey = 'relevance' | 'price_asc' | 'price_desc' | 'rating_desc';

export default function Products() {
  const [params, setParams] = useSearchParams();
  const [price, setPrice] = useState<number[]>([0, Number(params.get('priceMax')) || 200000]);
  const [sort, setSort] = useState<SortKey>((params.get('sort') as SortKey) || 'relevance');
  const selectedBrands = (params.get('brands') || '').split(',').filter(Boolean);
  const categoryParam = params.get('category') || undefined;

  const brands = useMemo(() => {
    return getUniqueBrands();
  }, []);

  const products = useMemo(() => {
    let list = allProducts.filter(p => matchesCategory(p, categoryParam));

    if (selectedBrands.length) {
      list = list.filter(p => selectedBrands.includes(p.brand));
    }

    list = list.filter(p => p.price >= price[0] && p.price <= price[1]);

    switch (sort) {
      case 'price_asc':
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case 'rating_desc':
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return list;
  }, [selectedBrands, price, sort, categoryParam]);

  const updateParams = (next: Record<string, string | undefined>) => {
    const newParams = new URLSearchParams(params);
    Object.entries(next).forEach(([k, v]) => {
      if (!v) newParams.delete(k);
      else newParams.set(k, v);
    });
    setParams(newParams, { replace: true });
  };

  const toggleBrand = (brand: string) => {
    const set = new Set(selectedBrands);
    if (set.has(brand)) set.delete(brand);
    else set.add(brand);
    updateParams({ brands: Array.from(set).join(',') || undefined });
  };

  const applyPrice = (range: number[]) => {
    setPrice(range);
    updateParams({ priceMax: String(range[1]) });
  };

  const clearAll = () => {
    setParams(new URLSearchParams(), { replace: true });
    setPrice([0, 150000]);
    setSort('relevance');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Products | EcommerceApp" description="Browse products with filters for price, brand, and ratings. Sort by price or rating." canonical={window.location.href} />
      <Header />
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        <aside className="md:col-span-3 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" onClick={clearAll}>Clear</Button>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Price</h3>
                <Slider value={price} onValueChange={setPrice} onValueCommit={applyPrice} max={200000} step={1000} className="my-4" />
                <div className="text-sm text-muted-foreground">₹{price[0].toLocaleString()} - ₹{price[1].toLocaleString()}</div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Brand</h3>
                <div className="space-y-2">
                  {brands.map((b) => (
                    <label key={b} className="flex items-center gap-3 text-sm">
                      <Checkbox checked={selectedBrands.includes(b)} onCheckedChange={() => toggleBrand(b)} />
                      <span>{b}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Sort</h3>
                <Select value={sort} onValueChange={(v) => { setSort(v as SortKey); updateParams({ sort: v }); }}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price_asc">Price: Low to High</SelectItem>
                    <SelectItem value="price_desc">Price: High to Low</SelectItem>
                    <SelectItem value="rating_desc">Rating: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </aside>

        <section className="md:col-span-9">
          <header className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">Products</h1>
            {categoryParam && (
              <p className="text-muted-foreground">Category: {categoryParam}</p>
            )}
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.06}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
            {!products.length && (
              <div className="text-muted-foreground">No products match your filters.</div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
