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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-primary-400 opacity-20"></div>
          <div className="absolute left-20 bottom-10 w-64 h-64 rounded-full bg-primary-600 opacity-10"></div>
        </div>
        <div className="container-custom py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Образование, <br />
                Карьера, <br />
                Развитие
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Ваши знания ценны. JarvisSchool помогает делиться ими с другими и получать вознаграждение — всё на ваших условиях.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/courses" className="btn bg-white text-primary-600 hover:bg-gray-100">
                  Начать обучение
                </Link>
                <Link href="/about" className="btn btn-outline border-white text-white hover:bg-white/10">
                  Узнать больше
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] w-full">
                <Image 
                  src="/images/developer-illustration.png" 
                  alt="JarvisSchool - Онлайн-обучение" 
                  fill
                  style={{ objectFit: 'contain' }}
                  className="bg-white"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">10K+</div>
              <p className="text-gray-600">Студентов</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">50+</div>
              <p className="text-gray-600">Курсов</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">4.8</div>
              <p className="text-gray-600">Средний рейтинг</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">95%</div>
              <p className="text-gray-600">Довольных студентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Возможности обучения */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Больше возможностей для вашего обучения</h2>
            <p className="text-lg text-gray-600">
              Делитесь своими знаниями через полный набор образовательных продуктов, разработанных для эффективного обучения.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Карточка 1 */}
            <div className="card hover:shadow-card-hover p-8">
              <div className="text-primary-500 w-14 h-14 flex items-center justify-center mb-6 rounded-full bg-primary-50">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Онлайн-курсы</h3>
              <p className="text-gray-600 mb-6">
                Создавайте и настраивайте свои курсы с легкостью — чтобы уверенно развивать свой образовательный бизнес.
              </p>
              <Link href="/courses" className="text-primary-500 font-semibold inline-flex items-center hover:text-primary-600">
                Перейти к курсам
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* Карточка 2 */}
            <div className="card hover:shadow-card-hover p-8">
              <div className="text-primary-500 w-14 h-14 flex items-center justify-center mb-6 rounded-full bg-primary-50">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Сертификация</h3>
              <p className="text-gray-600 mb-6">
                Получайте официальные сертификаты о прохождении курсов, которые подтвердят ваши новые навыки и знания.
              </p>
              <Link href="/certificates" className="text-primary-500 font-semibold inline-flex items-center hover:text-primary-600">
                Подробнее о сертификатах
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* Карточка 3 */}
            <div className="card hover:shadow-card-hover p-8">
              <div className="text-primary-500 w-14 h-14 flex items-center justify-center mb-6 rounded-full bg-primary-50">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Сообщество</h3>
              <p className="text-gray-600 mb-6">
                Присоединяйтесь к сообществу единомышленников, делитесь опытом и учитесь у лучших в своей области.
              </p>
              <Link href="/community" className="text-primary-500 font-semibold inline-flex items-center hover:text-primary-600">
                Присоединиться к сообществу
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Популярные курсы */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Популярные курсы</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Изучите наши самые популярные курсы, выбранные тысячами студентов
              </p>
            </div>
            <Link href="/courses" className="text-primary-500 font-semibold inline-flex items-center hover:text-primary-600">
              Все курсы
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Курс 1 */}
            <div className="card hover:shadow-card-hover overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/courses/web-development.jpg" 
                  alt="Основы веб-разработки" 
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Популярный
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Основы веб-разработки</h3>
                <p className="text-gray-600 mb-4">
                  Изучите HTML, CSS и JavaScript с нуля. Создавайте современные и отзывчивые веб-сайты.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-primary-500">12 000 ₽</div>
                  <Link href="/courses/1" className="btn btn-primary">Подробнее</Link>
                </div>
              </div>
            </div>
            
            {/* Курс 2 */}
            <div className="card hover:shadow-card-hover overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/courses/react.jpg" 
                  alt="React для профессионалов" 
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Продвинутый
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">React для профессионалов</h3>
                <p className="text-gray-600 mb-4">
                  Освойте продвинутые концепции React, Redux и построение сложных пользовательских интерфейсов.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-primary-500">18 000 ₽</div>
                  <Link href="/courses/2" className="btn btn-primary">Подробнее</Link>
                </div>
              </div>
            </div>
            
            {/* Курс 3 */}
            <div className="card hover:shadow-card-hover overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/courses/python.jpg" 
                  alt="Программирование на Python" 
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Начинающий
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Программирование на Python</h3>
                <p className="text-gray-600 mb-4">
                  Изучите один из самых популярных языков программирования. Автоматизация, анализ данных и веб-разработка.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-primary-500">14 000 ₽</div>
                  <Link href="/courses/4" className="btn btn-primary">Подробнее</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Что говорят наши студенты</h2>
            <p className="text-lg text-gray-600">
              Узнайте, как наши курсы помогли студентам достигнуть успеха в своей карьере и проектах
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Отзыв 1 */}
            <div className="card hover:shadow-card-hover p-8">
              <div className="flex items-center text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Благодаря курсу по веб-разработке я смог освоить новые навыки и получить работу в IT-компании. Преподаватели очень понятно объясняют материал и всегда готовы помочь."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/images/testimonials/user-1.jpg" 
                    alt="Александр П." 
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Александр П.</div>
                  <div className="text-sm text-gray-500">Курс "Основы веб-разработки"</div>
                </div>
              </div>
            </div>
            
            {/* Отзыв 2 */}
            <div className="card hover:shadow-card-hover p-8">
              <div className="flex items-center text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Курс по React превзошел все мои ожидания. Реальные проекты и практические задания помогли быстро освоить фреймворк и применить знания на работе."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/images/testimonials/user-2.jpg" 
                    alt="Елена С." 
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Елена С.</div>
                  <div className="text-sm text-gray-500">Курс "React для профессионалов"</div>
                </div>
              </div>
            </div>
            
            {/* Отзыв 3 */}
            <div className="card hover:shadow-card-hover p-8">
              <div className="flex items-center text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Python-курс JarvisSchool дал мне все необходимые навыки для смены карьеры. За 2 месяца я освоил основы и начал работать над реальными проектами."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/images/testimonials/user-3.jpg" 
                    alt="Михаил К." 
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Михаил К.</div>
                  <div className="text-sm text-gray-500">Курс "Программирование на Python"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-500 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Готовы начать обучение?</h2>
            <p className="text-xl opacity-90 mb-8">
              Присоединяйтесь к тысячам студентов, которые уже изменили свою карьеру с помощью наших курсов.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/courses" className="btn bg-white text-primary-600 hover:bg-gray-100">
                Выбрать курс
              </Link>
              <Link href="/auth" className="btn btn-outline border-white text-white hover:bg-white/10">
                Зарегистрироваться
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 