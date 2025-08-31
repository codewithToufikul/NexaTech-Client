import React, { useState, useEffect } from 'react';
import { 
  Network, 
  Globe, 
  Smartphone, 
  Brain, 
  Palette, 
  Ruler,
  ArrowRight 
} from 'lucide-react';

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

  const services = [
    {
      id: 'networking',
      icon: Network,
      title: 'Networking Solutions',
      description: 'Comprehensive network infrastructure design, implementation, and optimization for seamless connectivity and peak performance.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      glowColor: 'blue-500/25'
    },
    {
      id: 'web-dev',
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies for exceptional user experiences.',
      color: 'teal',
      gradient: 'from-teal-500 to-teal-600',
      glowColor: 'teal-500/25'
    },
    {
      id: 'mobile-apps',
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that engage users and drive business growth across iOS and Android platforms.',
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      glowColor: 'green-500/25'
    },
    {
      id: 'ai-solutions',
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and AI-powered solutions that transform data into actionable insights and competitive advantages.',
      color: 'yellow',
      gradient: 'from-yellow-500 to-yellow-600',
      glowColor: 'yellow-500/25'
    },
    {
      id: 'ui-ux',
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive, beautiful interfaces and exceptional digital experiences that convert.',
      color: 'pink',
      gradient: 'from-pink-500 to-pink-600',
      glowColor: 'pink-500/25'
    },
    {
      id: 'autocad',
      icon: Ruler,
      title: 'AutoCAD Engineering',
      description: 'Precision engineering drawings, 3D modeling, and technical documentation for complex engineering projects.',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      glowColor: 'purple-500/25'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute('data-card-id');
            if (cardId) {
              setVisibleCards(prev => new Set([...prev, cardId]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const cards = document.querySelectorAll('[data-card-id]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getIconColorClasses = (color) => {
    const colorMap = {
      blue: 'text-blue-400 group-hover:text-blue-300',
      teal: 'text-teal-400 group-hover:text-teal-300',
      green: 'text-green-400 group-hover:text-green-300',
      yellow: 'text-yellow-400 group-hover:text-yellow-300',
      pink: 'text-pink-400 group-hover:text-pink-300',
      purple: 'text-purple-400 group-hover:text-purple-300'
    };
    return colorMap[color] || 'text-blue-400 group-hover:text-blue-300';
  };

  return (
    <section className="relative bg-slate-950 py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Delivering excellence across digital and engineering solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.has(service.id);
            
            return (
              <div
                key={service.id}
                data-card-id={service.id}
                className={`group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 transition-all duration-700 transform hover:scale-105 hover:border-slate-600 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  boxShadow: isVisible ? '0 10px 40px rgba(0,0,0,0.3)' : 'none'
                }}
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                
                {/* Card Content */}
                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className={`inline-flex p-4 bg-slate-800/50 rounded-2xl group-hover:bg-slate-700/50 transition-colors duration-300`}>
                      <Icon className={`w-8 h-8 ${getIconColorClasses(service.color)} transition-colors duration-300`} />
                    </div>
                    {/* Icon Glow */}
                    <div className={`absolute inset-0 bg-${service.color}-400/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-slate-100 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <button className={`group/btn relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.gradient} hover:from-${service.color}-400 hover:to-${service.color}-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-${service.glowColor} mt-6`}>
                    <span className="relative z-10">Explore More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    
                    {/* Button Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-lg blur opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300`}></div>
                  </button>
                </div>

                {/* Card Border Glow */}
                <div className={`absolute inset-0 border border-${service.color}-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 pt-12 border-t border-slate-800">
          <p className="text-slate-400 text-lg mb-6">
            Ready to transform your business with cutting-edge solutions?
          </p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 hover:from-blue-500 hover:via-teal-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;