import React, { useState } from 'react';
import { Code, Mail, Github, Linkedin, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "DigiLibrary",
      description: "AI-powered digital library with smart book recommendations",
      tech: ["React", "Node.js", "MongoDB", "Google AI", "Stripe"],
      link: "https://digilibray.netlify.app/",
      github: "https://github.com/kapucuonur/digilibrary-app",
      features: ["AI Chatbot", "Payment Integration", "10k+ Books"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "DevChatbot AI",
      description: "ML-powered chatbot with 95% intent accuracy",
      tech: ["React", "Flask", "TensorFlow", "Groq API"],
      link: "https://devchatbot-ai.onrender.com/",
      github: "https://github.com/kapucuonur/DevChatbot-AI",
      features: ["Voice Recognition", "ML Model", "Real-time Chat"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Stock Management",
      description: "Real-time inventory tracking with analytics",
      tech: ["React", "Redux", "Express", "MongoDB"],
      link: "https://fullstack-stockapp-wfdx.onrender.com/",
      github: "https://github.com/kapucuonur/FullStack_StockApp",
      features: ["Live Dashboard", "Charts", "Multi-user"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "Python", "Django", "Flask"],
    "Database": ["MongoDB", "PostgreSQL", "Firebase", "Redis"],
    "AI/ML": ["TensorFlow", "Google AI", "OpenAI", "Groq"],
    "DevOps": ["Docker", "Git", "AWS", "Netlify", "Vercel"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Onur Kapucu
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`hover:text-cyan-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-800 rounded transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1 mx-auto">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-4xl font-bold">OK</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4">
            Building AI-Powered Web Solutions
          </p>
          <p className="text-lg text-gray-500 mb-8">
            📍 Helsinki, Finland | 🚀 Open to Opportunities
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <a 
              href="https://github.com/kapucuonur" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/onur-kapucu/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
            Download Resume
          </button>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with 3+ years of experience building 
                scalable web applications. I specialize in creating AI-powered solutions 
                and modern e-commerce platforms.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My expertise spans across React, Node.js, Python, and Machine Learning. 
                I love turning complex problems into elegant, user-friendly solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-800 px-6 py-3 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-400">30+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="bg-gray-800 px-6 py-3 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-400">3+</div>
                  <div className="text-gray-400">Years Exp</div>
                </div>
                <div className="bg-gray-800 px-6 py-3 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-400">95%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">🎯 Focus Areas</h3>
                <p className="text-gray-400">AI Integration, Web Apps, E-commerce, Real-time Systems</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">🌱 Currently Learning</h3>
                <p className="text-gray-400">Advanced ML, Cloud Architecture, Web3 Technologies</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">💼 Work Preferences</h3>
                <p className="text-gray-400">Remote, Hybrid in Helsinki, or Relocation within EU</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-gray-700 px-3 py-1 rounded-full text-cyan-400">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs bg-gray-900 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://github.com/kapucuonur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 px-8 py-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              View All Projects on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div 
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4 text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span 
                      key={i}
                      className="bg-gray-900 px-4 py-2 rounded-lg text-sm hover:bg-cyan-500 hover:text-gray-900 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm currently available for freelance work and full-time opportunities.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-xl">
              <Mail className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">your.email@example.com</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <Github className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">@kapucuonur</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <Linkedin className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">onur-kapucu</p>
            </div>
          </div>

          <a 
            href="mailto:your.email@example.com"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Onur Kapucu. Built with React & Tailwind CSS
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Made with ❤️ in Helsinki, Finland
          </p>
        </div>
      </footer>
    </div>
  );
}
