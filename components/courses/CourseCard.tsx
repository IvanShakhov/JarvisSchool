"use client"

import Link from 'next/link'
import Image from 'next/image'
import { FaStar, FaUserGraduate } from 'react-icons/fa'
import type { Course } from '@/lib/types'

// Определение типа для пропсов компонента
interface CourseProps {
  course: Course;
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
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-video w-full">
        <Image 
          src={course.image} 
          alt={course.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-semibold text-blue-600">
          {course.level}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2 flex items-center text-sm text-gray-500">
          <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
            {course.category}
          </span>
        </div>
        <Link href={`/courses/${course.id}`} className="block">
          <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors line-clamp-2 text-gray-800">
            {course.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {course.description}
        </p>
        <div className="flex items-center mb-4 text-sm text-gray-600">
          <span className="font-medium mr-1">Преподаватель:</span>
          <span>{course.instructor}</span>
        </div>
        <div className="flex justify-between items-center py-3 border-t border-gray-100">
          <div className="flex items-center">
            <div className="flex items-center mr-3">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="font-medium">{course.rating}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <FaUserGraduate className="mr-1" />
              <span>{course.students}</span>
            </div>
          </div>
          <span className="font-bold text-lg text-blue-600">{formatPrice(course.price)}</span>
        </div>
        <Link 
          href={`/courses/${course.id}`} 
          className="mt-4 w-full inline-block text-center py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Перейти к курсу
        </Link>
      </div>
    </div>
  )
}

export default CourseCard 