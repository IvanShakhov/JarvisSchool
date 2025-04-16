"use client"

import Link from 'next/link'
import Image from 'next/image'
import { FaStar, FaUserGraduate } from 'react-icons/fa'

// Определение типа для объекта курса
interface CourseProps {
  course: {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
    instructor: string;
    rating: number;
    students: number;
    level: string;
  }
}

const CourseCard = ({ course }: CourseProps) => {
  // Форматирование цены
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(price);
  }

  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image 
          src={course.image} 
          alt={course.title}
          fill
          className="object-cover rounded-t-xl"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-lg text-xs font-medium text-primary-700">
          {course.level}
        </div>
      </div>
      <div className="p-5">
        <Link href={`/courses/${course.id}`} className="block">
          <h3 className="text-lg font-bold mb-2 hover:text-primary-500 transition-colors line-clamp-2">
            {course.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <FaUserGraduate className="mr-1" />
            <span>{course.students} студентов</span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-700 mb-4">
          <span>Преподаватель: </span>
          <span className="font-medium ml-1">{course.instructor}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">{formatPrice(course.price)}</span>
          <Link href={`/courses/${course.id}`} className="btn btn-primary">
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseCard 