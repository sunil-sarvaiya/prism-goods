# Product Image Placeholders

This document lists the placeholder images currently being used for different product categories. In a real application, you would want to replace these with actual product images.

## Current Image Usage

### Existing Images (from assets folder):
- `phone-product.jpg` - Used for mobile phones and smartphones
- `headphones-product.jpg` - Used for audio products and gaming headsets
- `laptop-product.jpg` - Used for laptops and computers

### Placeholder Images Needed:

#### Fashion & Clothing:
- Shoes (Nike, Adidas)
- Jeans (Levi's)
- T-shirts and clothing (Uniqlo)

#### Home & Kitchen:
- Kitchen appliances (Instant Pot, Air Fryer)
- Vacuum cleaners (Dyson)
- Furniture (IKEA dresser)

#### Gaming:
- Gaming consoles (PlayStation 5, Xbox Series X, Nintendo Switch)
- Gaming accessories

#### Books:
- Book covers for various titles

#### Beauty & Personal Care:
- Skincare products (The Ordinary, CeraVe)
- Hair care (Olaplex)
- Makeup (Fenty Beauty)

## Recommendations:

1. **Use a placeholder service**: Consider using services like:
   - Unsplash API for product photos
   - Lorem Picsum for generic images
   - Placeholder.com for simple placeholders

2. **Create category-specific images**: Add actual product images to the `src/assets/` folder:
   - `fashion-shoes.jpg`
   - `home-appliance.jpg`
   - `gaming-console.jpg`
   - `book-cover.jpg`
   - `beauty-product.jpg`

3. **Update mockData.ts**: Once you have actual images, update the `image` property in the mock data to use the appropriate image for each product.

## Current Implementation:
The mock data currently uses existing images as placeholders, which works for testing but should be updated with proper product images for a production application.
