"use client"

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

// Компонент для анимированного счетчика чисел
const AnimatedCounter = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const startTimeRef = useRef(0)
  
  useEffect(() => {
    // Сбросить анимацию если конечное значение изменилось
    countRef.current = 0
    startTimeRef.current = 0
    setCount(0)
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }
      
      const progress = (timestamp - startTimeRef.current) / (duration * 1000)
      
      if (progress < 1) {
        countRef.current = Math.floor(end * Math.min(progress, 1))
        setCount(countRef.current)
        requestAnimationFrame(animate)
      } else {
        countRef.current = end
        setCount(end)
      }
    }
    
    requestAnimationFrame(animate)
    
    return () => {
      countRef.current = 0
      startTimeRef.current = 0
    }
  }, [end, duration])
  
  return <span>{count.toLocaleString()}</span>
}

const stats = [
  { id: 1, value: 30000, label: 'Студентов', suffix: '+' },
  { id: 2, value: 120, label: 'Курсов', suffix: '' },
  { id: 3, value: 92, label: 'Преподавателей', suffix: '' },
  { id: 4, value: 98, label: 'Процент трудоустройства', suffix: '%' }
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute right-20 top-10 w-80 h-80 rounded-full bg-white"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">В цифрах о нас</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            JarvisSchool объединяет студентов и профессионалов со всего мира для создания уникального сообщества
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold mb-2">
                <AnimatedCounter end={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-blue-100 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 