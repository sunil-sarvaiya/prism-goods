import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { formatPrice } from '@/utils/cartUtils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { 
  CheckCircle, 
  Package, 
  Truck, 
  MapPin, 
  CreditCard, 
  Mail, 
  Phone,
  Calendar,
  ArrowRight,
  Download,
  Share2,
  Home
} from 'lucide-react';

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface ShippingAddress {
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

interface Payment {
  method: string;
  amount: number;
}

interface OrderSummary {
  totalItems: number;
  subtotal: number;
  totalSavings: number;
  deliveryFee: number;
  finalTotal: number;
  isEligibleForFreeDelivery: boolean;
}

interface OrderData {
  orderId: string;
  items: OrderItem[];
  customer: Customer;
  shippingAddress: ShippingAddress;
  payment: Payment;
  summary: OrderSummary;
  orderNotes: string;
  orderDate: string;
}

function OrderConfirmation() {
  const { orderId } = useParams<{ orderId: string }>();
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load order data from localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const order = orders.find((o: OrderData) => o.orderId === orderId);
    
    if (order) {
      setOrderData(order);
    }
    setLoading(false);
  }, [orderId]);

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'card':
        return <CreditCard className="h-4 w-4" />;
      case 'upi':
        return <Phone className="h-4 w-4" />;
      case 'netbanking':
        return <CreditCard className="h-4 w-4" />;
      case 'cod':
        return <Truck className="h-4 w-4" />;
      default:
        return <CreditCard className="h-4 w-4" />;
    }
  };

  const getPaymentMethodName = (method: string) => {
    switch (method) {
      case 'card':
        return 'Credit/Debit Card';
      case 'upi':
        return 'UPI Payment';
      case 'netbanking':
        return 'Net Banking';
      case 'cod':
        return 'Cash on Delivery';
      default:
        return 'Payment';
    }
  };

  const getEstimatedDeliveryDate = () => {
    const orderDate = new Date(orderData?.orderDate || '');
    const deliveryDate = new Date(orderDate);
    deliveryDate.setDate(deliveryDate.getDate() + 3); // 3 days delivery
    return deliveryDate.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const downloadInvoice = () => {
    // In a real app, this would generate and download a PDF invoice
    alert('Invoice download feature will be implemented with PDF generation');
  };

  const shareOrder = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Order Confirmation',
        text: `Order ${orderData?.orderId} has been confirmed!`,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Order link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <>
        <SEO title="Order Confirmation" description="Your order has been confirmed" />
        <Header />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (!orderData) {
    return (
      <>
        <SEO title="Order Not Found" description="Order not found" />
        <Header />
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">Order Not Found</h1>
              <p className="text-muted-foreground mb-8">The order you're looking for doesn't exist.</p>
              <Button asChild size="lg">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO title="Order Confirmation" description="Your order has been confirmed" />
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <span>Order Confirmation</span>
            </div>

            {/* Success Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
              <p className="text-muted-foreground mb-4">
                Thank you for your order. We've received your order and will process it shortly.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  Order ID: {orderData.orderId}
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(orderData.orderDate).toLocaleDateString('en-IN')}
                </Badge>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button onClick={downloadInvoice} variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Invoice
              </Button>
              <Button onClick={shareOrder} variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share Order
              </Button>
              <Button asChild>
                <Link to="/products">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Order Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Order Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {orderData.items.map((item) => (
                    <div key={item.id} className="flex gap-3 p-3 border rounded-lg">
                      <div className="w-12 h-12 flex-shrink-0">
                        <div className="w-full h-full bg-muted rounded flex items-center justify-center">
                          <Package className="h-6 w-6 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                        <p className="text-sm font-medium">{formatPrice(item.totalPrice)}</p>
                      </div>
                    </div>
                  ))}
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal ({orderData.summary.totalItems} items)</span>
                      <span>{formatPrice(orderData.summary.subtotal)}</span>
                    </div>
                    
                    {orderData.summary.totalSavings > 0 && (
                      <div className="flex justify-between text-sm text-success">
                        <span>Total Savings</span>
                        <span>-{formatPrice(orderData.summary.totalSavings)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-sm">
                      <span>Delivery</span>
                      <span className={orderData.summary.isEligibleForFreeDelivery ? "text-success" : ""}>
                        {orderData.summary.isEligibleForFreeDelivery ? "FREE" : formatPrice(orderData.summary.deliveryFee)}
                      </span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Paid</span>
                      <span>{formatPrice(orderData.summary.finalTotal)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Customer & Shipping Info */}
              <div className="space-y-6">
                {/* Customer Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Customer Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="font-medium">{orderData.customer.firstName} {orderData.customer.lastName}</p>
                      <p className="text-sm text-muted-foreground">{orderData.customer.email}</p>
                      <p className="text-sm text-muted-foreground">{orderData.customer.phone}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm">
                      <p>{orderData.shippingAddress.address}</p>
                      <p>{orderData.shippingAddress.city}, {orderData.shippingAddress.state}</p>
                      <p>{orderData.shippingAddress.pincode}, {orderData.shippingAddress.country}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {getPaymentMethodIcon(orderData.payment.method)}
                      Payment Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium">{getPaymentMethodName(orderData.payment.method)}</p>
                      <p className="text-sm text-muted-foreground">
                        Amount: {formatPrice(orderData.payment.amount)}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5" />
                      Delivery Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="font-medium">Estimated Delivery:</span> {getEstimatedDeliveryDate()}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        You will receive a tracking number via SMS and email once your order is dispatched.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Order Notes */}
            {orderData.orderNotes && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Order Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{orderData.orderNotes}</p>
                </CardContent>
              </Card>
            )}

            {/* Next Steps */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">Order Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      We'll prepare your order and send it for packaging.
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">Shipping</h3>
                    <p className="text-sm text-muted-foreground">
                      Your order will be dispatched and you'll receive tracking details.
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">Delivery</h3>
                    <p className="text-sm text-muted-foreground">
                      Your order will be delivered to your specified address.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrderConfirmation;
