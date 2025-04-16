"use client"

import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'
import type { Testimonial } from '@/lib/types'

const testimonials: Testimonial[] = [
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
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Истории успеха студентов</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Послушайте, что говорят наши выпускники о своем опыте обучения на JarvisSchool
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-sm p-8 transition-all duration-300 hover:shadow-md flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-gray-100">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    width={64} 
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-5 flex">
                {[...Array(5)].map((_, index) => (
                  <svg 
                    key={index} 
                    className={`w-5 h-5 ${index < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              
              <div className="relative mb-4 flex-grow">
                <FaQuoteLeft className="text-2xl text-blue-100 absolute -top-1 -left-1" />
                <p className="text-gray-700 leading-relaxed pl-6">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 bg-white rounded-md font-medium hover:bg-blue-50 transition-colors"
          >
            Просмотреть все отзывы
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection 