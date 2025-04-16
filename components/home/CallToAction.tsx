"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-12 text-white">
              <motion.h2 
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Начните обучение прямо сейчас
              </motion.h2>
              <motion.p 
                className="text-blue-100 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Инвестируйте в свое будущее сегодня. Наши эксперты помогут вам освоить востребованные навыки и начать карьеру мечты.
              </motion.p>
              
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="rounded-full bg-blue-500 p-1 mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Обучение в удобное время</span>
                </div>
                <div className="flex items-center">
                  <div className="rounded-full bg-blue-500 p-1 mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Доступ к материалам навсегда</span>
                </div>
                <div className="flex items-center">
                  <div className="rounded-full bg-blue-500 p-1 mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Сертификат по окончании</span>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <motion.h3 
                className="text-2xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Выберите свой путь обучения
              </motion.h3>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link href="/courses?category=programming" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Программирование</span>
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                
                <Link href="/courses?category=design" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Дизайн</span>
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                
                <Link href="/courses?category=analytics" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Аналитика данных</span>
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link 
                  href="/courses" 
                  className="block text-center py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                >
                  Просмотреть все курсы
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 