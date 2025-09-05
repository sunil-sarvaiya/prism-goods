import { Smartphone, Headphones, Laptop, Shirt, Home, Gamepad2, Book, Sparkles } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Mobiles',
    icon: Smartphone,
    color: 'from-blue-500 to-blue-600',
    deals: '50% OFF'
  },
  {
    id: 2,
    name: 'Electronics',
    icon: Headphones,
    color: 'from-purple-500 to-purple-600',
    deals: 'Up to 70%'
  },
  {
    id: 3,
    name: 'Laptops',
    icon: Laptop,
    color: 'from-green-500 to-green-600',
    deals: '₹20,000 OFF'
  },
  {
    id: 4,
    name: 'Fashion',
    icon: Shirt,
    color: 'from-pink-500 to-pink-600',
    deals: 'Min 60%'
  },
  {
    id: 5,
    name: 'Home',
    icon: Home,
    color: 'from-orange-500 to-orange-600',
    deals: 'From ₹199'
  },
  {
    id: 6,
    name: 'Gaming',
    icon: Gamepad2,
    color: 'from-red-500 to-red-600',
    deals: 'Best Deals'
  },
  {
    id: 7,
    name: 'Books',
    icon: Book,
    color: 'from-indigo-500 to-indigo-600',
    deals: 'Up to 50%'
  },
  {
    id: 8,
    name: 'Beauty',
    icon: Sparkles,
    color: 'from-teal-500 to-teal-600',
    deals: 'Min 30%'
  }
];

export function CategorySection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gradient mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg">Discover amazing deals across all categories</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="category-card text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-success font-medium">
                  {category.deals}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}