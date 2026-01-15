import React, { useState } from 'react';
import { Code, Mail, Github, Linkedin, ExternalLink, ChevronDown, Menu, X, Smartphone, Watch, Monitor, Terminal } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll fonksiyonu
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: "WatchToMac",
      description: "Native macOS utility solving the file transfer issue for Garmin users on Apple Silicon. Replaces Android File Transfer.",
      tech: ["Swift", "macOS", "System Programming", "USB Protocol"],
      link: "https://2236586809450.gumroad.com/l/kdrbne",
      github: "https://github.com/kapucuonur", // Closed source product
      features: ["Native App", "M1/M2/M3 Optimized", "Plug & Play"],
      color: "from-orange-500 to-red-500",
      type: "macOS App"
    },
    {
      title: "Ice Bath Tracker",
      description: "Specialized Garmin wearable app for tracking cold plunges, monitoring heart rate & skin temperature in real-time.",
      tech: ["Monkey C", "Garmin CIQ", "Embedded Systems"],
      link: "https://apps.garmin.com/apps/9d9633a0-51a9-48c3-8fad-44de0e4277fc",
      github: "https://github.com/kapucuonur", 
      features: ["Biometric Tracking", "Wearable Tech", "Health Data"],
      color: "from-blue-400 to-cyan-300",
      type: "Wearable App"
    },
    {
      title: "Learn Finnish",
      description: "AI-powered interactive language learning platform designed specifically for expats living in Finland.",
      tech: ["Next.js", "React", "OpenAI API", "Tailwind"],
      link: "https://learn-finnish.fi",
      github: "https://github.com/kapucuonur",
      features: ["AI Tutor", "Interactive Lessons", "SaaS"],
      color: "from-indigo-500 to-purple-500",
      type: "Web Platform"
    }
  ];

  const skills = {
    "Mobile & Native": ["Swift", "Flutter", "Dart", "React Native", "Garmin CIQ (Monkey C)"],
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    "Backend": ["Node.js", "Python", "Django", "Flask", "System Design"],
    "AI & Cloud": ["TensorFlow", "OpenAI/Gemini", "Docker", "AWS", "Firebase"],
    "Creative Tools": ["CapCut", "OBS Studio", "Figma", "Adobe XD"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Terminal className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Onur Kapucu
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'products', 'tech stack', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.replace(' ', ''))}
                  className="hover:text-cyan-400 transition-colors text-gray-300 capitalize font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 bg-gray-900 border-t border-gray-800">
              {['home', 'about', 'products', 'techstack', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-800 rounded transition-colors capitalize text-gray-300"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-block animate-fade-in">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 mx-auto shadow-xl shadow-cyan-500/20">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                {/* Buraya kendi resmini koyabilirsin veya baş harfler */}
                 <span className="text-4xl font-bold text-white">OK</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Software Engineer <span className="text-cyan-400">&</span><br />
            Indie Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
            Building cross-platform solutions for <span className="text-white font-semibold">Web</span>, <span className="text-white font-semibold">Mobile</span>, & <span className="text-white font-semibold">Native Systems</span> (macOS/Garmin).
          </p>
          <p className="text-lg text-cyan-500/80 mb-10 font-medium">
            📍 Tampere, Finland | 🚀 Launching Products
          </p>

          <div className="flex justify-center space-x-5 mb-12">
            <a href="https://github.com/kapucuonur" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 border border-gray-700 rounded-full hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/onur-kapucu/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 border border-gray-700 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:kapucuonur@hotmail.com" className="p-3 bg-gray-800/50 border border-gray-700 rounded-full hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="#products" onClick={() => scrollToSection('products')} className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-full text-lg font-bold hover:shadow-lg hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-1">
              View My Products
            </a>
            <a href="/Onur Kapucu - Software Engineer Resume.pdf" download className="px-8 py-3 rounded-full text-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition-all">
              Download CV
            </a>
          </div>

          <div className="mt-20 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-500" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  More Than Just Web
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate engineer who bridges the gap between <strong>Web, Native, and Hardware</strong>. 
                I don't just build websites; I create system utilities for macOS, develop wearable apps for Garmin, 
                and build cross-platform mobile solutions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether it's optimizing a React backend or writing low-level code for a smartwatch, 
                I enjoy the entire journey from <strong>concept to deployment</strong>.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-400">
                  <h4 className="font-bold text-white mb-1">Native macOS</h4>
                  <p className="text-sm text-gray-400">Swift & System Programming</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-white mb-1">Wearable Tech</h4>
                  <p className="text-sm text-gray-400">Garmin Monkey C</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
               {/* Stats Cards */}
               <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center hover:border-cyan-500/50 transition-colors">
                    <Monitor className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">30+</div>
                    <div className="text-sm text-gray-400">Web Projects</div>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center hover:border-purple-500/50 transition-colors">
                    <Watch className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">3+</div>
                    <div className="text-sm text-gray-400">Native Apps</div>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center hover:border-green-500/50 transition-colors">
                    <Smartphone className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">3+</div>
                    <div className="text-sm text-gray-400">Years Exp</div>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center hover:border-orange-500/50 transition-colors">
                    <Code className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">10+</div>
                    <div className="text-sm text-gray-400">Tech Stack</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section (Formerly Projects) */}
      <section id="products" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Products
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Live applications solving real-world problems.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-700 hover:border-gray-500 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className={`h-3 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                     <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-900 text-gray-300 border border-gray-700">
                        {project.type}
                     </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-medium bg-gray-900/80 px-3 py-1.5 rounded text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex space-x-4">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors font-medium">
                        <ExternalLink className="w-4 h-4" />
                        <span>View Product</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="https://github.com/kapucuonur" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
              <span>View 30+ more projects on GitHub</span>
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Section (Updated) */}
      <section id="techstack" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tech Arsenal
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/30 transition-colors hover:bg-gray-900">
                <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center">
                   <span className="w-2 h-8 bg-cyan-500 rounded-full mr-3"></span>
                   {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <span key={i} className="bg-gray-800 px-4 py-2 rounded-lg text-sm text-gray-300 border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 transition-all cursor-default">
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
      <section id="contact" className="py-24 px-4 relative">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Build Something <br />
            <span className="text-cyan-400">Extraordinary</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm currently available for full-time opportunities. Whether you need a native macOS app, a wearable solution, or a scalable web platform.
          </p>
          
          <a href="mailto:kapucuonur@hotmail.com" className="inline-flex items-center space-x-3 bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-cyan-400 transition-all transform hover:scale-105 shadow-lg shadow-white/10 hover:shadow-cyan-400/20">
            <Mail className="w-5 h-5" />
            <span>Say Hello</span>
          </a>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <a href="https://github.com/kapucuonur" className="flex flex-col items-center group">
               <div className="p-4 bg-gray-800 rounded-full group-hover:bg-cyan-500 transition-colors mb-3">
                 <Github className="w-6 h-6 text-white" />
               </div>
               <span className="text-sm text-gray-500 group-hover:text-cyan-400">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/onur-kapucu/" className="flex flex-col items-center group">
               <div className="p-4 bg-gray-800 rounded-full group-hover:bg-blue-600 transition-colors mb-3">
                 <Linkedin className="w-6 h-6 text-white" />
               </div>
               <span className="text-sm text-gray-500 group-hover:text-blue-500">LinkedIn</span>
            </a>
            <a href="mailto:kapucuonur@hotmail.com" className="flex flex-col items-center group">
               <div className="p-4 bg-gray-800 rounded-full group-hover:bg-purple-500 transition-colors mb-3">
                 <Mail className="w-6 h-6 text-white" />
               </div>
               <span className="text-sm text-gray-500 group-hover:text-purple-400">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 font-medium">
            © 2026 Onur Kapucu. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2 flex items-center justify-center">
            Built with React & Tailwind • Deployed in Finland 🇫🇮
          </p>
        </div>
      </footer>
    </div>
  );
}