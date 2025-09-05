// Mock data for ecommerce app
import phoneImage from '@/assets/phone-product.jpg';
import headphonesImage from '@/assets/headphones-product.jpg';
import laptopImage from '@/assets/laptop-product.jpg';

// Fallback placeholder image for missing/broken images
export const PLACEHOLDER_IMAGE = 'https://media.istockphoto.com/id/1431891647/vector/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg?s=1024x1024&w=is&k=20&c=VGEwm1sqca8LZYSqBx1TyIcHuuM77_kmQh7wuNqi-Mw=';

// Utility function to get image with fallback
export const getImageWithFallback = (imageUrl: string, fallbackUrl: string = PLACEHOLDER_IMAGE): string => {
  return imageUrl || fallbackUrl;
};

export interface Product {
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
  category: string;
  brand: string;
  description?: string;
  inStock?: boolean;
  tags?: string[];
}

export const allProducts: Product[] = [
  // Mobiles & Smartphones
  {
    id: '1',
    name: 'iPhone 15 Pro - 128GB Natural Titanium',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-titanium',
    price: 134900,
    originalPrice: 149900,
    rating: 4.6,
    reviewCount: 2847,
    discount: 10,
    isBestSeller: true,
    isAssured: true,
    freeDelivery: true,
    category: 'mobiles',
    brand: 'Apple',
    description: 'Latest iPhone with titanium design and advanced camera system',
    inStock: true,
    tags: ['premium', 'camera', 'titanium']
  },
  {
    id: '2',
    name: 'iPhone 14 - 128GB Blue',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue',
    price: 69900,
    originalPrice: 79900,
    rating: 4.4,
    reviewCount: 4521,
    discount: 13,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
    category: 'mobiles',
    brand: 'Apple',
    description: 'Powerful iPhone with A15 Bionic chip',
    inStock: true,
    tags: ['value', 'reliable']
  },
  {
    id: '3',
    name: 'Samsung Galaxy S24 Ultra - 256GB Titanium Black',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-s928bzkdins/gallery/in-galaxy-s24-ultra-5g-sm-s928-sm-s928bzkdins-538835901',
    price: 124999,
    originalPrice: 134999,
    rating: 4.7,
    reviewCount: 1834,
    discount: 7,
    isBestSeller: true,
    isAssured: true,
    freeDelivery: true,
    category: 'mobiles',
    brand: 'Samsung',
    description: 'Premium Android flagship with S Pen and advanced AI features',
    inStock: true,
    tags: ['premium', 's-pen', 'ai']
  },
  {
    id: '4',
    name: 'OnePlus 12 - 256GB Silky Black',
    image: 'https://image01.oneplus.net/ebp/202312/07/1-m00-44-2e-rb8bwmw9xqqaworzaaxgh8vulb4840.png',
    price: 64999,
    originalPrice: 69999,
    rating: 4.5,
    reviewCount: 967,
    discount: 7,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
    category: 'mobiles',
    brand: 'OnePlus',
    description: 'Flagship killer with Snapdragon 8 Gen 3',
    inStock: true,
    tags: ['performance', 'fast-charging']
  },
  {
    id: '5',
    name: 'Google Pixel 8 Pro - 128GB Obsidian',
    image: 'https://store.google.com/product/images/pixel_8_pro_obsidian.png',
    price: 106999,
    originalPrice: 116999,
    rating: 4.6,
    reviewCount: 743,
    discount: 9,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
    category: 'mobiles',
    brand: 'Google',
    description: 'Pure Android experience with advanced AI photography',
    inStock: true,
    tags: ['ai', 'camera', 'pure-android']
  },
  {
    id: '6',
    name: 'Xiaomi 14 - 256GB Black',
    image: 'https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-14/gallery-01.png',
    price: 59999,
    originalPrice: 64999,
    rating: 4.3,
    reviewCount: 1234,
    discount: 8,
    isBestSeller: false,
    isAssured: false,
    freeDelivery: true,
    category: 'mobiles',
    brand: 'Xiaomi',
    description: 'High-performance smartphone with Leica camera',
    inStock: true,
    tags: ['value', 'camera', 'leica']
  },

  // Electronics & Audio
  {
    id: '7',
    name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    image: 'https://m.media-amazon.com/images/I/61+Q6Rh3OQL._SL1500_.jpg',
    price: 24990,
    originalPrice: 34990,
    rating: 4.8,
    reviewCount: 1523,
    discount: 29,
    isBestSeller: true,
    isAssured: true,
    freeDelivery: true,
    category: 'electronics',
    brand: 'Sony',
    description: 'Industry-leading noise cancellation with premium sound quality',
    inStock: true,
    tags: ['noise-cancelling', 'premium', 'wireless']
  },
  {
    id: '8',
    name: 'JBL Tune 770NC Wireless Over-Ear Headphones',
    image: 'https://m.media-amazon.com/images/I/71I3wzZ7P+L._SL1500_.jpg',
    price: 7999,
    originalPrice: 12999,
    rating: 4.3,
    reviewCount: 756,
    discount: 38,
    isBestSeller: false,
    isAssured: false,
    freeDelivery: true,
    category: 'electronics',
    brand: 'JBL',
    description: 'Affordable wireless headphones with active noise cancellation',
    inStock: true,
    tags: ['budget', 'wireless', 'noise-cancelling']
  },
  {
    id: '9',
    name: 'AirPods Pro (2nd generation) with MagSafe Case',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2nd-gen-magsafe',
    price: 23900,
    originalPrice: 26900,
    rating: 4.7,
    reviewCount: 3421,
    discount: 11,
    isBestSeller: true,
    isAssured: true,
    freeDelivery: true,
    category: 'electronics',
    brand: 'Apple',
    description: 'Premium wireless earbuds with spatial audio and noise cancellation',
    inStock: true,
    tags: ['premium', 'spatial-audio', 'wireless']
  },
  {
    id: '10',
    name: 'Samsung Galaxy Buds2 Pro - Graphite',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-buds2-pro-r510-sm-r510nlvainu-533407050',
    price: 16999,
    originalPrice: 19999,
    rating: 4.5,
    reviewCount: 892,
    discount: 15,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
    category: 'electronics',
    brand: 'Samsung',
    description: 'High-quality wireless earbuds with 360 Audio',
    inStock: true,
    tags: ['360-audio', 'wireless', 'premium']
  },
  {
    id: '11',
    name: 'Bose QuietComfort 45 Wireless Headphones',
    image: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc45/product_silo_images/QC45_PDP_TripleBlack_Ecom-Gallery_1.jpg',
    price: 32990,
    originalPrice: 37990,
    rating: 4.6,
    reviewCount: 567,
    discount: 13,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
    category: 'electronics',
    brand: 'Bose',
    description: 'Premium noise-cancelling headphones with superior comfort',
    inStock: true,
    tags: ['premium', 'comfort', 'noise-cancelling']
  },
  {
    id: '12',
    name: 'Sennheiser HD 660S Open Back Headphones',
    image: 'https://m.media-amazon.com/images/I/71d19hO4nCL._SL1500_.jpg',
    price: 44990,
    originalPrice: 49990,
    rating: 4.8,
    reviewCount: 234,
    discount: 10,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: false,
    category: 'electronics',
    brand: 'Sennheiser',
    description: 'Professional-grade open-back headphones for audiophiles',
    inStock: true,
    tags: ['professional', 'audiophile', 'open-back']
  },

  // Laptops & Computers
  {
    id: '13',
    name: 'ASUS ROG Strix G15 Gaming Laptop - RTX 4060',
    image: 'https://dlcdnwebimgs.asus.com/files/media/4765B8CB-5C6E-48F0-9A95-3E4C9F40C2C6/v1/img/kv/kv.png',
    price: 89990,
    originalPrice: 119990,
    rating: 4.5,
    reviewCount: 892,
    discount: 25,
    isBestSeller: true,
    isAssured: false,
    freeDelivery: false,
    category: 'laptops',
    brand: 'ASUS',
    description: 'High-performance gaming laptop with RTX 4060 graphics',
    inStock: true,
    tags: ['gaming', 'rtx', 'high-performance']
  },
  {
    id: '14',
    name: 'Dell XPS 13 Laptop - 11th Gen Intel Core i7',
    image: 'https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/xps-13-9310-laptop.png',
    price: 124990,
    originalPrice: 149990,
    rating: 4.7,
    reviewCount: 342,
    discount: 17,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: false,
    category: 'laptops',
    brand: 'Dell',
    description: 'Premium ultrabook with stunning 4K display',
    inStock: true,
    tags: ['premium', 'ultrabook', '4k']
  },
  {
    id: '15',
    name: 'MacBook Air M2 - 256GB Space Gray',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-m2-spacegray',
    price: 99900,
    originalPrice: 109900,
    rating: 4.8,
    reviewCount: 2156,
    discount: 9,
    isBestSeller: true,
    isAssured: true,
    freeDelivery: true,
    category: 'laptops',
    brand: 'Apple',
    description: 'Ultra-thin laptop with M2 chip and all-day battery life',
    inStock: true,
    tags: ['m2', 'ultra-thin', 'all-day-battery']
  },
  {
    id: '16',
    name: 'HP Pavilion 15 - Intel Core i5 12th Gen',
    image: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08068736.png',
    price: 54990,
    originalPrice: 64990,
    rating: 4.2,
    reviewCount: 1234,
    discount: 15,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
    category: 'laptops',
    brand: 'HP',
    description: 'Reliable everyday laptop for work and entertainment',
    inStock: true,
    tags: ['budget', 'reliable', 'everyday']
  },
  {
    id: '17',
    name: 'Lenovo ThinkPad X1 Carbon Gen 11',
    image: 'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen11-hero.png',
    price: 189990,
    originalPrice: 209990,
    rating: 4.6,
    reviewCount: 456,
    discount: 10,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: false,
    category: 'laptops',
    brand: 'Lenovo',
    description: 'Business-class ultrabook with exceptional build quality',
    inStock: true,
    tags: ['business', 'premium', 'durable']
  },
  {
    id: '18',
    name: 'MSI Katana 15 Gaming Laptop - RTX 4070',
    image: 'https://asset.msi.com/resize/image/global/product/product_1683700762b6a04196161aee5c0c93d1b7b2b2aa48.png',
    price: 129990,
    originalPrice: 149990,
    rating: 4.4,
    reviewCount: 678,
    discount: 13,
    isBestSeller: false,
    isAssured: false,
    freeDelivery: false,
    category: 'laptops',
    brand: 'MSI',
    description: 'Powerful gaming laptop with RTX 4070 and high refresh rate',
    inStock: true,
    tags: ['gaming', 'rtx-4070', 'high-refresh']
  },

  // Fashion & Clothing
  {
    id: '19',
    name: 'Nike Air Max 270 - White/Black',
    image: 'https://static.nike.com/a/images/t_default/0bca14db-1f1a-4e55-b7b3-dfe26c7c0e72/air-max-270-mens-shoes-KkLcGR.png',
    price: 12999,
    originalPrice: 14999,
    rating: 4.5,
    reviewCount: 2341,
    discount: 13,
    isBestSeller: true,
    isAssured: true,
    freeDelivery: true,
    category: 'fashion',
    brand: 'Nike',
    description: 'Comfortable running shoes with Max Air cushioning',
    inStock: true,
    tags: ['running', 'comfortable', 'athletic']
  },
  {
    id: '20',
    name: 'Adidas Ultraboost 22 - Core Black',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/3b36baf36dd8425a822fae5500f5c7e8_9366/Ultraboost_22_Shoes_Black_GX3064_01_standard.jpg',
    price: 15999,
    originalPrice: 17999,
    rating: 4.6,
    reviewCount: 1876,
    discount: 11,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
    category: 'fashion',
    brand: 'Adidas',
    description: 'Premium running shoes with Boost midsole technology',
    inStock: true,
    tags: ['premium', 'boost', 'running']
  },
  {
    id: '21',
    name: 'Levi\'s 501 Original Fit Jeans - Dark Blue',
    image: 'https://lsco.scene7.com/is/image/lsco/005010114-front-pdp?fmt=jpeg&qlt=70,1&resMode=sharp2',
    price: 3999,
    originalPrice: 4999,
    rating: 4.4,
    reviewCount: 3456,
    discount: 20,
    isBestSeller: true,
    isAssured: true,
    freeDelivery: true,
    category: 'fashion',
    brand: 'Levi\'s',
    description: 'Classic straight-fit jeans in authentic denim',
    inStock: true,
    tags: ['classic', 'denim', 'straight-fit']
  },
  {
    id: '22',
    name: 'Uniqlo Heattech Ultra Warm Crew Neck Long Sleeve T-Shirt',
    image: 'https://im.uniqlo.com/global-cms/spa/resb236d3ad8a1a79d0f8d564dd5e7158da.jpg',
    price: 1299,
    originalPrice: 1599,
    rating: 4.3,
    reviewCount: 987,
    discount: 19,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
    category: 'fashion',
    brand: 'Uniqlo',
    description: 'Thermal base layer with advanced heat retention technology',
    inStock: true,
    tags: ['thermal', 'base-layer', 'warm']
  },

  // Home & Kitchen
  {
    id: '23',
    name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
    image: 'https://m.media-amazon.com/images/I/81trLZT0y6L._SL1500_.jpg',
    price: 8999,
    originalPrice: 10999,
    rating: 4.7,
    reviewCount: 2134,
    discount: 18,
    isBestSeller: true,
    isAssured: true,
    freeDelivery: true,
    category: 'home',
    brand: 'Instant Pot',
    description: 'Versatile 7-in-1 electric pressure cooker for quick meals',
    inStock: true,
    tags: ['pressure-cooker', 'versatile', 'quick-cooking']
  },
  {
    id: '24',
    name: 'Dyson V15 Detect Cordless Vacuum Cleaner',
    image: 'https://www.dyson.in/medialibrary/Group/Dyson/2021/v15/v15-detect-hero.png',
    price: 54990,
    originalPrice: 59990,
    rating: 4.8,
    reviewCount: 567,
    discount: 8,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
    category: 'home',
    brand: 'Dyson',
    description: 'Advanced cordless vacuum with laser dust detection',
    inStock: true,
    tags: ['cordless', 'laser-detection', 'premium']
  },
  {
    id: '25',
    name: 'Philips Air Fryer HD9200/90 - 4.1L',
    image: 'https://m.media-amazon.com/images/I/71vxG3JfU-L._SL1500_.jpg',
    price: 6999,
    originalPrice: 8999,
    rating: 4.5,
    reviewCount: 1234,
    discount: 22,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
    category: 'home',
    brand: 'Philips',
    description: 'Healthy cooking with rapid air technology',
    inStock: true,
    tags: ['healthy-cooking', 'air-fryer', 'rapid-air']
  },
  {
    id: '26',
    name: 'IKEA MALM 6-Drawer Dresser - White',
    image: 'https://www.ikea.com/in/en/images/products/malm-chest-of-6-drawers-white__0627216_pe693264_s5.jpg',
    price: 12999,
    originalPrice: 14999,
    rating: 4.2,
    reviewCount: 876,
    discount: 13,
    isBestSeller: false,
    isAssured: false,
    freeDelivery: false,
    category: 'home',
    brand: 'IKEA',
    description: 'Minimalist 6-drawer dresser for bedroom storage',
    inStock: true,
    tags: ['minimalist', 'storage', 'bedroom']
  },

  // Gaming
  {
    id: '27',
    name: 'PlayStation 5 Console - Standard Edition',
    image: 'https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg',
    price: 54990,
    originalPrice: 59990,
    rating: 4.9,
    reviewCount: 4567,
    discount: 8,
    isBestSeller: true,
    isAssured: true,
    freeDelivery: true,
    category: 'gaming',
    brand: 'Sony',
    description: 'Next-generation gaming console with 4K gaming and ray tracing',
    inStock: true,
    tags: ['4k', 'ray-tracing', 'next-gen']
  },
  {
    id: '28',
    name: 'Xbox Series X Console',
    image: 'https://m.media-amazon.com/images/I/61JGKhqxHxL._SL1500_.jpg',
    price: 52990,
    originalPrice: 57990,
    rating: 4.8,
    reviewCount: 3456,
    discount: 9,
    isBestSeller: true,
    isAssured: true,
    freeDelivery: true,
    category: 'gaming',
    brand: 'Microsoft',
    description: 'Most powerful Xbox console with 4K gaming',
    inStock: true,
    tags: ['4k', 'powerful', 'xbox']
  },
  {
    id: '29',
    name: 'Nintendo Switch OLED Model - White',
    image: 'https://m.media-amazon.com/images/I/61-PblYntsL._SL1500_.jpg',
    price: 34990,
    originalPrice: 37990,
    rating: 4.7,
    reviewCount: 2345,
    discount: 8,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
    category: 'gaming',
    brand: 'Nintendo',
    description: 'Handheld gaming console with vibrant OLED display',
    inStock: true,
    tags: ['handheld', 'oled', 'portable']
  },
  {
    id: '30',
    name: 'SteelSeries Arctis 7P+ Wireless Gaming Headset',
    image: 'https://m.media-amazon.com/images/I/61wYV6VrcuL._SL1500_.jpg',
    price: 14999,
    originalPrice: 17999,
    rating: 4.6,
    reviewCount: 1234,
    discount: 17,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
    category: 'gaming',
    brand: 'SteelSeries',
    description: 'Wireless gaming headset with 30-hour battery life',
    inStock: true,
    tags: ['wireless', 'gaming', 'long-battery']
  },

  // Books
  {
    id: '31',
    name: 'Atomic Habits by James Clear',
    image: 'https://m.media-amazon.com/images/I/91bYsX41DVL._SL1500_.jpg',
    price: 399,
    originalPrice: 499,
    rating: 4.8,
    reviewCount: 12345,
    discount: 20,
    isBestSeller: true,
    isAssured: true,
    freeDelivery: true,
    category: 'books',
    brand: 'Random House',
    description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    inStock: true,
    tags: ['self-help', 'habits', 'bestseller']
  },
  {
    id: '32',
    name: 'The Psychology of Money by Morgan Housel',
    image: 'https://m.media-amazon.com/images/I/81Lb75rUhLL._SL1500_.jpg',
    price: 299,
    originalPrice: 399,
    rating: 4.7,
    reviewCount: 8765,
    discount: 25,
    isBestSeller: true,
    isAssured: true,
    freeDelivery: true,
    category: 'books',
    brand: 'Harriman House',
    description: 'Timeless lessons on wealth, greed, and happiness',
    inStock: true,
    tags: ['finance', 'psychology', 'wealth']
  },
  {
    id: '33',
    name: 'Sapiens by Yuval Noah Harari',
    image: 'https://m.media-amazon.com/images/I/713jIoMO3UL._SL1500_.jpg',
    price: 499,
    originalPrice: 599,
    rating: 4.6,
    reviewCount: 9876,
    discount: 17,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
    category: 'books',
    brand: 'Harper',
    description: 'A Brief History of Humankind',
    inStock: true,
    tags: ['history', 'anthropology', 'bestseller']
  },
  {
    id: '34',
    name: 'The Lean Startup by Eric Ries',
    image: 'https://m.media-amazon.com/images/I/81-QB7nDh4L._SL1500_.jpg',
    price: 449,
    originalPrice: 549,
    rating: 4.5,
    reviewCount: 5432,
    discount: 18,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
    category: 'books',
    brand: 'Crown Business',
    description: 'How Today\'s Entrepreneurs Use Continuous Innovation',
    inStock: true,
    tags: ['business', 'startup', 'innovation']
  },

  // Beauty & Personal Care
  {
    id: '35',
    name: 'The Ordinary Niacinamide 10% + Zinc 1%',
    image: 'https://m.media-amazon.com/images/I/51whecxg4pL._SL1000_.jpg',
    price: 699,
    originalPrice: 899,
    rating: 4.4,
    reviewCount: 2345,
    discount: 22,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
    category: 'beauty',
    brand: 'The Ordinary',
    description: 'High-strength vitamin and mineral blemish formula',
    inStock: true,
    tags: ['skincare', 'niacinamide', 'blemish-control']
  },
  {
    id: '36',
    name: 'CeraVe Foaming Facial Cleanser',
    image: 'https://m.media-amazon.com/images/I/61BdrWAZ3-L._SL1500_.jpg',
    price: 1299,
    originalPrice: 1499,
    rating: 4.6,
    reviewCount: 3456,
    discount: 13,
    isBestSeller: true,
    isAssured: true,
    freeDelivery: true,
    category: 'beauty',
    brand: 'CeraVe',
    description: 'Gentle foaming cleanser for normal to oily skin',
    inStock: true,
    tags: ['cleanser', 'gentle', 'oily-skin']
  },
  {
    id: '37',
    name: 'Olaplex No.3 Hair Perfector',
    image: 'https://m.media-amazon.com/images/I/61CMbd-ZkkL._SL1500_.jpg',
    price: 2499,
    originalPrice: 2999,
    rating: 4.7,
    reviewCount: 1876,
    discount: 17,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
    category: 'beauty',
    brand: 'Olaplex',
    description: 'At-home hair treatment to rebuild broken hair bonds',
    inStock: true,
    tags: ['hair-treatment', 'repair', 'bond-building']
  },
  {
    id: '38',
    name: 'Fenty Beauty Pro Filt\'r Soft Matte Longwear Foundation',
    image: 'https://m.media-amazon.com/images/I/71BNTRrA2eL._SL1500_.jpg',
    price: 3299,
    originalPrice: 3699,
    rating: 4.5,
    reviewCount: 1234,
    discount: 11,
    isBestSeller: false,
    isAssured: true,
    freeDelivery: true,
    category: 'beauty',
    brand: 'Fenty Beauty',
    description: 'Long-wearing, medium-to-full coverage foundation',
    inStock: true,
    tags: ['foundation', 'long-wear', 'full-coverage']
  },
  
  // Test product with broken image to demonstrate fallback
  {
    id: '39',
    name: 'Test Product - Broken Image',
    image: 'https://broken-image-url-that-will-fail.com/image.jpg',
    price: 999,
    originalPrice: 1299,
    rating: 4.0,
    reviewCount: 100,
    discount: 23,
    isBestSeller: false,
    isAssured: false,
    freeDelivery: true,
    category: 'test',
    brand: 'Test Brand',
    description: 'This product has a broken image URL to test the fallback functionality',
    inStock: true,
    tags: ['test', 'fallback', 'demo']
  }
];

