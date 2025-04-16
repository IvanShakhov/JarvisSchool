// Определения типов курсов
export interface Course {
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
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
}

// Определения типов для модулей курса
export interface Lesson {
  id: string;
  title: string;
  duration: string;
  preview: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

// Определения для инструктора
export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  ratingAverage: number;
  studentsCount: number;
  coursesCount: number;
}

// Типы для профиля пользователя
export interface ProfileCourse {
  id: string;
  title: string;
  image: string;
  instructor: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  lastActivity: string;
}

export interface Certificate {
  id: string;
  title: string;
  courseTitle: string;
  date: string;
  image: string;
} 