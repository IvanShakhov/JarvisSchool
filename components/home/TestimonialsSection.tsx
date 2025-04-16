"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    content: "JarvisSchool полностью изменил мою карьеру. Преподаватели всегда готовы помочь, а материалы курса актуальны и хорошо структурированы. Я получил работу через месяц после окончания курса!",
    author: "Александр Петров",
    position: "Frontend-разработчик",
    image: "/images/testimonial-1.jpg",
    rating: 5
  },
  {
    id: 2,
    content: "Выбрала JarvisSchool по рекомендации друзей и ни разу не пожалела. Особенно ценю практические задания и персональную обратную связь от наставников. Это намного эффективнее, чем просто смотреть видеоуроки.",
    author: "Мария Соколова",
    position: "UX/UI дизайнер",
    image: "/images/testimonial-2.jpg",
    rating: 5
  },
  {
    id: 3,
    content: "После нескольких лет в другой сфере решил сменить профессию. JarvisSchool дал мне не только необходимые навыки, но и уверенность в своих силах. Поддержка сообщества и наставников бесценна!",
    author: "Дмитрий Иванов",
    position: "Backend-разработчик",
    image: "/images/testimonial-3.jpg",
    rating: 4
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Что говорят наши студенты</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Отзывы от тех, кто уже прошел обучение на нашей платформе
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 relative">
            <div className="absolute top-8 left-8 text-primary-500 opacity-20">
              <FaQuoteLeft className="w-16 h-16" />
            </div>
            
            <div className="relative z-10">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 italic">
                "{currentTestimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="mr-4 w-16 h-16 relative overflow-hidden rounded-full">
                  <Image 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">{currentTestimonial.author}</h4>
                  <p className="text-gray-600">{currentTestimonial.position}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8 flex space-x-3">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                aria-label="Предыдущий отзыв"
              >
                <FaChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors duration-200"
                aria-label="Следующий отзыв"
              >
                <FaChevronRight className="w-5 h-5 text-primary-600" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Перейти к отзыву ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 