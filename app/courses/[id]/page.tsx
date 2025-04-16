import Image from 'next/image'
import Link from 'next/link'
import { FaStar, FaUsers, FaPlay, FaClock, FaFileAlt, FaCheck, FaLock } from 'react-icons/fa'
import CourseContent from '@/components/courses/CourseContent'
import CourseInstructor from '@/components/courses/CourseInstructor'

// Заглушка данных для курса
const courseData = {
  id: "1",
  title: "Веб-разработка с нуля до профи",
  description: "Полный курс по веб-разработке, который охватывает HTML, CSS, JavaScript, React, Node.js и многое другое. Вы научитесь создавать современные и отзывчивые веб-приложения с нуля.",
  longDescription: `Вы мечтаете создавать красивые и функциональные веб-сайты, которые поражают воображение? Тогда наш курс "Веб-разработка с нуля до профи" создан именно для вас!

За время обучения вы пройдете путь от базовых понятий до разработки сложных веб-приложений с использованием современных технологий и фреймворков. Мы не просто дадим вам теорию - вы будете создавать реальные проекты, которые сможете добавить в своё портфолио.

Программа курса построена так, чтобы даже новички без опыта программирования смогли постепенно освоить все необходимые инструменты и понятия. А наши опытные преподаватели будут сопровождать вас на протяжении всего пути.`,
  image: "/images/courses/web-dev.jpg",
  duration: "120 часов",
  lessons: 48,
  students: 1245,
  price: 12900,
  rating: 4.8,
  reviewCount: 325,
  level: "Начинающий",
  category: "programming",
  instructor: {
    name: "Алексей Петров",
    avatar: "/images/instructors/instructor-1.jpg",
    bio: "Фронтенд-разработчик с опытом более 10 лет. Работал в крупных IT-компаниях, ведет собственный YouTube канал о веб-разработке.",
    coursesCount: 7,
    studentsCount: 5600,
    ratingAverage: 4.9
  },
  whatYouWillLearn: [
    "Основы HTML, CSS и JavaScript",
    "Современные фреймворки (React, Vue)",
    "Разработка серверной части на Node.js",
    "Работа с базами данных",
    "Развертывание веб-приложений",
    "Оптимизация производительности",
    "Адаптивный дизайн для мобильных устройств",
    "Основы UX/UI дизайна"
  ],
  requirements: [
    "Базовые навыки работы с компьютером",
    "Желание учиться и развиваться",
    "Компьютер с доступом в интернет",
    "Базовое понимание английского языка будет плюсом"
  ],
  modulesList: [
    {
      id: "m1",
      title: "Введение в веб-разработку",
      description: "Основные понятия, инструменты и настройка рабочего окружения",
      lessons: [
        { id: "l1", title: "Знакомство с курсом", duration: "10:15", isLocked: false },
        { id: "l2", title: "Как работает интернет", duration: "15:30", isLocked: false },
        { id: "l3", title: "Необходимое ПО для разработки", duration: "12:45", isLocked: true }
      ]
    },
    {
      id: "m2",
      title: "Основы HTML",
      description: "Изучение базовых элементов и структуры HTML документа",
      lessons: [
        { id: "l4", title: "Структура HTML документа", duration: "18:20", isLocked: true },
        { id: "l5", title: "Теги и атрибуты", duration: "20:15", isLocked: true },
        { id: "l6", title: "Семантическая верстка", duration: "25:10", isLocked: true },
        { id: "l7", title: "Формы и валидация", duration: "22:30", isLocked: true }
      ]
    },
    {
      id: "m3",
      title: "CSS основы",
      description: "Стилизация веб-страниц с помощью CSS",
      lessons: [
        { id: "l8", title: "Синтаксис CSS", duration: "14:50", isLocked: true },
        { id: "l9", title: "Селекторы и их приоритеты", duration: "19:25", isLocked: true },
        { id: "l10", title: "Блочная модель", duration: "21:15", isLocked: true },
        { id: "l11", title: "Flexbox и Grid", duration: "30:45", isLocked: true }
      ]
    },
    {
      id: "m4",
      title: "JavaScript для начинающих",
      description: "Основы программирования на JavaScript",
      lessons: [
        { id: "l12", title: "Переменные и типы данных", duration: "22:10", isLocked: true },
        { id: "l13", title: "Функции и области видимости", duration: "25:30", isLocked: true },
        { id: "l14", title: "Работа с DOM", duration: "28:15", isLocked: true },
        { id: "l15", title: "События и обработчики", duration: "23:40", isLocked: true }
      ]
    }
  ]
}

