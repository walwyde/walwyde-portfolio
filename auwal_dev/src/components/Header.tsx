import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  const handleNavClick = (section: string) => {
    setActiveSection(section)
    setIsMenuOpen(false)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">Yobe Auwal Mohammed</a>
          <div className="hidden md:flex space-x-4">
            {['home', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`capitalize ${
                  activeSection === section ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['home', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`block px-3 py-2 rounded-md text-base font-medium capitalize ${
                  activeSection === section ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

