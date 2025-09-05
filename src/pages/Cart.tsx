import { useCart } from '@/contexts/CartContext';
import { formatPrice, generateCartSummary } from '@/utils/cartUtils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { 
  Minus, 
  Plus, 
  Trash2, 
  ShoppingBag, 
  ArrowLeft,
  CreditCard,
  Truck,
  Shield,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Cart() {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();
  const { items } = state;
  const cartSummary = generateCartSummary(items);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  if (items.length === 0) {
    return (
      <>
        <SEO title="Shopping Cart" description="Your shopping cart" />
        <Header />
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span>/</span>
                <span>Shopping Cart</span>
              </div>

              {/* Empty Cart */}
              <div className="text-center py-16">
                <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-foreground mb-4">Your cart is empty</h1>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
                </p>
                <Button asChild size="lg" className="px-8">
                  <Link to="/products">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO title="Shopping Cart" description="Your shopping cart" />
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <span>Shopping Cart</span>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
                <p className="text-muted-foreground mt-2">
                  {cartSummary.totalItems} {cartSummary.totalItems === 1 ? 'item' : 'items'} in your cart
                </p>
              </div>
              <Button 
                variant="outline" 
                onClick={handleClearCart}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cart
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="w-24 h-24 flex-shrink-0">
                          <ImageWithFallback
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover rounded-lg"
                            showLoadingSpinner={false}
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground line-clamp-2 mb-2">
                                {item.product.name}
                              </h3>
                              
                              {/* Brand and Rating */}
                              <div className="flex items-center gap-4 mb-3">
                                <span className="text-sm text-muted-foreground">
                                  {item.product.brand}
                                </span>
                                <div className="flex items-center gap-1">
                                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                  <span className="text-sm font-medium">
                                    {item.product.rating}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    ({item.product.reviewCount.toLocaleString()})
                                  </span>
                                </div>
                              </div>

                              {/* Price */}
                              <div className="flex items-center gap-3 mb-4">
                                <span className="text-lg font-bold text-primary">
                                  {formatPrice(item.product.price)}
                                </span>
                                {item.product.originalPrice && (
                                  <>
                                    <span className="text-sm text-muted-foreground line-through">
                                      {formatPrice(item.product.originalPrice)}
                                    </span>
                                    <Badge variant="secondary" className="text-xs">
                                      {Math.round(((item.product.originalPrice - item.product.price) / item.product.originalPrice) * 100)}% off
                                    </Badge>
                                  </>
                                )}
                              </div>

                              {/* Quantity Controls */}
                              <div className="flex items-center gap-4">
                                <div className="flex items-center border rounded-lg">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    className="h-8 w-8 p-0"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="px-3 py-1 text-sm font-medium min-w-[3rem] text-center">
                                    {item.quantity}
                                  </span>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    className="h-8 w-8 p-0"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>

                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleRemoveItem(item.id)}
                                  className="text-destructive hover:text-destructive"
                                >
                                  <Trash2 className="h-4 w-4 mr-1" />
                                  Remove
                                </Button>
                              </div>
                            </div>

                            {/* Item Total */}
                            <div className="text-right">
                              <div className="text-lg font-bold text-foreground">
                                {formatPrice(item.product.price * item.quantity)}
                              </div>
                              {item.product.originalPrice && (
                                <div className="text-sm text-success">
                                  Save {formatPrice((item.product.originalPrice - item.product.price) * item.quantity)}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-8">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Price Breakdown */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal ({cartSummary.totalItems} items)</span>
                        <span>{formatPrice(cartSummary.subtotal)}</span>
                      </div>
                      
                      {cartSummary.totalSavings > 0 && (
                        <div className="flex justify-between text-sm text-success">
                          <span>Total Savings</span>
                          <span>-{formatPrice(cartSummary.totalSavings)}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between text-sm">
                        <span>Delivery</span>
                        <span className={cartSummary.isEligibleForFreeDelivery ? "text-success" : ""}>
                          {cartSummary.isEligibleForFreeDelivery ? "FREE" : formatPrice(cartSummary.deliveryFee)}
                        </span>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>{formatPrice(cartSummary.finalTotal)}</span>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <Button asChild className="w-full" size="lg">
                      <Link to="/checkout">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Proceed to Checkout
                      </Link>
                    </Button>

                    {/* Trust Badges */}
                    <div className="space-y-3 pt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Truck className="h-4 w-4" />
                        <span>Free delivery on orders above ₹499</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Shield className="h-4 w-4" />
                        <span>Secure payment & 100% safe</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