// Helper functions for filtering and categorization
export function extractBrand(name: string): string {
  const brandMap: { [key: string]: string } = {
    'iphone': 'Apple',
    'apple': 'Apple',
    'samsung': 'Samsung',
    'oneplus': 'OnePlus',
    'google': 'Google',
    'pixel': 'Google',
    'xiaomi': 'Xiaomi',
    'sony': 'Sony',
    'jbl': 'JBL',
    'bose': 'Bose',
    'sennheiser': 'Sennheiser',
    'asus': 'ASUS',
    'dell': 'Dell',
    'macbook': 'Apple',
    'hp': 'HP',
    'lenovo': 'Lenovo',
    'msi': 'MSI',
    'nike': 'Nike',
    'adidas': 'Adidas',
    'levi': 'Levi\'s',
    'uniqlo': 'Uniqlo',
    'instant pot': 'Instant Pot',
    'dyson': 'Dyson',
    'philips': 'Philips',
    'ikea': 'IKEA',
    'playstation': 'Sony',
    'xbox': 'Microsoft',
    'nintendo': 'Nintendo',
    'steelseries': 'SteelSeries',
    'random house': 'Random House',
    'harriman house': 'Harriman House',
    'harper': 'Harper',
    'crown business': 'Crown Business',
    'the ordinary': 'The Ordinary',
    'cerave': 'CeraVe',
    'olaplex': 'Olaplex',
    'fenty': 'Fenty Beauty'
  };

  const lowerName = name.toLowerCase();
  for (const [keyword, brand] of Object.entries(brandMap)) {
    if (lowerName.includes(keyword)) {
      return brand;
    }
  }
  return 'Other';
}

