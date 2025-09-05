import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Package, Clock, CheckCircle, AlertCircle, Truck } from 'lucide-react';

export default function Returns() {
  const returnSteps = [
    {
      step: 1,
      title: "Initiate Return",
      description: "Go to 'My Orders' and select the item you want to return",
      icon: Package
    },
    {
      step: 2,
      title: "Print Label",
      description: "Download and print the return shipping label",
      icon: ArrowLeft
    },
    {
      step: 3,
      title: "Package Item",
      description: "Pack the item securely with original packaging",
      icon: Package
    },
    {
      step: 4,
      title: "Ship Back",
      description: "Drop off at any authorized shipping location",
      icon: Truck
    },
    {
      step: 5,
      title: "Get Refund",
      description: "Receive refund within 5-7 business days",
      icon: CheckCircle
    }
  ];

  const returnPolicy = [
    {
      category: "Eligible Items",
      items: [
        "Most items within 30 days of delivery",
        "Items in original condition with tags",
        "Unused and unopened products",
        "Items with original packaging"
      ],
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      category: "Non-Eligible Items",
      items: [
        "Personalized or custom items",
        "Perishable goods",
        "Items damaged by customer",
        "Items without original packaging"
      ],
      icon: AlertCircle,
      color: "text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Returns & Exchanges - EcommerceApp"
        description="Learn about our return policy, how to return items, and get answers to common return questions."
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-deal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Returns & Exchanges
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We want you to be completely satisfied with your purchase. Our easy return process makes it simple to return or exchange items.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Clock className="h-4 w-4 mr-2" />
                  30-Day Return Window
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Free Returns
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Truck className="h-4 w-4 mr-2" />
                  Easy Pickup
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Return Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How to Return an Item</h2>
              <div className="grid md:grid-cols-5 gap-6">
                {returnSteps.map((step) => {
                  const IconComponent = step.icon;
                  return (
                    <Card key={step.step} className="text-center">
                      <CardContent className="pt-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                          {step.step}
                        </div>
                        <h3 className="font-semibold mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Return Policy */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Return Policy</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {returnPolicy.map((policy) => {
                  const IconComponent = policy.icon;
                  return (
                    <Card key={policy.category}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <IconComponent className={`h-6 w-6 ${policy.color}`} />
                          <h3 className="text-xl font-semibold">{policy.category}</h3>
                        </div>
                        <ul className="space-y-3">
                          {policy.items.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className={`w-2 h-2 rounded-full mt-2 ${policy.color.replace('text-', 'bg-')}`}></div>
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
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
                    <h3 className="text-xl font-semibold mb-4">Return Timeline</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">30 Days</div>
                        <div className="text-muted-foreground">Return Window</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">5-7 Days</div>
                        <div className="text-muted-foreground">Refund Processing</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">Free</div>
                        <div className="text-muted-foreground">Return Shipping</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Refund Methods</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Original Payment Method</h4>
                        <p className="text-muted-foreground text-sm">
                          Refunds are processed to the original payment method used for the purchase.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Store Credit</h4>
                        <p className="text-muted-foreground text-sm">
                          You can choose to receive store credit for faster processing and additional benefits.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Exchange Policy</h3>
                    <p className="text-muted-foreground mb-4">
                      Need a different size or color? We offer free exchanges for most items. Simply follow the return process and select "Exchange" instead of "Return".
                    </p>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm">
                        <strong>Note:</strong> Exchanges are subject to availability. If the item you want is out of stock, we'll process a refund instead.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-deal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Return an Item?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start your return process now. It's quick, easy, and completely free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Start Return Process
                </Button>
                <Button variant="outline" size="lg">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
