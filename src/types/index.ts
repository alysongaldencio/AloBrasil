// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  location?: string;
  joinDate: Date;
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'community' | 'events' | 'support' | 'professional';
}

// Event types
export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  maxParticipants?: number;
  currentParticipants: number;
  organizer: User;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}
