import { GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-12 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Yobe Auwal Mohammed</h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">Full Stack Web & Mobile Developer</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Passionate about creating robust and scalable web and mobile applications. Experienced in both frontend and backend technologies. Alumni of the Federal University of Jos, Nigeria.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              <GitHub size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

