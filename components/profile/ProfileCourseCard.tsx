import Link from 'next/link'
import Image from 'next/image'
import { FaEye } from 'react-icons/fa'

interface ProfileCourseProps {
  course: {
    id: string;
    title: string;
    image: string;
    progress: number;
    lastActivity: string;
    instructor: string;
    totalLessons: number;
    completedLessons: number;
  }
}

const ProfileCourseCard = ({ course }: ProfileCourseProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative w-full md:w-28 h-28 rounded-lg overflow-hidden shrink-0">
          <Image 
            src={course.image} 
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex-grow">
          <div className="flex justify-between">
            <h3 className="font-bold mb-2 line-clamp-1">{course.title}</h3>
            <span className="text-sm text-gray-500">Активность: {course.lastActivity}</span>
          </div>
          
          <div className="text-sm text-gray-600 mb-3">
            Преподаватель: {course.instructor}
          </div>
          
          <div className="mb-2">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">Прогресс</span>
              <span>{course.progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full ${course.progress === 100 ? 'bg-green-500' : 'bg-primary-500'}`}
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              {course.completedLessons} из {course.totalLessons} уроков пройдено
            </div>
            <Link 
              href={`/courses/${course.id}`} 
              className="btn btn-primary btn-sm inline-flex items-center"
            >
              <FaEye className="mr-1" /> Продолжить
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCourseCard 