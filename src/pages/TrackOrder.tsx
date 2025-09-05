import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Package, Truck, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function TrackOrder() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  // Mock order status data
  const mockOrderStatus = {
    orderId: "ORD-2024-001234",
    trackingNumber: "TRK123456789",
    status: "In Transit",
    estimatedDelivery: "2024-01-25",
    currentLocation: "Mumbai Distribution Center",
    items: [
      { name: "iPhone 15 Pro - 128GB Natural Titanium", quantity: 1, price: 134900 },
      { name: "Sony WH-1000XM5 Headphones", quantity: 1, price: 24990 }
    ],
    timeline: [
      {
        status: "Order Placed",
        date: "2024-01-20",
        time: "10:30 AM",
        location: "Online",
        completed: true
      },
      {
        status: "Order Confirmed",
        date: "2024-01-20",
        time: "11:15 AM",
        location: "Mumbai Warehouse",
        completed: true
      },
      {
        status: "Processing",
        date: "2024-01-21",
        time: "09:00 AM",
        location: "Mumbai Warehouse",
        completed: true
      },
      {
        status: "Shipped",
        date: "2024-01-22",
        time: "02:30 PM",
        location: "Mumbai Distribution Center",
        completed: true
      },
      {
        status: "In Transit",
        date: "2024-01-23",
        time: "08:00 AM",
        location: "Mumbai Distribution Center",
        completed: true
      },
      {
        status: "Out for Delivery",
        date: "2024-01-25",
        time: "Expected 10:00 AM",
        location: "Local Delivery Hub",
        completed: false
      },
      {
        status: "Delivered",
        date: "2024-01-25",
        time: "Expected 2:00 PM",
        location: "Your Address",
        completed: false
      }
    ]
  };

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setOrderStatus(mockOrderStatus);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Track Your Order - EcommerceApp"
        description="Track your order status, delivery timeline, and get real-time updates on your package location."
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-deal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Track Your Order
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Enter your tracking number or order ID to get real-time updates on your package.
              </p>
              
              {/* Tracking Form */}
              <form onSubmit={handleTrackOrder} className="max-w-2xl mx-auto">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                      placeholder="Enter tracking number or order ID"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="pl-10 pr-4 py-3 text-lg"
                    />
                  </div>
                  <Button type="submit" size="lg" className="px-8">
                    Track Order
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Order Status */}
        {orderStatus && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Order Summary */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">Order Status</h2>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-lg px-3 py-1">
                            {orderStatus.status}
                          </Badge>
                          <span className="text-muted-foreground">
                            Order #{orderStatus.orderId}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Estimated Delivery</div>
                        <div className="font-semibold">{orderStatus.estimatedDelivery}</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="flex items-center gap-3">
                        <Package className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Tracking Number</div>
                          <div className="font-medium">{orderStatus.trackingNumber}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Current Location</div>
                          <div className="font-medium">{orderStatus.currentLocation}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Last Updated</div>
                          <div className="font-medium">2 hours ago</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Order Items */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Order Items</h3>
                    <div className="space-y-4">
                      {orderStatus.items.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                          <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">₹{item.price.toLocaleString()}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Timeline */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6">Delivery Timeline</h3>
                    <div className="space-y-4">
                      {orderStatus.timeline.map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            {step.completed ? (
                              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                                <CheckCircle className="h-5 w-5" />
                              </div>
                            ) : (
                              <div className="w-8 h-8 bg-muted border-2 border-muted-foreground rounded-full flex items-center justify-center">
                                <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium">{step.status}</h4>
                              {step.completed && (
                                <Badge variant="secondary" className="text-xs">Completed</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">
                              {step.date} at {step.time}
                            </p>
                            <p className="text-sm text-muted-foreground">{step.location}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Help Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Need Help?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Order Issues</h3>
                    <p className="text-muted-foreground mb-4">
                      Having trouble with your order? Contact our support team for assistance.
                    </p>
                    <Button variant="outline">Contact Support</Button>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Truck className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Delivery Questions</h3>
                    <p className="text-muted-foreground mb-4">
                      Questions about delivery times, locations, or shipping options?
                    </p>
                    <Button variant="outline">View Shipping Info</Button>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Package className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Returns</h3>
                    <p className="text-muted-foreground mb-4">
                      Need to return an item? Learn about our return policy and process.
                    </p>
                    <Button variant="outline">Return Policy</Button>
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
