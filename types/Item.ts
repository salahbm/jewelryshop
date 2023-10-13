// Define an interface for the jewelry item
export interface JewelryItem {
  id: number; // Unique identifier for the item
  title: string; // Product title
  description: string; // Product description
  price: number; // Product price
  images: string[]; // Array of image URLs
  metalType: string; // Metal type (e.g., gold, silver)
  gemstones?: Gemstone[]; // Optional gemstone information
  jewelrySize?: string[]; // Optional size options
  chainLength?: string; // Optional chain length
  weight?: number; // Optional weight
  style: string; // Jewelry style or design
  closureType?: string; // Optional closure type (e.g., lobster clasp)
  packaging: string; // Packaging description
  careInstructions: string; // Care instructions
  certifications?: string[]; // Optional certifications
  customizationOptions?: string[]; // Optional customization options
  shippingInfo: ShippingInfo; // Shipping information
  returnsPolicy: ReturnsPolicy; // Returns and refunds policy
  reviews: Review[]; // Array of customer reviews and ratings
  relatedProducts: number[]; // Array of related product IDs
  contactInfo: ContactInfo; // Contact information
  paymentOptions: string[]; // Accepted payment methods
  securityAndPrivacyInfo: string; // Security and privacy information
  termsAndConditionsLink: string; // URL to terms and conditions
  warrantyInfo?: string; // Optional warranty information
  availability: string; // Availability status
}

// Define interfaces for related types
interface Gemstone {
  type: string; // Gemstone type (e.g., diamond, sapphire)
  quality: string; // Gemstone quality (e.g., AAA)
  quantity: number; // Quantity of gemstones
}

interface ShippingInfo {
  methods: string[]; // Array of shipping methods (e.g., standard, expedited)
  deliveryTimes: string[]; // Array of delivery times
  costs: number[]; // Array of associated shipping costs
}

interface ReturnsPolicy {
  description: string; // Returns policy description
  timeFrame: string; // Returns timeFrame (e.g., 30 days)
  restockingFee: number; // Restocking fee percentage
}

interface Review {
  rating: number; // Customer rating (e.g., 4.5)
  comment: string; // Customer review comment
}

interface ContactInfo {
  email: string; // Contact email
  phone: string; // Contact phone number
}
