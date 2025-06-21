import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Backend Developer Intern",
      company: "Tech Solutions Inc.",
      location: "Remote",
      duration: "Jun 2024 - Aug 2024",
      description: "Developed RESTful APIs using FastAPI and Python. Implemented database optimization strategies that improved query performance by 40%. Collaborated with cross-functional teams to deliver scalable backend solutions.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS"]
    },
    {
      title: "Cybersecurity Research Assistant",
      company: "Malla Reddy University",
      location: "Hyderabad, India",
      duration: "Jan 2024 - Present",
      description: "Conducted research on intrusion detection systems and behavioral authentication. Developed AI-powered security tools and contributed to academic publications on cybersecurity frameworks.",
      technologies: ["Python", "Machine Learning", "Network Security", "Penetration Testing"]
    },
    {
      title: "Full Stack Developer",
      company: "Freelance",
      location: "Remote",
      duration: "Sep 2023 - Present",
      description: "Built and deployed multiple web applications for clients. Specialized in React frontend development and Node.js backend services. Managed complete project lifecycle from requirements gathering to deployment.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Firebase"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-900/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-orange-500 relative">
              Experience
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 animate-fade-in hover:shadow-xl hover:shadow-orange-500/10 transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                    <Briefcase className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-orange-400 font-semibold mb-1">{exp.company}</p>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-medium backdrop-blur-sm border border-orange-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;