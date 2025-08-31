import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight, Code, Smartphone, Network, Brain, Palette, Globe } from 'lucide-react';

const PortfolioSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set());

  const projects = [
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      tagline: 'Next.js & React with AI recommendations',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      color: 'blue',
      icon: Globe
    },
    {
      id: 'mobile-banking',
      title: 'Mobile Banking App',
      tagline: 'Secure fintech solution with biometrics',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      color: 'teal',
      icon: Smartphone
    },
    {
      id: 'network-dashboard',
      title: 'Network Monitoring Dashboard',
      tagline: 'Real-time infrastructure analytics',
      category: 'Networking',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      color: 'yellow',
      icon: Network
    },
    {
      id: 'ai-chatbot',
      title: 'AI Customer Support Bot',
      tagline: 'NLP-powered intelligent assistance',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      color: 'blue',
      icon: Brain
    },
    {
      id: 'design-system',
      title: 'Corporate Design System',
      tagline: 'Scalable UI component library',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      color: 'teal',
      icon: Palette
    },
    {
      id: 'saas-platform',
      title: 'SaaS Analytics Platform',
      tagline: 'Data visualization & insights',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      color: 'yellow',
      icon: Code
    },
    {
      id: 'iot-dashboard',
      title: 'IoT Monitoring System',
      tagline: 'Smart device management platform',
      category: 'Networking',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
      color: 'blue',
      icon: Network
    },
    {
      id: 'mobile-fitness',
      title: 'Fitness Tracking App',
      tagline: 'Health metrics with AI insights',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      color: 'teal',
      icon: Smartphone
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.getAttribute('data-project-id');
            if (projectId) {
              setVisibleProjects(prev => new Set([...prev, projectId]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const projects = document.querySelectorAll('[data-project-id]');
    projects.forEach(project => observer.observe(project));

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        gradient: 'from-blue-600/90 to-blue-800/90',
        border: 'border-blue-500/50',
        button: 'from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500',
        glow: 'shadow-blue-500/25',
        icon: 'text-blue-400'
      },
      teal: {
        gradient: 'from-teal-600/90 to-teal-800/90',
        border: 'border-teal-500/50',
        button: 'from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500',
        glow: 'shadow-teal-500/25',
        icon: 'text-teal-400'
      },
      yellow: {
        gradient: 'from-yellow-600/90 to-yellow-800/90',
        border: 'border-yellow-500/50',
        button: 'from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500',
        glow: 'shadow-yellow-500/25',
        icon: 'text-yellow-400'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="relative bg-slate-950 py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-500/3 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-yellow-400 bg-clip-text text-transparent">
            Demo Projects & Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Explore some of our recent works and sample demos
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isVisible = visibleProjects.has(project.id);
            const colors = getColorClasses(project.color);
            
            return (
              <div
                key={project.id}
                data-project-id={project.id}
                className={`group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-xs font-medium text-white rounded-full border ${colors.border}`}>
                      <Icon className={`w-3 h-3 ${colors.icon}`} />
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-200 text-sm mb-4">
                      {project.tagline}
                    </p>
                    <button className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${colors.button} text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:${colors.glow}`}>
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card Footer (visible by default) */}
                <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {project.tagline}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 border-2 ${colors.border} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-teal-600 to-yellow-600 hover:from-blue-500 hover:via-teal-500 hover:to-yellow-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <span className="text-lg">View Full Portfolio</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            
            {/* Button Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
          
          <p className="text-slate-500 text-sm mt-4">
            Ready to see what we can build for you?
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;