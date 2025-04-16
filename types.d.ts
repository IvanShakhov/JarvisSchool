import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module 'next/link';
declare module 'next/image';
declare module 'react-icons/fa';
declare module 'framer-motion';

// Определения типов курсов
interface Course {
  id: string | number;
  title: string;
  description: string;
  image: string;
  price: number;
  oldPrice?: number;
  category: string;
  instructor: string;
  rating: number;
  students: number;
  level: string;
}

// Определения типов для отзывов
interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
} 