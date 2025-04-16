"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // В реальном приложении здесь был бы API запрос
      console.log('Email submitted:', email)
      setSubmitted(true)
      setEmail('')
      
      // Сбросить состояние после показа уведомления
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-800" />
      
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full -ml-40 -mb-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Начните свой путь в программировании прямо сейчас
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Подпишитесь на нашу рассылку и получайте уведомления о новых курсах, 
              бесплатных мастер-классах и специальных предложениях.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6 md:p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg border border-white border-opacity-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Специальное предложение</h3>
                  <p className="text-blue-100 mb-6">
                    Зарегистрируйтесь сейчас и получите доступ к первому модулю любого курса бесплатно.
                  </p>
                  <ul className="space-y-3">
                    {['Интерактивные видеоуроки', 'Практические задания', 'Доступ к сообществу'].map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-center text-blue-50"
                      >
                        <svg className="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1">
                        Email адрес
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-white bg-opacity-20 border border-blue-200 border-opacity-20 rounded-lg text-white placeholder-blue-200 placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-opacity-95 transition-colors"
                    >
                      Получить бесплатный доступ
                    </motion.button>
                    
                    <p className="text-xs text-blue-100 text-opacity-80">
                      Мы уважаем вашу конфиденциальность и никогда не будем делиться вашей информацией.
                    </p>
                  </form>
                  
                  {/* Уведомление об успешной подписке */}
                  {submitted && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 bg-green-500 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg"
                    >
                      <p className="text-green-100 text-center">Спасибо за подписку! Проверьте вашу почту.</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a 
              href="/courses" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-opacity-95 transition-colors"
            >
              Изучить все курсы
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 