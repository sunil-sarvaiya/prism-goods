import { ProductCard } from './ProductCard';
import phoneImage from '@/assets/phone-product.jpg';
import headphonesImage from '@/assets/headphones-product.jpg';
import laptopImage from '@/assets/laptop-product.jpg';

const products = [
  {
    id: '1',
    name: 'iPhone 15 Pro - 128GB Natural Titanium',
    image: phoneImage,
    price: 134900,
    originalPrice: 149900,
    rating: 4.6,
    reviewCount: 2847,
    discount: 10,
    isBestSeller: true,
    isAssured: true,
    freeDelivery: true,
  },
  {
    id: '2',
    name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    image: headphonesImage,
    price: 24990,
    originalPrice: 34990,
    rating: 4.8,
    reviewCount: 1523,
    discount: 29,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
  },
  {
    id: '3',
    name: 'ASUS ROG Strix G15 Gaming Laptop - RTX 4060',
    image: laptopImage,
    price: 89990,
    originalPrice: 119990,
    rating: 4.5,
    reviewCount: 892,
    discount: 25,
    isBestSeller: true,
    isAssured: false,
    freeDelivery: false,
  },
  {
    id: '4',
    name: 'iPhone 14 - 128GB Blue',
    image: phoneImage,
    price: 69900,
    originalPrice: 79900,
    rating: 4.4,
    reviewCount: 4521,
    discount: 13,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
  },
  {
    id: '5',
    name: 'JBL Tune 770NC Wireless Over-Ear Headphones',
    image: headphonesImage,
    price: 7999,
    originalPrice: 12999,
    rating: 4.3,
    reviewCount: 756,
    discount: 38,
    isBestSeller: false,
    isAssured: false,
    freeDelivery: true,
  },
  {
    id: '6',
    name: 'Dell XPS 13 Laptop - 11th Gen Intel Core i7',
    image: laptopImage,
    price: 124990,
    originalPrice: 149990,
    rating: 4.7,
    reviewCount: 342,
    discount: 17,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: false,
  },
];

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
}

export function ProductGrid({ title = "Trending Products", subtitle, showViewAll = true }: ProductGridProps) {
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
            <button className="text-primary hover:text-primary-glow font-medium transition-colors">
              View All →
            </button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
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