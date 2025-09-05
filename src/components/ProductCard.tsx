import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  discount?: number;
  isBestSeller?: boolean;
  isAssured?: boolean;
  freeDelivery?: boolean;
}

export function ProductCard({
  name,
  image,
  price,
  originalPrice,
  rating,
  reviewCount,
  discount,
  isBestSeller,
  isAssured,
  freeDelivery,
}: ProductCardProps) {
  return (
    <div className="product-card group relative overflow-hidden">
      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 z-10 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
      >
        <Heart className="h-4 w-4" />
      </Button>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted/20">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {isBestSeller && (
            <Badge variant="secondary" className="bg-success text-success-foreground text-xs">
              Bestseller
            </Badge>
          )}
          {isAssured && (
            <Badge variant="outline" className="bg-primary/10 text-primary text-xs border-primary/20">
              Assured
            </Badge>
          )}
          {discount && discount > 0 && (
            <span className="deal-badge">
              {discount}% OFF
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Product Name */}
        <h3 className="font-medium text-foreground line-clamp-2 leading-tight group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-2 py-1 bg-success rounded text-success-foreground text-xs font-medium">
            <span>{rating}</span>
            <Star className="h-3 w-3 fill-current" />
          </div>
          <span className="text-muted-foreground text-sm">({reviewCount.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="price-primary">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <>
              <span className="price-original">₹{originalPrice.toLocaleString()}</span>
              <span className="price-discount">
                {Math.round(((originalPrice - price) / originalPrice) * 100)}% off
              </span>
            </>
          )}
        </div>

        {/* Free Delivery */}
        {freeDelivery && (
          <div className="text-success text-sm font-medium">
            Free delivery
          </div>
        )}

        {/* Add to Cart Button */}
        <Button 
          className="w-full btn-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}