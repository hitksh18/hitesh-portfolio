
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - About Me heading */}
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                About <span className="text-orange-500 relative">
                  me
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                </span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </div>
          </div>
          
          {/* Right side - Updated Description */}
          <div className="space-y-6 animate-slide-in-right">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a backend developer and cybersecurity enthusiast currently pursuing{' '}
              <span className="text-orange-400 font-semibold">B.Tech in Computer Science</span> at{' '}
              <span className="text-orange-400 font-semibold">Malla Reddy University, Hyderabad</span>. 
              With a strong foundation in{' '}
              <span className="text-orange-400 font-semibold">Python</span> and{' '}
              <span className="text-orange-400 font-semibold">API security</span>, 
              I specialize in building secure, scalable, and{' '}
              <span className="text-orange-400 font-semibold">AI-integrated backend systems</span>. 
              I've worked on projects involving{' '}
              <span className="text-orange-400 font-semibold">network defense</span>,{' '}
              <span className="text-orange-400 font-semibold">real-time data processing</span>, and{' '}
              <span className="text-orange-400 font-semibold">smart assistants powered by local LLMs</span>.
            </p>
          
            {<div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">15+</div>
                <div className="text-sm text-gray-400 mt-1">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">8.0</div>
                <div className="text-sm text-gray-400 mt-1">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">3+</div>
                <div className="text-sm text-gray-400 mt-1">Years Learning</div>
              </div>
            </div> }
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
