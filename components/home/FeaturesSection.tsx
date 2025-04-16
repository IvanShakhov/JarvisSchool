import { FaLaptop, FaCertificate, FaClock, FaUserFriends } from 'react-icons/fa'

const features = [
  {
    icon: <FaLaptop className="text-4xl text-primary-500 mb-4" />,
    title: "Онлайн обучение",
    description: "Учитесь в удобное время и в любом месте. Доступ к курсам с любого устройства."
  },
  {
    icon: <FaCertificate className="text-4xl text-primary-500 mb-4" />,
    title: "Сертификаты",
    description: "Получите сертификат по окончании курса, который повысит вашу ценность на рынке труда."
  },
  {
    icon: <FaClock className="text-4xl text-primary-500 mb-4" />,
    title: "Гибкий график",
    description: "Обучайтесь в своем темпе, выбирайте время для занятий самостоятельно."
  },
  {
    icon: <FaUserFriends className="text-4xl text-primary-500 mb-4" />,
    title: "Сообщество",
    description: "Общайтесь с единомышленниками, обменивайтесь опытом и находите новые возможности."
  }
]

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Почему JarvisSchool?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Наша платформа предоставляет все необходимые инструменты для комфортного и эффективного обучения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-600 rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">Персонализированное обучение</h3>
              <p className="mb-6 opacity-90">
                Мы предлагаем индивидуальный подход к каждому студенту. Наши курсы адаптируются к вашему уровню знаний и скорости обучения.
              </p>
              <ul className="space-y-3">
                {[
                  "Индивидуальная траектория обучения",
                  "Персональные рекомендации",
                  "Отслеживание прогресса",
                  "Поддержка преподавателей"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-700 p-8 lg:p-12 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-8 bg-secondary-500 rounded-full mr-3"></div>
                    <h4 className="text-xl font-bold text-gray-800">Статистика JarvisSchool</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "50+", label: "Курсов" },
                      { value: "10K+", label: "Студентов" },
                      { value: "95%", label: "Завершают обучение" },
                      { value: "4.8/5", label: "Рейтинг курсов" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center p-3">
                        <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 