import React, { useState } from 'react';

const SkillsSection = () => {
  const [selectedExpertise, setSelectedExpertise] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Skill data with proficiency levels and icon URLs
  const skillsData = {
    // Languages
    python: { name: 'Python', level: 'Expert', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    java: { name: 'Java', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    javascript: { name: 'JavaScript', level: 'Expert', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    typescript: { name: 'TypeScript', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    c: { name: 'C', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    cpp: { name: 'C++', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    
    // Frameworks
    fastapi: { name: 'FastAPI', level: 'Expert', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    flask: { name: 'Flask', level: 'Expert', color: 'text-orange-400', icon: 'https://th.bing.com/th/id/OIP.19Aio6uoXRdKgfrk2PR9qgHaHw?rs=1&pid=ImgDetMain' },
    django: { name: 'Django', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    springboot: { name: 'Spring Boot', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    nodejs: { name: 'Node.js', level: 'Expert', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    react: { name: 'React', level: 'Expert', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    html5: { name: 'HTML5', level: 'Expert', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    bootstrap: { name: 'Bootstrap', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    tailwind: { name: 'Tailwind CSS', level: 'Expert', color: 'text-orange-400', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    
    // Tools & Databases
    mongodb: { name: 'MongoDB', level: 'Expert', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    mysql: { name: 'MySQL', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    postgresql: { name: 'Salesforce', level: 'Expert', color: 'text-orange-400', icon: 'https://logodownload.org/wp-content/uploads/2020/04/salesforce-logo-1.png' },
    git: { name: 'GitHub', level: 'Expert', color: 'text-orange-400', icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
    firebase: { name: 'Firebase', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    docker: { name: 'Docker', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    vscode: { name: 'VS Code', level: 'Expert', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    linux: { name: 'Linux', level: 'Expert', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    kali: { name: 'Kali Linux', level: 'Expert', color: 'text-orange-400', icon: 'https://www.kali.org/images/kali-logo.svg' },
    wireshark: { name: 'Wireshark', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Wireshark_icon_new.png' },
    ollama: { name: 'Ollama', level: 'Expert', color: 'text-orange-400', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/1.47.0/files/dark/ollama.png' }
  };

  // Row 1: Languages
  const languageSkills = ['python', 'java', 'javascript', 'typescript', 'c', 'cpp'];

  // Row 2: Backend & Frontend Frameworks
  const frameworkSkills = ['fastapi', 'flask', 'django', 'springboot', 'express', 'nodejs', 'react', 'html5', 'bootstrap', 'tailwind'];

  // Row 3: Databases & Tools
  const toolSkills = ['mongodb', 'mysql', 'postgresql', 'git', 'firebase', 'docker', 'vscode', 'linux', 'kali', 'wireshark', 'ollama'];

  const expertiseAreas = [
    {
      title: "Cloud Computing",
      description: "Extensive experience with AWS, Azure, and Google Cloud Platform. Designed scalable cloud architectures achieving 99.9% uptime and 40% cost reduction through efficient resource management and optimization strategies.",
      skills: ["AWS", "Azure", "GCP", "Kubernetes", "Serverless", "Microservices"],
      icon: "☁️"
    },
    {
      title: "API Security Specialist",
      description: "Expert in securing APIs with OAuth 2.0, JWT implementation, rate limiting, and comprehensive security audits. Successfully secured 20+ production APIs with zero security breaches.",
      skills: ["OAuth 2.0", "JWT", "Rate Limiting", "Penetration Testing", "Security Audits", "OWASP"],
      icon: "🔒"
    },
    {
      title: "AI Integration Expertise",
      description: "Specialized in integrating machine learning models and AI services into production applications. Worked with TensorFlow, PyTorch, and various AI APIs to create intelligent, real-time systems.",
      skills: ["TensorFlow", "PyTorch", "ML Models", "AI APIs", "NLP", "Computer Vision"],
      icon: "🤖"
    },
    {
      title: "System Design",
      description: "Expert in designing scalable, distributed systems with focus on performance, reliability, and maintainability. Experience with microservices architecture, load balancing, and database optimization.",
      skills: ["Microservices", "Load Balancing", "Database Design", "Caching", "Message Queues", "Scalability"],
      icon: "🏗️"
    },
    {
      title: "DevOps",
      description: "Proficient in CI/CD pipelines, containerization, and infrastructure as code. Automated deployment processes reducing deployment time by 80% and improving system reliability.",
      skills: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Monitoring"],
      icon: "⚙️"
    },
    {
      title: "Prompt Engineering & Team Lead",
      description: "Leading teams in developing advanced AI prompt engineering strategies and LLM integration. Specialized in optimizing AI model performance and creating efficient prompt templates for various business applications.",
      skills: ["LLM Integration", "Prompt Optimization", "Team Leadership", "AI Strategy", "Model Fine-tuning", "Performance Analysis"],
      icon: "🧠"
    }
  ];

  const closeModal = () => {
    setSelectedExpertise(null);
  };

  const SkillTooltip = ({ skill, children }) => {
    const skillData = skillsData[skill];
    if (!skillData) return children;

    return (
      <div 
        className="relative group"
        onMouseEnter={() => setHoveredSkill(skill)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        {children}
        {hoveredSkill === skill && (
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-50 px-4 py-3 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl animate-fade-in">
            <div className="text-center">
              <div className={`text-sm font-semibold ${skillData.color}`}>
                {skillData.name}
              </div>
              <div className="text-xs text-gray-300 mt-1">
                {skillData.level}
              </div>
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        )}
      </div>
    );
  };

  const SkillIcon = ({ skillKey }) => {
    const skill = skillsData[skillKey];
    if (!skill) return null;

    return (
      <SkillTooltip skill={skillKey}>
        <div className="flex items-center justify-center transform hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] cursor-pointer">
          <img 
            src={skill.icon} 
            alt={skill.name}
            className="w-12 h-12 object-contain"
            onError={(e) => {
              // Fallback to a generic icon if image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xs hidden">
            {skill.name.charAt(0)}
          </div>
        </div>
      </SkillTooltip>
    );
  };

  return (
    <section id="skills" className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-400/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-orange-500 relative">
              Skills & Expertise
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          
          {/* Row 1: Languages */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-orange-400 mb-4 text-center">Programming Languages</h4>
            <div className="flex justify-center items-center gap-12 mb-12 flex-wrap">
              {languageSkills.map((skill, index) => (
                <SkillIcon key={index} skillKey={skill} />
              ))}
            </div>
          </div>

          {/* Row 2: Frameworks */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-orange-400 mb-4 text-center">Frameworks & Libraries</h4>
            <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
              {frameworkSkills.map((skill, index) => (
                <SkillIcon key={index} skillKey={skill} />
              ))}
            </div>
          </div>

          {/* Row 3: Tools & Databases */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-orange-400 mb-4 text-center">Tools & Databases</h4>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {toolSkills.map((skill, index) => (
                <SkillIcon key={index} skillKey={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Areas of Expertise */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Areas of Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedExpertise(area)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <h4 className="text-lg font-bold text-orange-400 mb-2">{area.title}</h4>
                  <div className="text-orange-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to learn more →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Modal */}
        {selectedExpertise && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 transform animate-scale-in">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{selectedExpertise.icon}</div>
                    <h3 className="text-2xl font-bold text-orange-400">
                      {selectedExpertise.title}
                    </h3>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedExpertise.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-4">Key Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExpertise.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium backdrop-blur-sm border border-orange-500/30 hover:bg-orange-500/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;