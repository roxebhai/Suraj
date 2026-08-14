export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  features: string[];
}

export type GalleryCategory = 'all' | 'mandap' | 'entrance' | 'catering' | 'night';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'mandap' | 'entrance' | 'catering' | 'night';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  source: string;
  tag?: string;
}

export interface StatBox {
  number: string;
  label: string;
  sublabel: string;
  icon: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
}
