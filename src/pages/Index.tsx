import { Header } from '@/components/Header';
import { HeroBanner } from '@/components/HeroBanner';
import { CategorySection } from '@/components/CategorySection';
import { ProductGrid } from '@/components/ProductGrid';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroBanner />
        
        <CategorySection />
        
        <ProductGrid 
          title="Best Deals for You"
          subtitle="Handpicked products with amazing discounts"
        />
        
        <ProductGrid 
          title="Trending Electronics"
          subtitle="Most popular gadgets this month"
        />

        {/* Deal of the Day Section */}
        <section className="py-12 bg-gradient-to-r from-deal/10 via-deal-glow/10 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-deal-gradient mb-4">⚡ Deal of the Day</h2>
              <p className="text-muted-foreground">Limited time offer - Don't miss out!</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <ProductGrid 
                title=""
                showViewAll={false}
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;