export function matchesCategory(product: Product, category?: string): boolean {
  if (!category) return true;
  
  const categoryMap: { [key: string]: string[] } = {
    'mobiles': ['mobiles'],
    'mobile': ['mobiles'],
    'smartphone': ['mobiles'],
    'electronics': ['electronics'],
    'electronic': ['electronics'],
    'audio': ['electronics'],
    'headphone': ['electronics'],
    'earbud': ['electronics'],
    'laptops': ['laptops'],
    'laptop': ['laptops'],
    'computer': ['laptops'],
    'fashion': ['fashion'],
    'clothing': ['fashion'],
    'shoes': ['fashion'],
    'jeans': ['fashion'],
    'home': ['home'],
    'kitchen': ['home'],
    'appliance': ['home'],
    'furniture': ['home'],
    'gaming': ['gaming'],
    'game': ['gaming'],
    'console': ['gaming'],
    'books': ['books'],
    'book': ['books'],
    'beauty': ['beauty'],
    'skincare': ['beauty'],
    'makeup': ['beauty'],
    'cosmetic': ['beauty']
  };

  const lowerCategory = category.toLowerCase();
  const matchingCategories = categoryMap[lowerCategory] || [lowerCategory];
  
  return matchingCategories.some(cat => 
    product.category.toLowerCase().includes(cat) ||
    product.name.toLowerCase().includes(cat) ||
    product.tags?.some(tag => tag.toLowerCase().includes(cat))
  );
}

