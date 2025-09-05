import { CartItem } from '@/contexts/CartContext';

// Format price in Indian Rupees
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

// Calculate total price for cart items
export const calculateTotalPrice = (items: CartItem[]): number => {
  return items.reduce((total, item) => {
    return total + (item.product.price * item.quantity);
  }, 0);
};

// Calculate total savings for cart items
export const calculateTotalSavings = (items: CartItem[]): number => {
  return items.reduce((total, item) => {
    if (item.product.originalPrice) {
      const savings = (item.product.originalPrice - item.product.price) * item.quantity;
      return total + savings;
    }
    return total;
  }, 0);
};

// Calculate total number of items in cart
export const calculateTotalItems = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

// Get cart item by product ID
export const getCartItemById = (items: CartItem[], productId: string): CartItem | undefined => {
  return items.find(item => item.id === productId);
};

// Check if product is in cart
export const isProductInCart = (items: CartItem[], productId: string): boolean => {
  return items.some(item => item.id === productId);
};

// Get quantity of a product in cart
export const getProductQuantity = (items: CartItem[], productId: string): number => {
  const item = getCartItemById(items, productId);
  return item ? item.quantity : 0;
};

// Calculate delivery fee based on order value
export const calculateDeliveryFee = (orderValue: number): number => {
  const FREE_DELIVERY_THRESHOLD = 499;
  return orderValue >= FREE_DELIVERY_THRESHOLD ? 0 : 50;
};

// Calculate final total including delivery
export const calculateFinalTotal = (items: CartItem[]): number => {
  const subtotal = calculateTotalPrice(items);
  const deliveryFee = calculateDeliveryFee(subtotal);
  return subtotal + deliveryFee;
};

// Generate cart summary
export const generateCartSummary = (items: CartItem[]) => {
  const totalItems = calculateTotalItems(items);
  const subtotal = calculateTotalPrice(items);
  const totalSavings = calculateTotalSavings(items);
  const deliveryFee = calculateDeliveryFee(subtotal);
  const finalTotal = subtotal + deliveryFee;

  return {
    totalItems,
    subtotal,
    totalSavings,
    deliveryFee,
    finalTotal,
    isEligibleForFreeDelivery: deliveryFee === 0,
  };
};

// Validate cart item
export const validateCartItem = (item: Partial<CartItem>): boolean => {
  return !!(
    item.id &&
    item.product &&
    item.quantity &&
    item.quantity > 0 &&
    item.product.price &&
    item.product.price > 0
  );
};

// Sort cart items by date added (newest first)
export const sortCartItemsByDate = (items: CartItem[]): CartItem[] => {
  return [...items].sort((a, b) => 
    new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
  );
};

// Sort cart items by price (highest first)
export const sortCartItemsByPrice = (items: CartItem[]): CartItem[] => {
  return [...items].sort((a, b) => 
    (b.product.price * b.quantity) - (a.product.price * a.quantity)
  );
};

// Sort cart items by name (A-Z)
export const sortCartItemsByName = (items: CartItem[]): CartItem[] => {
  return [...items].sort((a, b) => 
    a.product.name.localeCompare(b.product.name)
  );
};

// Filter cart items by category
export const filterCartItemsByCategory = (items: CartItem[], category: string): CartItem[] => {
  return items.filter(item => item.product.category === category);
};

// Get unique categories from cart items
export const getCartCategories = (items: CartItem[]): string[] => {
  const categories = items.map(item => item.product.category);
  return [...new Set(categories)].filter(Boolean);
};

// Calculate cart statistics
export const calculateCartStats = (items: CartItem[]) => {
  const categories = getCartCategories(items);
  const brands = [...new Set(items.map(item => item.product.brand))].filter(Boolean);
  const totalItems = calculateTotalItems(items);
  const subtotal = calculateTotalPrice(items);
  const totalSavings = calculateTotalSavings(items);
  const averageItemPrice = totalItems > 0 ? subtotal / totalItems : 0;

  return {
    totalItems,
    totalCategories: categories.length,
    totalBrands: brands.length,
    subtotal,
    totalSavings,
    averageItemPrice,
    categories,
    brands,
  };
};

// Export cart data for sharing or backup
export const exportCartData = (items: CartItem[]) => {
  const summary = generateCartSummary(items);
  const stats = calculateCartStats(items);
  
  return {
    items: items.map(item => ({
      id: item.id,
      productId: item.product.id,
      productName: item.product.name,
      quantity: item.quantity,
      price: item.product.price,
      totalPrice: item.product.price * item.quantity,
      addedAt: item.addedAt,
    })),
    summary,
    stats,
    exportedAt: new Date().toISOString(),
  };
};

// Cart persistence helpers (for localStorage)
export const CART_STORAGE_KEY = 'ecommerce-cart';

export const saveCartToStorage = (items: CartItem[]): void => {
  try {
    const cartData = {
      items: items.map(item => ({
        ...item,
        addedAt: item.addedAt.toISOString(), // Convert Date to string
      })),
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartData));
  } catch (error) {
    console.error('Failed to save cart to storage:', error);
  }
};

export const loadCartFromStorage = (): CartItem[] => {
  try {
    const cartData = localStorage.getItem(CART_STORAGE_KEY);
    if (!cartData) return [];
    
    const parsed = JSON.parse(cartData);
    return parsed.items.map((item: any) => ({
      ...item,
      addedAt: new Date(item.addedAt), // Convert string back to Date
    }));
  } catch (error) {
    console.error('Failed to load cart from storage:', error);
    return [];
  }
};

export const clearCartFromStorage = (): void => {
  try {
    localStorage.removeItem(CART_STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear cart from storage:', error);
  }
};
