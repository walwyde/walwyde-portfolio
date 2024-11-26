import { ExternalLink, GitlabIcon as GitHub } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Give-Aid Nigeria',
      description: 'An online platform that facilitates sourcing for funds for noble causes.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://giveaid.ng'
    },
    {
      title: 'Olive Branch Web App',
      description: 'A WebApp For Patients With High Blood Pressure And Diabetes. With Appointment Booking and Instant Messaging fearures',
      technologies: ['React', 'Firebase', 'Bootstrap', "Redux", "Mongo Db", "Socket.io"],
      githubUrl: 'https://github.com/walwyde/olivebrachclient',
      liveUrl: 'https://olivebrachclient.vercel.app/'
    },
    {
      title: 'Social Media App',
      description: 'Full Stack Social Media App with Redux State Management',
      technologies: ['JavaScript', 'React', 'Mongo Db', "Redux", "BootStrap"],
      githubUrl: 'https://github.com/walwyde/social_media_node_react_redux'
    },
    {
      title: 'Stitch Hub',
      description: 'A cross-platform mobile app for providing Fashion and lifestyle services.',
      technologies: ['React Native', 'Expo', 'Redux', 'Mongo Db'],
      githubUrl: 'https://github.com/walwyde/stitch-hub',
    },
  ]

  return (
    <section id="projects" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <GitHub size={20} />
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

