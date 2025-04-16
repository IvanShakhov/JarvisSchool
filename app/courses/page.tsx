import Image from 'next/image'
import Link from 'next/link'

// Данные о курсах (в реальном приложении они бы подгружались с сервера)
const coursesData = [
  {
    id: '1',
    title: 'Основы веб-разработки',
    description: 'Изучите HTML, CSS и JavaScript с нуля. Создавайте современные и отзывчивые веб-сайты.',
    level: 'Начинающий',
    duration: '8 недель',
    lessons: 24,
    price: 12000,
    image: '/images/courses/web-development.jpg',
    category: 'Программирование'
  },
  {
    id: '2',
    title: 'React для профессионалов',
    description: 'Освойте продвинутые концепции React, Redux и построение сложных пользовательских интерфейсов.',
    level: 'Продвинутый',
    duration: '10 недель',
    lessons: 30,
    price: 18000,
    image: '/images/courses/react.jpg',
    category: 'Программирование'
  },
  {
    id: '3',
    title: 'UX/UI дизайн',
    description: 'Научитесь создавать привлекательные и удобные интерфейсы. Изучите Figma, принципы UI/UX дизайна.',
    level: 'Средний',
    duration: '6 недель',
    lessons: 18,
    price: 15000,
    image: '/images/courses/ux-ui.jpg',
    category: 'Дизайн'
  },
  {
    id: '4',
    title: 'Программирование на Python',
    description: 'Изучите один из самых популярных языков программирования. Автоматизация, анализ данных и веб-разработка.',
    level: 'Начинающий',
    duration: '8 недель',
    lessons: 24,
    price: 14000,
    image: '/images/courses/python.jpg',
    category: 'Программирование'
  },
  {
    id: '5',
    title: 'Аналитика данных',
    description: 'Научитесь анализировать большие объемы данных, визуализировать результаты и принимать решения на основе данных.',
    level: 'Средний',
    duration: '12 недель',
    lessons: 36,
    price: 20000,
    image: '/images/courses/data-analytics.jpg',
    category: 'Аналитика'
  },
  {
    id: '6',
    title: 'DevOps для разработчиков',
    description: 'Изучите инструменты и практики непрерывной интеграции и доставки (CI/CD), Docker, Kubernetes.',
    level: 'Продвинутый',
    duration: '10 недель',
    lessons: 30,
    price: 22000,
    image: '/images/courses/devops.jpg',
    category: 'DevOps'
  },
];

// Категории курсов
const categories = ['Все курсы', 'Программирование', 'Дизайн', 'Аналитика', 'DevOps'];

export default function CoursesPage() {
  return (
    <div className="bg-white">
      {/* Заголовок страницы */}
      <div className="relative bg-primary-500 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -top-40 w-96 h-96 rounded-full bg-secondary-500 opacity-20"></div>
          <div className="absolute left-20 bottom-10 w-64 h-64 rounded-full bg-secondary-500 opacity-10"></div>
        </div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">Наши курсы</h1>
          <p className="text-xl text-white opacity-90 max-w-2xl">
            Выбирайте из широкого спектра курсов, разработанных экспертами в своих областях.
            Развивайте навыки, которые помогут вам достичь карьерных целей.
          </p>
        </div>
      </div>

      {/* Фильтры и курсы */}
      <div className="container-custom py-16">
        {/* Фильтры */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-primary-500 text-white hover:bg-primary-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Список курсов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {course.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 mr-1 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 mr-1 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 mr-1 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>{course.lessons} уроков</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary-600">{course.price.toLocaleString()} ₽</div>
                  <Link 
                    href={`/courses/${course.id}`}
                    className="btn bg-primary-500 text-white hover:bg-primary-600"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Блок с подпиской */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="bg-primary-500 rounded-xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -right-10 -top-40 w-96 h-96 rounded-full bg-secondary-500 opacity-20"></div>
              <div className="absolute left-20 bottom-10 w-64 h-64 rounded-full bg-secondary-500 opacity-10"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Не можете выбрать подходящий курс?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Подпишитесь на нашу рассылку, и мы будем информировать вас о новых курсах,
                акциях и специальных предложениях.
              </p>
              <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800"
                />
                <button className="btn bg-white text-primary-600 hover:bg-gray-100">
                  Подписаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 