"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaTelegramPlane } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image 
                  src="/images/logo.png" 
                  alt="JarvisSchool Logo" 
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">JarvisSchool</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Образовательная платформа, которая помогает студентам освоить современные технологии 
              программирования через интерактивные курсы и практические проекты.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook className="w-5 h-5" />, url: "https://facebook.com" },
                { icon: <FaTwitter className="w-5 h-5" />, url: "https://twitter.com" },
                { icon: <FaInstagram className="w-5 h-5" />, url: "https://instagram.com" },
                { icon: <FaYoutube className="w-5 h-5" />, url: "https://youtube.com" },
                { icon: <FaLinkedin className="w-5 h-5" />, url: "https://linkedin.com" },
                { icon: <FaTelegramPlane className="w-5 h-5" />, url: "https://t.me" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-blue-600 after:rounded-full">
              Быстрые ссылки
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Все курсы", path: "/courses" },
                { name: "Блог", path: "/blog" },
                { name: "О нас", path: "/about" },
                { name: "Связаться с нами", path: "/contact" },
                { name: "Часто задаваемые вопросы", path: "/faq" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={link.path} className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <span className="text-blue-500 mr-2">›</span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Courses Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-blue-600 after:rounded-full">
              Популярные курсы
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Веб-разработка", path: "/courses/web-development" },
                { name: "JavaScript", path: "/courses/javascript" },
                { name: "React", path: "/courses/react" },
                { name: "Python", path: "/courses/python" },
                { name: "Data Science", path: "/courses/data-science" }
              ].map((course, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={course.path} className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <span className="text-blue-500 mr-2">›</span>
                    {course.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-blue-600 after:rounded-full">
              Подпишитесь на рассылку
            </h4>
            <p className="text-gray-400 text-sm">
              Получайте последние новости и обновления о наших новых курсах, акциях и образовательных материалах.
            </p>
            <form className="space-y-4">
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Ваш email адрес" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <motion.button 
                  type="submit" 
                  className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-center font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Подписаться
                </motion.button>
              </div>
              <p className="text-xs text-gray-500">
                Мы уважаем вашу конфиденциальность и никогда не будем делиться вашей информацией с третьими лицами.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-14 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} JarvisSchool. Все права защищены.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                Условия использования
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                Политика cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 