"use client"

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { FaLaptopCode, FaChalkboardTeacher, FaUsers, FaMedal, FaClipboardCheck, FaRocket } from 'react-icons/fa'

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  const controls = useAnimation()
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
        <div className="text-blue-600 text-2xl">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaLaptopCode />,
      title: "Интерактивные курсы",
      description: "Практические занятия и интерактивный код прямо в браузере, чтобы учиться на практике"
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Опытные преподаватели",
      description: "Обучение от практикующих разработчиков с реальным опытом работы в индустрии"
    },
    {
      icon: <FaUsers />,
      title: "Сообщество студентов",
      description: "Доступ к сообществу, где можно общаться с другими студентами и получать поддержку"
    },
    {
      icon: <FaMedal />,
      title: "Сертификаты",
      description: "Получите сертификат о прохождении курса, который вы можете добавить в своё резюме"
    },
    {
      icon: <FaClipboardCheck />,
      title: "Персональные задания",
      description: "Индивидуальные проекты и задания с обратной связью от преподавателей"
    },
    {
      icon: <FaRocket />,
      title: "Карьерный рост",
      description: "Помощь в трудоустройстве и подготовка к собеседованиям для лучших студентов"
    }
  ]

  const sectionRef = useRef(null)
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px 0px" })
  const headingControls = useAnimation()
  
  useEffect(() => {
    if (isSectionInView) {
      headingControls.start("visible")
    }
  }, [isSectionInView, headingControls])

  return (
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          animate={headingControls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают JarvisSchool</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наша платформа предлагает современный подход к обучению программированию, 
            который сочетает практический опыт с глубоким пониманием теории.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={headingControls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.4, duration: 0.6 } }
          }}
          className="text-center mt-16"
        >
          <a 
            href="/courses" 
            className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Посмотреть все курсы
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
} 