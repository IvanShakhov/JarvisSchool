"use client"

import { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaPlay, FaLock } from 'react-icons/fa'

interface Lesson {
  id: string;
  title: string;
  duration: string;
  isLocked: boolean;
}

interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

interface CourseContentProps {
  modules: Module[];
}

const CourseContent = ({ modules }: CourseContentProps) => {
  const [openModules, setOpenModules] = useState<string[]>([modules[0].id])

  const toggleModule = (moduleId: string) => {
    setOpenModules(prev => 
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    )
  }

  const totalLessons = modules.reduce((total, module) => total + module.lessons.length, 0)
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Содержание курса</h2>
        <div className="text-sm text-gray-600">
          {totalLessons} уроков • {calculateTotalDuration(modules)}
        </div>
      </div>
      
      <div className="space-y-4">
        {modules.map((module) => (
          <div key={module.id} className="border rounded-lg overflow-hidden">
            <div 
              className="p-4 bg-gray-50 flex justify-between items-center cursor-pointer"
              onClick={() => toggleModule(module.id)}
            >
              <div>
                <h3 className="font-semibold">{module.title}</h3>
                <p className="text-sm text-gray-600">{module.description}</p>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-3">{module.lessons.length} уроков</span>
                {openModules.includes(module.id) ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </div>
            </div>
            
            {openModules.includes(module.id) && (
              <div className="divide-y">
                {module.lessons.map((lesson) => (
                  <div key={lesson.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        lesson.isLocked ? 'bg-gray-100 text-gray-400' : 'bg-primary-100 text-primary-600'
                      }`}>
                        {lesson.isLocked ? <FaLock size={12} /> : <FaPlay size={12} />}
                      </div>
                      <div>
                        <h4 className={`font-medium ${lesson.isLocked ? 'text-gray-500' : 'text-gray-800'}`}>
                          {lesson.title}
                        </h4>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {lesson.duration}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Вспомогательная функция для расчета общей продолжительности
const calculateTotalDuration = (modules: Module[]): string => {
  let totalMinutes = 0
  let totalSeconds = 0
  
  modules.forEach(module => {
    module.lessons.forEach(lesson => {
      const [minutes, seconds] = lesson.duration.split(':').map(Number)
      totalMinutes += minutes
      totalSeconds += seconds
    })
  })
  
  totalMinutes += Math.floor(totalSeconds / 60)
  totalSeconds = totalSeconds % 60
  
  const hours = Math.floor(totalMinutes / 60)
  const remainingMinutes = totalMinutes % 60
  
  if (hours > 0) {
    return `${hours} ч ${remainingMinutes} мин`
  } else {
    return `${totalMinutes} мин`
  }
}

export default CourseContent 