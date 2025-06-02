export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'desserts' | 'Coffee';
  popular?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface TimeSchedule {
  day: string;
  hours: string;
}
