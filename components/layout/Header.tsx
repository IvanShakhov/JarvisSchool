"use client"

import Link from 'next/link'
import { useState } from 'react'
import { FaGraduationCap, FaBars, FaTimes, FaUser } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-2">
            <FaGraduationCap className="text-primary-500 text-3xl" />
            <span className="text-xl font-bold text-primary-700">JarvisSchool</span>
          </Link>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-500 font-medium">
              Главная
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-primary-500 font-medium">
              Курсы
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-500 font-medium">
              О нас
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-500 font-medium">
              Контакты
            </Link>
          </nav>

          {/* Кнопки авторизации */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/profile" className="text-gray-700 hover:text-primary-500">
              <FaUser className="inline mr-1" /> Профиль
            </Link>
            <Link href="/login" className="btn btn-outline">
              Войти
            </Link>
            <Link href="/register" className="btn btn-primary">
              Регистрация
            </Link>
          </div>

          {/* Мобильное меню */}
          <button 
            className="md:hidden text-gray-700 hover:text-primary-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                href="/courses" 
                className="text-gray-700 hover:text-primary-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Курсы
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-primary-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-primary-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Link 
                  href="/profile" 
                  className="text-gray-700 hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaUser className="inline mr-1" /> Профиль
                </Link>
                <Link 
                  href="/login" 
                  className="btn btn-outline w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Войти
                </Link>
                <Link 
                  href="/register" 
                  className="btn btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Регистрация
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 