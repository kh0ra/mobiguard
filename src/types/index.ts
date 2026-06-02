export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  quote: string;
  image: string;
}

export interface ProjectShowcase {
  id: string;
  name: string;
  location?: string;
  tagline: string;
  description: string;
  tags: string[];
  mainImage: string;
  gallery: string[];
}