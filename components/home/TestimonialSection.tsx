"use client"

import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: "Иван Петров",
    role: "Frontend-разработчик",
    avatar: "/images/testimonials/avatar-1.jpg",
    text: "Благодаря курсу по веб-разработке я смог освоить React и устроиться на работу в IT-компанию. Преподаватели дают актуальные знания и всегда готовы помочь.",
    rating: 5
  },
  {
    id: 2,
    name: "Анна Смирнова",
    role: "UI/UX Дизайнер",
    avatar: "/images/testimonials/avatar-2.jpg",
    text: "Курс по дизайну интерфейсов превзошел все мои ожидания. Теперь я работаю над реальными проектами и применяю полученные знания на практике.",
    rating: 5
  },
  {
    id: 3,
    name: "Сергей Иванов",
    role: "Менеджер проектов",
    avatar: "/images/testimonials/avatar-3.jpg",
    text: "После прохождения курса по управлению проектами я получил повышение на работе. Полученные знания действительно работают в реальной жизни.",
    rating: 4
  }
]

const TestimonialSection = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы наших студентов</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Узнайте, что говорят наши выпускники о своем опыте обучения на JarvisSchool
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6 relative">
              <FaQuoteLeft className="text-4xl text-primary-100 absolute top-6 right-6" />
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    width={48} 
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-3 flex">
                {[...Array(5)].map((_, index) => (
                  <svg 
                    key={index} 
                    className={`w-4 h-4 ${index < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center text-primary-500 font-medium hover:text-primary-700 transition-colors">
            <a href="#" className="inline-flex items-center">
              Читать больше отзывов 
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection 