import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Clock, 
  Shield, 
  Globe, 
  Award, 
  Users, 
  Zap, 
  Headphones 
} from 'lucide-react';

const FeaturesSection = () => {
  const [visibleFeatures, setVisibleFeatures] = useState(new Set());

  const features = [
    {
      id: 'professionalism',
      icon: Briefcase,
      title: 'Professional Excellence',
      description: 'Industry-leading expertise with proven track record across diverse technology domains.',
      color: 'blue',
      gradient: 'from-blue-500/20 to-blue-600/10',
      glowColor: 'blue-500/30'
    },
    {
      id: 'on-time-delivery',
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Committed to meeting deadlines with efficient project management and agile methodologies.',
      color: 'teal',
      gradient: 'from-teal-500/20 to-teal-600/10',
      glowColor: 'teal-500/30'
    },
    {
      id: 'secure-payments',
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Bank-grade security protocols with transparent, flexible payment options for your peace of mind.',
      color: 'green',
      gradient: 'from-green-500/20 to-green-600/10',
      glowColor: 'green-500/30'
    },
    {
      id: 'global-clients',
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and cross-cultural project understanding.',
      color: 'yellow',
      gradient: 'from-yellow-500/20 to-yellow-600/10',
      glowColor: 'yellow-500/30'
    },
    {
      id: 'quality-assurance',
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensuring flawless delivery every time.',
      color: 'blue',
      gradient: 'from-blue-500/20 to-blue-600/10',
      glowColor: 'blue-500/30'
    },
    {
      id: 'expert-team',
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned professionals with specialized skills in cutting-edge technologies and methodologies.',
      color: 'teal',
      gradient: 'from-teal-500/20 to-teal-600/10',
      glowColor: 'teal-500/30'
    },
    {
      id: 'fast-turnaround',
      icon: Zap,
      title: 'Rapid Innovation',
      description: 'Quick turnaround times without compromising quality, leveraging modern development practices.',
      color: 'green',
      gradient: 'from-green-500/20 to-green-600/10',
      glowColor: 'green-500/30'
    },
    {
      id: 'support',
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance to ensure your solutions run smoothly.',
      color: 'yellow',
      gradient: 'from-yellow-500/20 to-yellow-600/10',
      glowColor: 'yellow-500/30'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureId = entry.target.getAttribute('data-feature-id');
            if (featureId) {
              setVisibleFeatures(prev => new Set([...prev, featureId]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const features = document.querySelectorAll('[data-feature-id]');
    features.forEach(feature => observer.observe(feature));

    return () => observer.disconnect();
  }, []);

  const getIconColorClasses = (color) => {
    const colorMap = {
      blue: 'text-blue-400 group-hover:text-blue-300',
      teal: 'text-teal-400 group-hover:text-teal-300',
      green: 'text-green-400 group-hover:text-green-300',
      yellow: 'text-yellow-400 group-hover:text-yellow-300'
    };
    return colorMap[color] || 'text-blue-400 group-hover:text-blue-300';
  };

  const getBorderColor = (color) => {
    const colorMap = {
      blue: 'border-blue-500/20 group-hover:border-blue-400/40',
      teal: 'border-teal-500/20 group-hover:border-teal-400/40',
      green: 'border-green-500/20 group-hover:border-green-400/40',
      yellow: 'border-yellow-500/20 group-hover:border-yellow-400/40'
    };
    return colorMap[color] || 'border-blue-500/20 group-hover:border-blue-400/40';
  };

  return (
    <section className="relative bg-slate-950 py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Blobs */}
        <div className="absolute top-32 left-16 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="grid grid-cols-8 gap-8 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-blue-400/20 rounded"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Delivering trust and excellence at every step
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleFeatures.has(feature.id);
            
            return (
              <div
                key={feature.id}
                data-feature-id={feature.id}
                className={`group relative transition-all duration-700 transform hover:scale-105 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Glassmorphism Card */}
                <div className={`relative bg-slate-900/40 backdrop-blur-xl border ${getBorderColor(feature.color)} rounded-xl p-8 shadow-lg hover:shadow-2xl hover:shadow-${feature.glowColor} transition-all duration-300`}>
                  
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Card Content */}
                  <div className="relative z-10 text-center space-y-4">
                    {/* Icon Container */}
                    <div className="relative mx-auto w-fit">
                      <div className="p-4 bg-slate-800/50 rounded-2xl group-hover:bg-slate-700/50 transition-colors duration-300">
                        <Icon className={`w-8 h-8 mx-auto ${getIconColorClasses(feature.color)} transition-all duration-300`} />
                      </div>
                      {/* Icon Glow Effect */}
                      <div className={`absolute inset-0 bg-${feature.color}-400/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Glow Border */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-${feature.glowColor}`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-20 pt-16 border-t border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                500+
              </div>
              <p className="text-slate-400 text-sm">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                50+
              </div>
              <p className="text-slate-400 text-sm">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                99%
              </div>
              <p className="text-slate-400 text-sm">Client Satisfaction</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                24/7
              </div>
              <p className="text-slate-400 text-sm">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;