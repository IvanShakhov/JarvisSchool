"use client"

import { useState } from 'react'
import Image from 'next/image'
import ProfileCourseCard from './ProfileCourseCard'

interface ProfileTabsProps {
  courses: {
    id: string;
    title: string;
    image: string;
    progress: number;
    lastActivity: string;
    instructor: string;
    totalLessons: number;
    completedLessons: number;
  }[];
  certificates: {
    id: string;
    title: string;
    issueDate: string;
    image: string;
  }[];
}

const ProfileTabs = ({ courses, certificates }: ProfileTabsProps) => {
  const [activeTab, setActiveTab] = useState('courses') // 'courses' или 'certificates'

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Табы */}
      <div className="flex border-b">
        <button
          className={`flex-1 py-4 text-center font-medium ${
            activeTab === 'courses' 
              ? 'text-primary-600 border-b-2 border-primary-500' 
              : 'text-gray-600 hover:text-primary-500'
          }`}
          onClick={() => setActiveTab('courses')}
        >
          Мои курсы
        </button>
        <button
          className={`flex-1 py-4 text-center font-medium ${
            activeTab === 'certificates' 
              ? 'text-primary-600 border-b-2 border-primary-500' 
              : 'text-gray-600 hover:text-primary-500'
          }`}
          onClick={() => setActiveTab('certificates')}
        >
          Сертификаты
        </button>
      </div>

      {/* Содержимое табов */}
      <div className="p-6">
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Мои курсы ({courses.length})</h3>
              <div className="text-sm text-gray-500">
                <select className="p-2 border rounded">
                  <option>Все курсы</option>
                  <option>В процессе</option>
                  <option>Завершенные</option>
                </select>
              </div>
            </div>
            
            {courses.length > 0 ? (
              <div className="space-y-4">
                {courses.map(course => (
                  <ProfileCourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">У вас пока нет курсов</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'certificates' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Сертификаты ({certificates.length})</h3>
            </div>
            
            {certificates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map(certificate => (
                  <div key={certificate.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-44 w-full">
                      <Image 
                        src={certificate.image} 
                        alt={certificate.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-1">{certificate.title}</h4>
                      <p className="text-sm text-gray-600">Выдан: {certificate.issueDate}</p>
                      <div className="mt-3 flex justify-between">
                        <button className="text-primary-600 text-sm hover:underline">
                          Просмотреть
                        </button>
                        <button className="text-primary-600 text-sm hover:underline">
                          Скачать
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">У вас пока нет сертификатов</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileTabs 