"use client"

import Link from 'next/link'
import { FaGraduationCap, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Лого и описание */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <FaGraduationCap className="text-secondary-500 text-3xl" />
              <span className="text-xl font-bold text-white">JarvisSchool</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Платформа онлайн-курсов для разностороннего развития. Обучайтесь в любое время и в любом месте.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary-500">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-500">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-500">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-500">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-secondary-500">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-secondary-500">
                  Курсы
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-secondary-500">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-secondary-500">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Курсы */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Наши курсы</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/programming" className="text-gray-400 hover:text-secondary-500">
                  Программирование
                </Link>
              </li>
              <li>
                <Link href="/courses/design" className="text-gray-400 hover:text-secondary-500">
                  Дизайн
                </Link>
              </li>
              <li>
                <Link href="/courses/languages" className="text-gray-400 hover:text-secondary-500">
                  Иностранные языки
                </Link>
              </li>
              <li>
                <Link href="/courses/business" className="text-gray-400 hover:text-secondary-500">
                  Бизнес
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@jarvisschool.com</li>
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Адрес: г. Москва, ул. Примерная, д. 123</li>
            </ul>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>© {currentYear} JarvisSchool. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 