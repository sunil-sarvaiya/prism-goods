import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ProductCard } from '@/components/ProductCard';
import phoneImage from '@/assets/phone-product.jpg';
import headphonesImage from '@/assets/headphones-product.jpg';
import laptopImage from '@/assets/laptop-product.jpg';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const allProducts = [
  { id: '1', name: 'iPhone 15 Pro - 128GB Natural Titanium', image: phoneImage, price: 134900, originalPrice: 149900, rating: 4.6, reviewCount: 2847, discount: 10, isBestSeller: true, isAssured: true, freeDelivery: true },
  { id: '2', name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones', image: headphonesImage, price: 24990, originalPrice: 34990, rating: 4.8, reviewCount: 1523, discount: 29, isBestSeller: false, isAssured: true, freeDelivery: true },
  { id: '3', name: 'ASUS ROG Strix G15 Gaming Laptop - RTX 4060', image: laptopImage, price: 89990, originalPrice: 119990, rating: 4.5, reviewCount: 892, discount: 25, isBestSeller: true, isAssured: false, freeDelivery: false },
  { id: '4', name: 'iPhone 14 - 128GB Blue', image: phoneImage, price: 69900, originalPrice: 79900, rating: 4.4, reviewCount: 4521, discount: 13, isBestSeller: false, isAssured: true, freeDelivery: true },
  { id: '5', name: 'JBL Tune 770NC Wireless Over-Ear Headphones', image: headphonesImage, price: 7999, originalPrice: 12999, rating: 4.3, reviewCount: 756, discount: 38, isBestSeller: false, isAssured: false, freeDelivery: true },
  { id: '6', name: 'Dell XPS 13 Laptop - 11th Gen Intel Core i7', image: laptopImage, price: 124990, originalPrice: 149990, rating: 4.7, reviewCount: 342, discount: 17, isBestSeller: false, isAssured: true, freeDelivery: false },
];

type SortKey = 'relevance' | 'price_asc' | 'price_desc' | 'rating_desc';

function extractBrand(name: string) {
  if (/iphone/i.test(name)) return 'Apple';
  if (/sony/i.test(name)) return 'Sony';
  if (/asus/i.test(name)) return 'ASUS';
  if (/jbl/i.test(name)) return 'JBL';
  if (/dell/i.test(name)) return 'Dell';
  return 'Brand';
}

function matchesCategory(name: string, category?: string) {
  if (!category) return true;
  const c = category.toLowerCase();
  if (c.includes('mobile')) return /iphone/i.test(name);
  if (c.includes('laptop')) return /asus|dell/i.test(name);
  if (c.includes('electronic') || c.includes('headphone')) return /sony|jbl/i.test(name);
  return true;
}

export default function Products() {
  const [params, setParams] = useSearchParams();
  const [price, setPrice] = useState<number[]>([0, Number(params.get('priceMax')) || 150000]);
  const [sort, setSort] = useState<SortKey>((params.get('sort') as SortKey) || 'relevance');
  const selectedBrands = (params.get('brands') || '').split(',').filter(Boolean);
  const categoryParam = params.get('category') || undefined;

  const brands = useMemo(() => {
    const set = new Set(allProducts.map(p => extractBrand(p.name)));
    return Array.from(set);
  }, []);

  const products = useMemo(() => {
    let list = allProducts.filter(p => matchesCategory(p.name, categoryParam));

    if (selectedBrands.length) {
      list = list.filter(p => selectedBrands.includes(extractBrand(p.name)));
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
                <Slider value={price} onValueChange={setPrice} onValueCommit={applyPrice} max={150000} step={1000} className="my-4" />
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
