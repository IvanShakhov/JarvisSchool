import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaLaptopCode, FaPalette, FaLanguage, FaChartLine } from 'react-icons/fa'
import CourseCard from '@/components/courses/CourseCard'
import HeroBanner from '@/components/home/HeroBanner'
import FeaturesSection from '@/components/home/FeaturesSection'
import TestimonialSection from '@/components/home/TestimonialSection'

// Заглушка для данных курсов
const featuredCourses = [
  {
    id: "1",
    title: "Веб-разработка с нуля до профи",
    description: "Изучите HTML, CSS, JavaScript и современные фреймворки для создания веб-приложений.",
    image: "/images/courses/web-dev.jpg",
    price: 12900,
    category: "programming",
    instructor: "Алексей Петров",
    rating: 4.8,
    students: 1245,
    level: "Начинающий"
  },
  {
    id: "2",
    title: "UX/UI дизайн: создавайте привлекательные интерфейсы",
    description: "Узнайте, как проектировать удобные и эстетичные пользовательские интерфейсы.",
    image: "/images/courses/ux-ui.jpg",
    price: 15900,
    category: "design",
    instructor: "Мария Иванова",
    rating: 4.9,
    students: 890,
    level: "Средний"
  },
  {
    id: "3",
    title: "Английский для IT-специалистов",
    description: "Освойте профессиональный английский для работы в сфере информационных технологий.",
    image: "/images/courses/english.jpg",
    price: 9900,
    category: "languages",
    instructor: "Иван Смирнов",
    rating: 4.7,
    students: 760,
    level: "Начинающий"
  },
  {
    id: "4",
    title: "Основы бизнес-аналитики",
    description: "Научитесь анализировать данные и принимать обоснованные бизнес-решения.",
    image: "/images/courses/business.jpg",
    price: 18900,
    category: "business",
    instructor: "Екатерина Соколова",
    rating: 4.6,
    students: 520,
    level: "Средний"
  }
]

// Категории курсов
const categories = [
  {
    id: "programming",
    title: "Программирование",
    icon: <FaLaptopCode className="text-4xl text-primary-500 mb-3" />,
    description: "Веб-разработка, мобильные приложения, алгоритмы и многое другое"
  },
  {
    id: "design",
    title: "Дизайн",
    icon: <FaPalette className="text-4xl text-primary-500 mb-3" />,
    description: "UX/UI дизайн, графический дизайн, основы композиции"
  },
  {
    id: "languages",
    title: "Языки",
    icon: <FaLanguage className="text-4xl text-primary-500 mb-3" />,
    description: "Английский, немецкий, французский, испанский и другие языки"
  },
  {
    id: "business",
    title: "Бизнес",
    icon: <FaChartLine className="text-4xl text-primary-500 mb-3" />,
    description: "Маркетинг, менеджмент, предпринимательство и финансы"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Баннер */}
      <HeroBanner />

      {/* Секция с категориями */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4">Наши направления обучения</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Выберите интересующее вас направление и начните свой путь к новым знаниям и навыкам прямо сейчас
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={`/courses?category=${category.id}`}
                className="card hover:shadow-lg transition-shadow p-6 text-center"
              >
                <div className="flex flex-col items-center">
                  {category.icon}
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Популярные курсы */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Популярные курсы</h2>
              <p className="text-gray-600">Самые востребованные курсы нашей платформы</p>
            </div>
            <Link href="/courses" className="btn btn-outline inline-flex items-center">
              Все курсы <FaArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <FeaturesSection />

      {/* Отзывы */}
      <TestimonialSection />

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Начните обучение прямо сейчас</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам студентов, которые уже изменили свою жизнь с JarvisSchool
          </p>
          <Link href="/register" className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3">
            Зарегистрироваться
          </Link>
        </div>
      </section>
    </div>
  )
} 