export function getUniqueBrands(): string[] {
  const brands = new Set(allProducts.map(product => product.brand));
  return Array.from(brands).sort();
}

export function getUniqueCategories(): string[] {
  const categories = new Set(allProducts.map(product => product.category));
  return Array.from(categories).sort();
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter(product => matchesCategory(product, category));
}

export function getProductsByBrand(brand: string): Product[] {
  return allProducts.filter(product => product.brand === brand);
}

export function getBestSellers(): Product[] {
  return allProducts.filter(product => product.isBestSeller);
}

export function getProductsWithDiscount(): Product[] {
  return allProducts.filter(product => product.discount && product.discount > 0);
}

export function getProductsByPriceRange(minPrice: number, maxPrice: number): Product[] {
  return allProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
}

export function getProductsByRating(minRating: number): Product[] {
  return allProducts.filter(product => product.rating >= minRating);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return allProducts.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.brand.toLowerCase().includes(lowerQuery) ||
    product.description?.toLowerCase().includes(lowerQuery) ||
    product.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getRandomProducts(count: number): Product[] {
  const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function getProductById(id: string): Product | undefined {
  return allProducts.find(product => product.id === id);
}

export function getRelatedProducts(productId: string, count: number = 4): Product[] {
  const product = getProductById(productId);
  if (!product) return [];
  
  const related = allProducts.filter(p => 
    p.id !== productId && 
    (p.category === product.category || p.brand === product.brand)
  );
  
  return getRandomProducts(count).filter(p => p.id !== productId);
}
