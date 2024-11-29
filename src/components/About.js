import FadeInSection from './FadeInSection';

const About = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Tailwind', level: 85 },
    { name: 'Node.js', level: 70 },
    { name: 'Python', level: 65 },
    { name: 'C', level: 60 },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <FadeInSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About Text */}
            <div className="space-y-6">
              <div className="card group bg-black/30 p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  Who I Am
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  I'm a passionate web developer with a strong foundation in both front-end and back-end development. 
                  I enjoy creating responsive and user-friendly websites that deliver exceptional user experiences.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <div className="card group bg-black/30 p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-blue-400 mb-6">
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-teal-500 h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About; 