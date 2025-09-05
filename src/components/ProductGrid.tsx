import { ProductCard } from './ProductCard';
import { Link } from 'react-router-dom';
import { getBestSellers, getProductsWithDiscount } from '@/data/mockData';

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  products?: any[];
  maxProducts?: number;
  category?: string;
}

export function ProductGrid({ 
  title = "Trending Products", 
  subtitle, 
  showViewAll = true, 
  products: customProducts,
  maxProducts = 8,
  category
}: ProductGridProps) {
  // Determine which products to show
  let displayProducts = customProducts;
  
  if (!displayProducts) {
    if (title.toLowerCase().includes('best') || title.toLowerCase().includes('bestseller')) {
      displayProducts = getBestSellers();
    } else if (title.toLowerCase().includes('deal') || title.toLowerCase().includes('discount')) {
      displayProducts = getProductsWithDiscount();
    } else {
      // Default to best sellers for trending
      displayProducts = getBestSellers();
    }
  }

  // Filter by category if specified
  if (category) {
    displayProducts = displayProducts.filter(product => 
      product.category.toLowerCase().includes(category.toLowerCase()) ||
      product.name.toLowerCase().includes(category.toLowerCase())
    );
  }

  // Limit the number of products
  displayProducts = displayProducts.slice(0, maxProducts);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{title}</h2>
            {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          </div>
          {showViewAll && (
            <Link to="/products" className="text-primary hover:text-primary-glow font-medium transition-colors">
              View All →
            </Link>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}