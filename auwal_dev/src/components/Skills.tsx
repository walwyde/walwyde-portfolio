export default function Skills() {
    const skills = [
      'JavaScript', 'TypeScript', 'React', 'React Native', 'Node.js', 'Express', 'MongoDB',
      'PostgreSQL', 'HTML', 'CSS', 'Tailwind CSS', 'Git', 'Docker'
    ]
  
    return (
      <section id="skills" className="py-12 md:py-24 bg-gray-200 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div key={skill} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  