export default function CoursePage({ params }: { params: { id: string } }) {
  // Здесь в реальном приложении мы бы загружали данные о курсе по params.id
  // В данном примере мы просто используем статичные данные

  return (
    <div className="min-h-screen py-10">
      <div className="container-custom">
        {/* Шапка курса */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl overflow-hidden shadow-lg mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{courseData.title}</h1>
              <p className="text-lg opacity-90 mb-6">{courseData.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="font-medium">{courseData.rating}</span>
                  <span className="text-sm opacity-80 ml-1">({courseData.reviewCount} отзывов)</span>
                </div>
                <div className="flex items-center">
                  <FaUsers className="opacity-80 mr-1" />
                  <span className="text-sm opacity-80">{courseData.students} студентов</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="opacity-80 mr-1" />
                  <span className="text-sm opacity-80">{courseData.duration}</span>
                </div>
              </div>
              
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image 
                    src={courseData.instructor.avatar} 
                    alt={courseData.instructor.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <span>Автор: <strong>{courseData.instructor.name}</strong></span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="btn bg-white text-primary-700 hover:bg-gray-100">
                  Начать обучение
                </button>
                <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-700">
                  Добавить в избранное
                </button>
              </div>
            </div>
            
            <div className="relative h-64 lg:h-auto">
              <div className="rounded-xl overflow-hidden h-full relative shadow-xl">
                <Image 
                  src={courseData.image} 
                  alt={courseData.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center hover:bg-opacity-100 transition-colors">
                    <FaPlay className="text-primary-600 text-2xl ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Основное содержимое */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {/* О курсе */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">О курсе</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 whitespace-pre-line">{courseData.longDescription}</p>
              </div>
            </div>
            
            {/* Чему вы научитесь */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Чему вы научитесь</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courseData.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Требования */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Требования</h2>
              <ul className="space-y-3">
                {courseData.requirements.map((req, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 mr-3"></div>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Содержание курса */}
            <CourseContent modules={courseData.modulesList} />
            
            {/* Автор курса */}
            <CourseInstructor instructor={courseData.instructor} />
          </div>
          
          {/* Боковая панель */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-20">
              <div className="text-3xl font-bold text-primary-700 mb-4">
                {new Intl.NumberFormat('ru-RU', {
                  style: 'currency',
                  currency: 'RUB',
                  maximumFractionDigits: 0
                }).format(courseData.price)}
              </div>
              
              <button className="btn btn-primary w-full mb-3">
                Начать обучение сейчас
              </button>
              <button className="btn btn-outline w-full mb-6">
                Бесплатная пробная неделя
              </button>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b">
                  <div className="flex items-center">
                    <FaClock className="text-gray-500 mr-2" />
                    <span className="text-gray-700">Длительность</span>
                  </div>
                  <span className="font-medium">{courseData.duration}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <div className="flex items-center">
                    <FaFileAlt className="text-gray-500 mr-2" />
                    <span className="text-gray-700">Уроков</span>
                  </div>
                  <span className="font-medium">{courseData.lessons}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <div className="flex items-center">
                    <FaUsers className="text-gray-500 mr-2" />
                    <span className="text-gray-700">Студентов</span>
                  </div>
                  <span className="font-medium">{courseData.students}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Уровень</span>
                  </div>
                  <span className="font-medium">{courseData.level}</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Курс включает:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Пожизненный доступ
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Дополнительные материалы
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Сертификат о прохождении
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Поддержка преподавателя
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 