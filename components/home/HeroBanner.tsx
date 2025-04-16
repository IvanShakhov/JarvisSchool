import Link from 'next/link'
import Image from 'next/image'

const HeroBanner = () => {
  return (
    <section className="relative bg-primary-500 text-white">
      {/* Декоративный фоновый элемент */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-40 w-96 h-96 rounded-full bg-secondary-500 opacity-20"></div>
        <div className="absolute left-20 bottom-10 w-64 h-64 rounded-full bg-secondary-500 opacity-10"></div>
      </div>
      
      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Начните свое обучение с JarvisSchool
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Разносторонние онлайн-курсы для развития ваших навыков и достижения карьерных целей
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/courses" className="btn bg-white text-primary-600 hover:bg-gray-100">
                Начать обучение
              </Link>
              <Link href="/about" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Узнать больше
              </Link>
            </div>
            <div className="mt-8 flex items-center text-sm">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-primary-500 overflow-hidden">
                    <Image 
                      src={`/images/avatars/avatar-${i}.jpg`} 
                      alt={`Студент ${i}`} 
                      width={32} 
                      height={32}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="opacity-80">Присоединитесь к <strong>10,000+</strong> студентов</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/hero-image.jpg" 
                alt="JarvisSchool - Обучение" 
                width={600} 
                height={400}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center">
                <div className="text-primary-500 font-bold text-3xl mr-2">4.9</div>
                <div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">На основе 2500+ отзывов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner 