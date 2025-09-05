# Mock Data Documentation

This directory contains comprehensive mock data for the ecommerce application, designed to provide sufficient test data for all filtering, sorting, and categorization features.

## Files

- `mockData.ts` - Main mock data file with products and utility functions
- `imagePlaceholders.md` - Documentation for image placeholders
- `README.md` - This documentation file

## Product Data Structure

Each product in the mock data includes the following properties:

```typescript
interface Product {
  id: string;                    // Unique identifier
  name: string;                  // Product name
  image: string;                 // Image URL/path
  price: number;                 // Current price in INR
  originalPrice?: number;        // Original price (for discounts)
  rating: number;                // Rating (1-5)
  reviewCount: number;           // Number of reviews
  discount?: number;             // Discount percentage
  isBestSeller?: boolean;        // Best seller flag
  isAssured?: boolean;           // Quality assurance flag
  freeDelivery?: boolean;        // Free delivery flag
  category: string;              // Product category
  brand: string;                 // Brand name
  description?: string;          // Product description
  inStock?: boolean;             // Stock availability
  tags?: string[];               // Product tags for search
}
```

## Product Categories

The mock data includes products across 8 main categories:

1. **Mobiles** (6 products) - Smartphones from Apple, Samsung, OnePlus, Google, Xiaomi
2. **Electronics** (6 products) - Audio equipment from Sony, JBL, Apple, Samsung, Bose, Sennheiser
3. **Laptops** (6 products) - Laptops from ASUS, Dell, Apple, HP, Lenovo, MSI
4. **Fashion** (4 products) - Shoes, jeans, and clothing from Nike, Adidas, Levi's, Uniqlo
5. **Home** (4 products) - Kitchen appliances and furniture from Instant Pot, Dyson, Philips, IKEA
6. **Gaming** (4 products) - Consoles and accessories from Sony, Microsoft, Nintendo, SteelSeries
7. **Books** (4 products) - Popular books from various publishers
8. **Beauty** (4 products) - Skincare and makeup from The Ordinary, CeraVe, Olaplex, Fenty Beauty

## Utility Functions

The mock data file provides several utility functions for filtering and searching:

### Basic Filtering
- `getUniqueBrands()` - Get all unique brand names
- `getUniqueCategories()` - Get all unique category names
- `getProductsByCategory(category)` - Filter products by category
- `getProductsByBrand(brand)` - Filter products by brand

### Special Collections
- `getBestSellers()` - Get all best-selling products
- `getProductsWithDiscount()` - Get products with discounts
- `getRandomProducts(count)` - Get random products

### Advanced Filtering
- `getProductsByPriceRange(min, max)` - Filter by price range
- `getProductsByRating(minRating)` - Filter by minimum rating
- `searchProducts(query)` - Search across name, brand, description, and tags

### Product Details
- `getProductById(id)` - Get specific product by ID
- `getRelatedProducts(id, count)` - Get related products

## Usage Examples

```typescript
import { 
  allProducts, 
  getBestSellers, 
  getProductsByCategory,
  searchProducts 
} from '@/data/mockData';

// Get all products
const allProducts = allProducts;

// Get best sellers
const bestSellers = getBestSellers();

// Get mobile phones
const mobiles = getProductsByCategory('mobiles');

// Search for products
const searchResults = searchProducts('iPhone');
```

## Testing Features

This mock data enables testing of:

- **Filtering**: By brand, category, price range, rating
- **Sorting**: By price (asc/desc), rating, relevance
- **Search**: Across product names, brands, descriptions, tags
- **Categories**: All 8 categories with multiple products each
- **Price Ranges**: From ₹299 (books) to ₹189,990 (premium laptops)
- **Brands**: 25+ different brands across all categories
- **Ratings**: Products with ratings from 4.2 to 4.9
- **Discounts**: Products with discounts from 7% to 38%

## Adding New Products

To add new products, simply add them to the `allProducts` array in `mockData.ts`. Make sure to:

1. Use a unique ID
2. Include all required properties
3. Use appropriate category and brand names
4. Add relevant tags for search functionality
5. Set realistic prices, ratings, and review counts

## Image Management

Currently, the mock data uses placeholder images from the existing assets. See `imagePlaceholders.md` for details on adding proper product images.
