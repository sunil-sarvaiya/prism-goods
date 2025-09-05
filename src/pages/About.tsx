import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, Heart, Globe, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Us - EcommerceApp"
        description="Learn about EcommerceApp's mission to provide the best shopping experience with quality products and exceptional customer service."
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-deal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                About EcommerceApp
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your trusted shopping destination for the best deals on electronics, fashion, and more. 
                We're committed to providing exceptional value and service to our customers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Award className="h-4 w-4 mr-2" />
                  Trusted by 1M+ Customers
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Globe className="h-4 w-4 mr-2" />
                  Pan India Delivery
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Shield className="h-4 w-4 mr-2" />
                  Secure Shopping
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Founded in 2020</h3>
                  <p className="text-muted-foreground mb-6">
                    EcommerceApp was born from a simple idea: to make quality products accessible to everyone 
                    at affordable prices. What started as a small online store has grown into one of India's 
                    most trusted e-commerce platforms.
                  </p>
                  <p className="text-muted-foreground">
                    We believe that shopping should be convenient, secure, and enjoyable. That's why we've 
                    built our platform with cutting-edge technology and a customer-first approach.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-lg p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">4+</div>
                    <div className="text-muted-foreground">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                    <p className="text-muted-foreground">
                      Every decision we make is guided by what's best for our customers. 
                      Your satisfaction is our top priority.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Quality Focus</h3>
                    <p className="text-muted-foreground">
                      We carefully curate every product to ensure it meets our high standards 
                      for quality and value.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Community</h3>
                    <p className="text-muted-foreground">
                      We're building more than just a store - we're creating a community 
                      of satisfied customers and happy shoppers.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1M+</div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-muted-foreground">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99%</div>
                  <div className="text-muted-foreground">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-muted-foreground mb-12">
                We're a passionate team of professionals dedicated to making your shopping experience exceptional.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">AR</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Amit Raj</h3>
                    <p className="text-primary mb-2">CEO & Founder</p>
                    <p className="text-muted-foreground text-sm">
                      Visionary leader with 10+ years in e-commerce
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">PS</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Priya Sharma</h3>
                    <p className="text-primary mb-2">CTO</p>
                    <p className="text-muted-foreground text-sm">
                      Technology expert ensuring seamless user experience
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">RK</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Rajesh Kumar</h3>
                    <p className="text-primary mb-2">Head of Operations</p>
                    <p className="text-muted-foreground text-sm">
                      Operations specialist ensuring smooth logistics
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
