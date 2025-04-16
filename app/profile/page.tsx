import { FaUser, FaGraduationCap, FaClock, FaCertificate, FaChartLine } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import ProfileCourseCard from '@/components/profile/ProfileCourseCard'
import ProfileTabs from '@/components/profile/ProfileTabs'

// Заглушка для данных профиля
const userData = {
  name: "Александр Иванов",
  email: "alex.ivanov@example.com",
  avatar: "/images/profile/avatar.jpg",
  enrolledCourses: 5,
  completedCourses: 2,
  certificatesEarned: 2,
  totalHoursLearned: 48,
  joinedDate: "Июнь 2023"
}

// Заглушка для курсов пользователя
const userCourses = [
  {
    id: "1",
    title: "Веб-разработка с нуля до профи",
    image: "/images/courses/web-dev.jpg",
    progress: 85,
    lastActivity: "Вчера",
    instructor: "Алексей Петров",
    totalLessons: 48,
    completedLessons: 41
  },
  {
    id: "2",
    title: "UX/UI дизайн: создавайте привлекательные интерфейсы",
    image: "/images/courses/ux-ui.jpg",
    progress: 35,
    lastActivity: "3 дня назад",
    instructor: "Мария Иванова",
    totalLessons: 36,
    completedLessons: 12
  },
  {
    id: "4",
    title: "Основы бизнес-аналитики",
    image: "/images/courses/business.jpg",
    progress: 100,
    lastActivity: "1 месяц назад",
    instructor: "Екатерина Соколова",
    totalLessons: 32,
    completedLessons: 32
  }
]

// Заглушка для сертификатов
const userCertificates = [
  {
    id: "cert1",
    title: "Основы бизнес-аналитики",
    issueDate: "15 мая 2023",
    image: "/images/certificates/business.jpg"
  },
  {
    id: "cert2",
    title: "Английский для начинающих",
    issueDate: "3 марта 2023",
    image: "/images/certificates/english.jpg"
  }
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Боковая панель профиля */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-20">
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-primary-100">
                  <Image 
                    src={userData.avatar} 
                    alt={userData.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h1 className="text-xl font-bold">{userData.name}</h1>
                <p className="text-gray-600">{userData.email}</p>
                <p className="text-sm text-gray-500 mt-1">Участник с {userData.joinedDate}</p>
              </div>

              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                      <FaGraduationCap className="text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Курсов записан</p>
                      <p className="font-bold">{userData.enrolledCourses}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <FaChartLine className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Курсов завершено</p>
                      <p className="font-bold">{userData.completedCourses}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                      <FaCertificate className="text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Сертификатов</p>
                      <p className="font-bold">{userData.certificatesEarned}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <FaClock className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Всего часов обучения</p>
                      <p className="font-bold">{userData.totalHoursLearned}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/profile/settings" className="btn btn-outline w-full">
                  Настройки профиля
                </Link>
              </div>
            </div>
          </div>
          
          {/* Основной контент */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Добро пожаловать, {userData.name.split(' ')[0]}!</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary-700 mb-1">Ваш прогресс</h3>
                  <p className="text-sm text-gray-600">Продолжайте обучение, чтобы достичь своих целей!</p>
                </div>
                <div className="bg-secondary-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-secondary-700 mb-1">Новые курсы</h3>
                  <p className="text-sm text-gray-600">Исследуйте наши новые курсы.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-700 mb-1">Рекомендации</h3>
                  <p className="text-sm text-gray-600">Курсы, которые могут вам понравиться.</p>
                </div>
              </div>
            </div>
            
            {/* Вкладки */}
            <ProfileTabs 
              courses={userCourses}
              certificates={userCertificates}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 