import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, 
  Globe, 
  Smartphone, 
  Brain, 
  Palette, 
  Ruler,
  ArrowRight,
  Check,
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  Layers,
  Rocket
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';

const Services = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section-id');
            if (sectionId) {
              setVisibleSections(prev => new Set([...prev, sectionId]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = document.querySelectorAll('[data-section-id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = servicesData;

  const technologies = [
    { name: 'React', icon: Code, color: 'blue', bgColor: 'bg-blue-500/20', hoverBg: 'group-hover:bg-blue-500/30' },
    { name: 'Node.js', icon: Database, color: 'teal', bgColor: 'bg-teal-500/20', hoverBg: 'group-hover:bg-teal-500/30' },
    { name: 'Cloud', icon: Cloud, color: 'green', bgColor: 'bg-green-500/20', hoverBg: 'group-hover:bg-green-500/30' },
    { name: 'Security', icon: Shield, color: 'yellow', bgColor: 'bg-yellow-500/20', hoverBg: 'group-hover:bg-yellow-500/30' },
    { name: 'Performance', icon: Zap, color: 'pink', bgColor: 'bg-pink-500/20', hoverBg: 'group-hover:bg-pink-500/30' },
    { name: 'Scalability', icon: Layers, color: 'purple', bgColor: 'bg-purple-500/20', hoverBg: 'group-hover:bg-purple-500/30' }
  ];

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

  const getBorderColor = (color) => {
    const colorMap = {
      blue: 'border-blue-500/20 group-hover:border-blue-400/40',
      teal: 'border-teal-500/20 group-hover:border-teal-400/40',
      green: 'border-green-500/20 group-hover:border-green-400/40',
      yellow: 'border-yellow-500/20 group-hover:border-yellow-400/40',
      pink: 'border-pink-500/20 group-hover:border-pink-400/40',
      purple: 'border-purple-500/20 group-hover:border-purple-400/40'
    };
    return colorMap[color] || 'border-blue-500/20 group-hover:border-blue-400/40';
  };

  return (
    <div className="bg-slate-950 min-h-screen mt-10">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Our Services
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-green-300 to-yellow-300 bg-clip-text text-transparent mt-2">
                Complete Digital Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              From web development to AI solutions, we provide comprehensive technology services 
              tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative bg-slate-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div 
            data-section-id="services-header"
            className={`text-center mb-16 space-y-4 transition-all duration-1000 transform ${
              visibleSections.has('services-header')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
              What We Offer
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
              const isVisible = visibleSections.has(`service-${service.id}`);
              
              return (
                <div
                  key={service.id}
                  data-section-id={`service-${service.id}`}
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
                      <div className="inline-flex p-4 bg-slate-800/50 rounded-2xl group-hover:bg-slate-700/50 transition-colors duration-300">
                        <Icon className={`w-8 h-8 ${getIconColorClasses(service.color)} transition-colors duration-300`} />
                      </div>
                      <div className={`absolute inset-0 bg-${service.color}-400/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-slate-100 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-base leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* View Details Button */}
                    <Link
                      to={`/services/${service.id}`}
                      className={`group/btn relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-6 w-full`}
                    >
                      <span className="relative z-10">View Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      
                      {/* Button Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-lg blur opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300`}></div>
                    </Link>
                  </div>

                  {/* Card Border Glow */}
                  <div className={`absolute inset-0 border border-${service.color}-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div 
            data-section-id="technologies"
            className={`transition-all duration-1000 transform ${
              visibleSections.has('technologies')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-yellow-400 bg-clip-text text-transparent">
                Technologies We Use
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-yellow-500 rounded-full mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Cutting-edge tools and frameworks for modern solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => {
                const TechIcon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="group bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 text-center"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div className={`p-3 ${tech.bgColor} ${tech.hoverBg} rounded-xl transition-colors`}>
                        <TechIcon className={`w-6 h-6 ${getIconColorClasses(tech.color)}`} />
                      </div>
                      <span className="text-white font-medium text-sm">{tech.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative bg-slate-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div 
            data-section-id="process"
            className={`transition-all duration-1000 transform ${
              visibleSections.has('process')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                Our Process
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 rounded-full mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                A systematic approach to delivering exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
                { step: '02', title: 'Planning', description: 'Strategic roadmap and design approach' },
                { step: '03', title: 'Development', description: 'Building with precision and care' },
                { step: '04', title: 'Launch', description: 'Deployment and ongoing support' }
              ].map((phase, index) => (
                <div
                  key={phase.step}
                  className="text-center space-y-4 group"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {phase.step}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                  <p className="text-slate-400 text-sm">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div 
            data-section-id="cta"
            className={`transition-all duration-1000 transform ${
              visibleSections.has('cta')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-12">
              <Rocket className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-yellow-400 bg-clip-text text-transparent mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and see how we can help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative bg-gradient-to-r from-blue-500 to-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 overflow-hidden">
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="group relative border-2 border-blue-400 text-blue-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 overflow-hidden">
                  <span className="relative z-10">View Portfolio</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
