import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Heart, Globe, Users, Shield, Zap } from 'lucide-react';

const Mission = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Our Mission
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Revolutionizing E-commerce for Everyone
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're on a mission to create the most accessible, innovative, and customer-centric 
              online shopping experience that connects people with products they love.
            </p>
            <Button size="lg" className="h-12 px-8">
              Join Our Journey
            </Button>
          </div>
        </section>

        {/* Mission Cards */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-muted-foreground">
                Every decision we make puts our customers at the center, ensuring the best 
                shopping experience possible.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-success/20 transition-colors">
                <Heart className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Products</h3>
              <p className="text-muted-foreground">
                We carefully curate every product to ensure our customers receive only 
                the highest quality items.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-deal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-deal/20 transition-colors">
                <Globe className="h-6 w-6 text-deal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-muted-foreground">
                Connecting customers worldwide with products and services that 
                enhance their daily lives.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-warning/20 transition-colors">
                <Users className="h-6 w-6 text-warning" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
              <p className="text-muted-foreground">
                Building strong relationships with customers, sellers, and partners 
                to create a thriving ecosystem.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
              <p className="text-muted-foreground">
                Maintaining the highest standards of security and transparency 
                in every transaction.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary-glow/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-glow/20 transition-colors">
                <Zap className="h-6 w-6 text-primary-glow" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly evolving and adopting new technologies to provide 
                cutting-edge shopping solutions.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Vision Section */}
        <section className="bg-gradient-to-r from-primary/5 via-primary-glow/5 to-deal/5 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              To become the world's most trusted and innovative e-commerce platform, where 
              technology meets humanity to create meaningful connections between people and 
              products. We envision a future where shopping is not just convenient, but 
              inspiring and sustainable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2">Sustainability</Badge>
              <Badge variant="outline" className="px-4 py-2">Innovation</Badge>
              <Badge variant="outline" className="px-4 py-2">Accessibility</Badge>
              <Badge variant="outline" className="px-4 py-2">Excellence</Badge>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10M+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-success mb-2">50K+</div>
            <div className="text-muted-foreground">Products</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-deal mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-warning mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Mission;