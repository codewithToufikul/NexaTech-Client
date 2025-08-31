import React, { useState, useEffect } from 'react';
import { ArrowRight, Network, Smartphone, Brain, Palette, Code, Globe } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const techIcons = [
    { Icon: Network, delay: '0s', position: 'top-4 right-8' },
    { Icon: Globe, delay: '0.2s', position: 'top-16 right-2' },
    { Icon: Smartphone, delay: '0.4s', position: 'top-32 right-12' },
    { Icon: Brain, delay: '0.6s', position: 'top-48 right-6' },
    { Icon: Palette, delay: '0.8s', position: 'top-64 right-16' },
    { Icon: Code, delay: '1s', position: 'top-80 right-4' },
  ];

  return (
    <section 
      id="about-section"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden py-20 px-6"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Gradient Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-blue-400/20 rounded"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Text Content */}
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
                About Us
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="max-w-xl space-y-6">
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                At NexaTech, we craft cutting-edge digital solutions that drive innovation across 
                <span className="text-blue-400 font-medium"> Networking</span>,
                <span className="text-teal-400 font-medium"> Web Development</span>,
                <span className="text-yellow-400 font-medium"> Mobile Apps</span>,
                <span className="text-blue-400 font-medium"> AI</span>, and
                <span className="text-teal-400 font-medium"> Design & Engineering</span>.
              </p>
              
              <p className="text-lg text-slate-400 leading-relaxed">
                Our expert team combines technical excellence with creative vision to deliver 
                transformative solutions that empower businesses to thrive in the digital age.
              </p>
            </div>

            {/* CTA Button */}
            <div className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <span className="relative z-10">Learn More</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                
                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className={`relative transition-all duration-1000 delay-200 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          } lg:order-last order-first`}>
            
            <div className="relative h-96 lg:h-[500px]">
              {/* Central Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              </div>

              {/* Floating Tech Icons */}
              {techIcons.map(({ Icon, delay, position }, index) => (
                <div
                  key={index}
                  className={`absolute ${position} animate-bounce`}
                  style={{ animationDelay: delay, animationDuration: '3s' }}
                >
                  <div className="relative group">
                    <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}

              {/* Central Icon/Logo Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative group">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-600 flex items-center justify-center shadow-2xl">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                      NT
                    </div>
                  </div>
                  
                  {/* Rotating Ring */}
                  <div className="absolute inset-0 border-2 border-dashed border-blue-500/30 rounded-2xl animate-spin" style={{ animationDuration: '20s' }}></div>
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.6"/>
                  </linearGradient>
                </defs>
                {/* Example connecting lines */}
                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite"/>
                </line>
                <line x1="50%" y1="50%" x2="90%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                </line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;