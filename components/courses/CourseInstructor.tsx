"use client"

import Image from 'next/image'
import { FaStar, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa'

interface Instructor {
  name: string;
  avatar: string;
  bio: string;
  coursesCount: number;
  studentsCount: number;
  ratingAverage: number;
}

interface CourseInstructorProps {
  instructor: Instructor;
}

const CourseInstructor = ({ instructor }: CourseInstructorProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">Преподаватель курса</h2>
      
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
            <Image 
              src={instructor.avatar} 
              alt={instructor.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="md:w-3/4">
          <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
          
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <FaStar className="text-yellow-400 mr-1" />
              <span>{instructor.ratingAverage} рейтинг</span>
            </div>
            <div className="flex items-center">
              <FaUserGraduate className="text-gray-500 mr-1" />
              <span>{instructor.studentsCount} студентов</span>
            </div>
            <div className="flex items-center">
              <FaChalkboardTeacher className="text-gray-500 mr-1" />
              <span>{instructor.coursesCount} курсов</span>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">{instructor.bio}</p>
          
          <button className="text-primary-600 hover:text-primary-700 flex items-center">
            <span className="mr-1">Показать все курсы автора</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseInstructor 