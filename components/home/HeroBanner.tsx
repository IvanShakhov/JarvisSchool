"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-10 -top-10 w-72 h-72 rounded-full bg-white/30 blur-3xl"></div>
        <div className="absolute -left-40 top-20 w-96 h-96 rounded-full bg-blue-300/30 blur-3xl"></div>
        <div className="absolute right-20 bottom-10 w-64 h-64 rounded-full bg-indigo-400/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
            className="flex-1 max-w-xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Обучайтесь программированию онлайн с экспертами
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 mb-8"
            >
              Создавайте реальные проекты, получайте обратную связь и осваивайте навыки, востребованные на рынке труда
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/courses" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                Начать обучение
              </Link>
              <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                Узнать больше
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 flex items-center"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <Image 
                      src={`/images/avatars/avatar-${i}.jpg`} 
                      width={40} 
                      height={40}
                      alt={`Студент ${i}`}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="text-yellow-300 text-sm">★★★★★</div>
                <div className="text-sm">
                  <span className="font-bold">4.9</span> (2,580+ отзывов)
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative max-w-md"
          >
            <div className="absolute -inset-1 bg-white/20 blur-2xl rounded-2xl"></div>
            <div className="relative bg-gradient-to-br from-blue-500/90 to-indigo-600/90 p-1 rounded-2xl shadow-2xl">
              <Image
                src="/images/developer-illustration.png"
                alt="Обучение программированию онлайн"
                width={600}
                height={500}
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>
            
            {/* Декоративный элемент */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-400 opacity-80 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner 