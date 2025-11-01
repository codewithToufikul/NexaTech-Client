import React, { useState, useEffect } from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Zap, 
  Globe, 
  Code,
  TrendingUp,
  Shield,
  Sparkles
} from 'lucide-react';

const About = () => {
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

  const values = [
    {
      id: 'innovation',
      icon: Sparkles,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to stay ahead in the digital landscape.',
      color: 'blue',
      gradient: 'from-blue-500/20 to-blue-600/10'
    },
    {
      id: 'excellence',
      icon: Award,
      title: 'Excellence',
      description: 'Every project is delivered with meticulous attention to detail and uncompromising quality standards.',
      color: 'teal',
      gradient: 'from-teal-500/20 to-teal-600/10'
    },
    {
      id: 'integrity',
      icon: Shield,
      title: 'Integrity',
      description: 'Transparent communication, honest partnerships, and ethical practices guide everything we do.',
      color: 'green',
      gradient: 'from-green-500/20 to-green-600/10'
    },
    {
      id: 'growth',
      icon: TrendingUp,
      title: 'Growth',
      description: 'We continuously evolve, learning new skills and expanding our expertise to serve clients better.',
      color: 'yellow',
      gradient: 'from-yellow-500/20 to-yellow-600/10'
    }
  ];

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
                About NexaTech
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-green-300 to-yellow-300 bg-clip-text text-transparent mt-2">
                Innovation & Excellence
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Transforming ideas into digital solutions that drive business success
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission */}
            <div 
              data-section-id="mission"
              className={`transition-all duration-1000 transform ${
                visibleSections.has('mission')
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-xl p-8 lg:p-10 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-blue-500/20 rounded-xl">
                    <Target className="w-8 h-8 text-blue-400" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                  To empower businesses and individuals with cutting-edge digital solutions that drive innovation, 
                  efficiency, and sustainable growth in an ever-evolving technological landscape.
                </p>
                <p className="text-base text-slate-400 leading-relaxed">
                  We strive to bridge the gap between complex technology and practical business needs, 
                  delivering solutions that are not just functional, but transformative.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div 
              data-section-id="vision"
              className={`transition-all duration-1000 transform delay-200 ${
                visibleSections.has('vision')
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-xl p-8 lg:p-10 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-teal-500/20 rounded-xl">
                    <Eye className="w-8 h-8 text-teal-400" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                  To become the leading global technology partner, recognized for excellence in digital transformation 
                  and engineering solutions across industries.
                </p>
                <p className="text-base text-slate-400 leading-relaxed">
                  We envision a future where technology seamlessly integrates with business operations, 
                  creating opportunities for growth and innovation worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="relative bg-slate-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl mb-6">
              <Heart className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isVisible = visibleSections.has(`value-${value.id}`);
              
              return (
                <div
                  key={value.id}
                  data-section-id={`value-${value.id}`}
                  className={`group relative transition-all duration-700 transform hover:scale-105 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`relative bg-slate-900/40 backdrop-blur-xl border ${getBorderColor(value.color)} rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10 text-center space-y-4">
                      <div className="relative mx-auto w-fit">
                        <div className="p-4 bg-slate-800/50 rounded-2xl group-hover:bg-slate-700/50 transition-colors duration-300">
                          <Icon className={`w-8 h-8 mx-auto ${getIconColorClasses(value.color)} transition-all duration-300`} />
                        </div>
                        <div className={`absolute inset-0 bg-${value.color}-400/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors duration-300">
                        {value.title}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div 
            data-section-id="what-we-do"
            className={`transition-all duration-1000 transform ${
              visibleSections.has('what-we-do')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-yellow-400 bg-clip-text text-transparent">
                What We Do
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-yellow-500 rounded-full mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Comprehensive digital and engineering solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Web Development</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Modern, responsive websites and web applications built with cutting-edge technologies.
                </p>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-teal-500/20 rounded-xl group-hover:bg-teal-500/30 transition-colors">
                    <Zap className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Mobile Apps</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Native and cross-platform mobile solutions for iOS and Android platforms.
                </p>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-colors">
                    <Globe className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Networking Solutions</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Comprehensive network infrastructure design and optimization services.
                </p>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-yellow-500/20 rounded-xl group-hover:bg-yellow-500/30 transition-colors">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">AI & Machine Learning</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Intelligent automation and AI-powered solutions for business transformation.
                </p>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                    <Sparkles className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">UI/UX Design</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  User-centered design creating intuitive and beautiful digital experiences.
                </p>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-teal-500/20 rounded-xl group-hover:bg-teal-500/30 transition-colors">
                    <Shield className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">AutoCAD Engineering</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Precision engineering drawings and 3D modeling for complex projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-slate-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div 
            data-section-id="stats"
            className={`transition-all duration-1000 transform ${
              visibleSections.has('stats')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-yellow-400 bg-clip-text text-transparent mb-6">
                Our Impact
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-yellow-500 rounded-full mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  500+
                </div>
                <p className="text-slate-400 text-sm md:text-base">Projects Completed</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                  50+
                </div>
                <p className="text-slate-400 text-sm md:text-base">Happy Clients</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                  99%
                </div>
                <p className="text-slate-400 text-sm md:text-base">Client Satisfaction</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                  24/7
                </div>
                <p className="text-slate-400 text-sm md:text-base">Support Available</p>
              </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-yellow-400 bg-clip-text text-transparent mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your vision to life with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-gradient-to-r from-blue-500 to-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 overflow-hidden">
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group relative border-2 border-blue-400 text-blue-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 overflow-hidden">
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
