import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Truck, Clock, MapPin, Package, Shield, Zap } from 'lucide-react';

export default function ShippingInfo() {
  const shippingOptions = [
    {
      name: "Standard Shipping",
      duration: "3-5 business days",
      price: "Free on orders over ₹999",
      icon: Truck,
      description: "Reliable delivery to your doorstep"
    },
    {
      name: "Express Shipping",
      duration: "1-2 business days",
      price: "₹99",
      icon: Zap,
      description: "Fast delivery for urgent orders"
    },
    {
      name: "Same Day Delivery",
      duration: "Same day",
      price: "₹199",
      icon: Clock,
      description: "Available in select cities"
    }
  ];

  const deliveryCities = [
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", 
    "Pune", "Ahmedabad", "Jaipur", "Surat", "Lucknow", "Kanpur"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Shipping Information - EcommerceApp"
        description="Learn about our shipping options, delivery times, and shipping policies. Get your orders delivered quickly and safely."
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-deal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Shipping Information
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Fast, reliable, and secure delivery to your doorstep. Choose the shipping option that works best for you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Truck className="h-4 w-4 mr-2" />
                  Pan India Delivery
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Shield className="h-4 w-4 mr-2" />
                  Secure Packaging
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Clock className="h-4 w-4 mr-2" />
                  Same Day Available
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Shipping Options</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {shippingOptions.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <Card key={option.name} className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{option.name}</h3>
                        <p className="text-muted-foreground mb-4">{option.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="font-medium">{option.duration}</span>
                          </div>
                          <div className="text-primary font-semibold">{option.price}</div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Information */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Delivery Information</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Same Day Delivery Cities</h3>
                    <p className="text-muted-foreground mb-4">
                      We offer same-day delivery in the following cities:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {deliveryCities.map((city, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="text-sm">{city}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Delivery Process</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="font-medium">Order Confirmation</h4>
                          <p className="text-sm text-muted-foreground">You'll receive an email confirmation with tracking details</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="font-medium">Processing</h4>
                          <p className="text-sm text-muted-foreground">Your order is prepared and packaged securely</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="font-medium">Shipping</h4>
                          <p className="text-sm text-muted-foreground">Your package is dispatched and on its way</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h4 className="font-medium">Delivery</h4>
                          <p className="text-sm text-muted-foreground">Your order arrives safely at your doorstep</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Important Information</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Free Shipping Threshold</h3>
                    <p className="text-muted-foreground">
                      Enjoy free standard shipping on all orders over ₹999. For orders below this amount, 
                      standard shipping charges apply as per the shipping options above.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Delivery Timeframes</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Metro Cities</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Standard: 2-3 business days</li>
                          <li>• Express: 1 business day</li>
                          <li>• Same Day: Available</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Other Cities</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Standard: 3-5 business days</li>
                          <li>• Express: 2-3 business days</li>
                          <li>• Same Day: Not available</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Packaging & Security</h3>
                    <div className="flex items-start gap-4">
                      <Package className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <p className="text-muted-foreground mb-2">
                          All items are carefully packaged to ensure they arrive in perfect condition. 
                          We use eco-friendly packaging materials whenever possible.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Secure bubble wrap for fragile items</li>
                          <li>• Waterproof packaging for electronics</li>
                          <li>• Tamper-evident seals for security</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Delivery Issues</h3>
                    <p className="text-muted-foreground mb-4">
                      If you experience any issues with delivery, please contact our customer support team immediately. 
                      We'll work to resolve the issue as quickly as possible.
                    </p>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm">
                        <strong>Note:</strong> Delivery times may be affected by weather conditions, 
                        holidays, or other unforeseen circumstances. We'll keep you updated on any delays.
                      </p>
                    </div>
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
