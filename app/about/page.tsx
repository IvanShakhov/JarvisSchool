import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Заголовок страницы */}
      <div className="relative bg-primary-500 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -top-40 w-96 h-96 rounded-full bg-secondary-500 opacity-20"></div>
          <div className="absolute left-20 bottom-10 w-64 h-64 rounded-full bg-secondary-500 opacity-10"></div>
        </div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">О нас</h1>
          <p className="text-xl text-white opacity-90 max-w-2xl">
            JarvisSchool — это современная образовательная платформа, 
            предлагающая качественные онлайн-курсы для развития профессиональных навыков.
          </p>
        </div>
      </div>

      {/* Наша миссия */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша миссия</h2>
              <p className="text-lg text-gray-700 mb-6">
                Наша миссия — сделать качественное образование доступным для всех, 
                независимо от местоположения, возраста и уровня подготовки.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Мы верим, что образование — это ключ к личностному росту и 
                профессиональному успеху. Именно поэтому мы создаем курсы, которые 
                помогают приобрести практические навыки и уверенность в собственных силах.
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Доступность обучения</span>
              </div>
              <div className="flex items-center text-primary-600 font-medium mt-2">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Практические навыки</span>
              </div>
              <div className="flex items-center text-primary-600 font-medium mt-2">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Профессиональное развитие</span>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/about-mission.jpg" 
                  alt="Наша миссия" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex flex-col items-center">
                  <p className="text-xl font-bold text-primary-600">10,000+</p>
                  <p className="text-sm text-gray-600">Довольных студентов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Наша команда */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Александр Петров',
                role: 'Основатель и CEO',
                image: '/images/instructors/instructor-1.jpg',
                bio: 'Более 10 лет опыта в образовательной сфере. Магистр компьютерных наук, преподаватель нескольких университетов.'
              },
              {
                name: 'Елена Смирнова',
                role: 'Руководитель отдела разработки',
                image: '/images/instructors/instructor-2.jpg',
                bio: 'Full-stack разработчик с 8-летним опытом. Занимается созданием обучающих программ и технической инфраструктуры платформы.'
              },
              {
                name: 'Михаил Иванов',
                role: 'Главный методист',
                image: '/images/instructors/instructor-3.jpg',
                bio: 'Кандидат педагогических наук. Отвечает за разработку учебных программ и контроль качества курсов.'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Наши ценности */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Качество',
                icon: (
                  <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                description: 'Мы создаем курсы высочайшего качества, работая с лучшими экспертами и постоянно обновляя материалы.'
              },
              {
                title: 'Практичность',
                icon: (
                  <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                description: 'Наши курсы ориентированы на практику и формирование реальных навыков, которые можно применить сразу после обучения.'
              },
              {
                title: 'Поддержка',
                icon: (
                  <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                description: 'Мы обеспечиваем постоянную поддержку студентов на всех этапах обучения, помогая преодолевать трудности.'
              }
            ].map((value, index) => (
              <div key={index} className="p-8 border rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="bg-primary-500 text-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к нам</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              У вас появились вопросы или предложения? Мы всегда открыты для общения!
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="/contacts"
              className="btn bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 