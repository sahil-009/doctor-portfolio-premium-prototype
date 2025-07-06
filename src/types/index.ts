export interface Doctor {
  name: string;
  title: string;
  specialization: string;
  experience: number;
  location: string;
  rating: number;
  totalSurgeries: number;
  patientsHelped: number;
  image: string;
  tagline: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'award' | 'milestone' | 'research' | 'conference';
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  treatment?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  slug: string;
  category: string;
  readTime: number;
}

export interface BookingForm {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  service: string;
  message: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  mapUrl: string;
}