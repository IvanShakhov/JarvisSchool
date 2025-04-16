"use client"

import Link from 'next/link'
import { useState, Fragment } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Course } from '@/lib/types'

// Демо данные для курсов
const demoCoursesData: Course[] = [
  {
    id: 1,
    title: 'Основы JavaScript для начинающих',
    description: 'Изучите основы JavaScript с нуля и постройте свои первые интерактивные веб-приложения.',
    image: '/images/courses/web-dev.jpg',
    price: 6900,
    oldPrice: 9900,
    category: 'Программирование',
    instructor: 'Алексей Иванов',
    rating: 4.9,
    students: 1245,
    level: 'Начинающий'
  },
  {
    id: 2,
    title: 'UX/UI Дизайн: от новичка до профессионала',
    description: 'Освойте принципы проектирования пользовательских интерфейсов и создания первоклассного опыта взаимодействия.',
    image: '/images/courses/ux-ui.jpg',
    price: 12900,
    oldPrice: 15900,
    category: 'Дизайн',
    instructor: 'Мария Петрова',
    rating: 4.8,
    students: 876,
    level: 'Продвинутый'
  },
  {
    id: 3,
    title: 'Деловой английский для IT-специалистов',
    description: 'Специализированный курс английского языка для работы в международных IT-компаниях.',
    image: '/images/courses/english.jpg',
    price: 8900,
    oldPrice: 11900,
    category: 'Языки',
    instructor: 'Дмитрий Смирнов',
    rating: 4.7,
    students: 1532,
    level: 'Средний'
  },
  {
    id: 4,
    title: 'Основы управления IT-проектами',
    description: 'Изучите методологии управления проектами и инструменты для эффективной координации команды разработки.',
    image: '/images/courses/business.jpg',
    price: 10900,
    oldPrice: 13900,
    category: 'Менеджмент',
    instructor: 'Антон Николаев',
    rating: 4.8,
    students: 943,
    level: 'Средний'
  }
]

// Компонент карточки курса
interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        <Image 
          src={course.image} 
          alt={course.title} 
          width={400} 
          height={225} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
          {course.category}
        </div>
        {course.oldPrice && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Скидка {Math.round(100 - (course.price / course.oldPrice) * 100)}%
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center mb-3">
          <div className="mr-1 text-yellow-400">★★★★★</div>
          <div className="text-sm text-gray-600">
            <span className="font-medium">{course.rating}</span>
            <span className="mx-1">·</span>
            <span>{course.students} студентов</span>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span className="font-medium bg-blue-50 text-blue-800 px-2 py-1 rounded mr-2">{course.level}</span>
          <span className="text-gray-500">Автор: {course.instructor}</span>
        </div>
        
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-blue-600 font-bold text-xl">{course.price.toLocaleString()} ₽</span>
            {course.oldPrice && (
              <span className="text-gray-400 text-sm line-through ml-2">
                {course.oldPrice.toLocaleString()} ₽
              </span>
            )}
          </div>
          <Link 
            href={`/courses/${course.id}`} 
            className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded text-sm font-medium transition-colors"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

const CoursesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Наши популярные курсы</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите курс и начните свое обучение сегодня. Все курсы созданы экспертами и включают практические проекты.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {demoCoursesData.map((course) => (
            <Fragment key={course.id.toString()}>
              <CourseCard course={course} />
            </Fragment>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/courses" 
            className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
          >
            Смотреть все курсы
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CoursesSection 