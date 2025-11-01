import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  Check,
  Rocket,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Award,
  Clock,
  Globe,
  Star,
  Target,
  Lightbulb
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [visibleSections, setVisibleSections] = useState(new Set());

  const service = servicesData.find(s => s.id === id);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="bg-slate-950 min-h-screen mt-10 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white">Service Not Found</h2>
          <p className="text-slate-400">The service you're looking for doesn't exist.</p>
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-full font-semibold hover:scale-105 transition-transform"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        text: 'text-blue-400',
        bg: 'bg-blue-500/20',
        border: 'border-blue-500/20',
        gradient: 'from-blue-400 to-blue-600',
        hover: 'hover:bg-blue-500/30'
      },
      teal: {
        text: 'text-teal-400',
        bg: 'bg-teal-500/20',
        border: 'border-teal-500/20',
        gradient: 'from-teal-400 to-teal-600',
        hover: 'hover:bg-teal-500/30'
      },
      green: {
        text: 'text-green-400',
        bg: 'bg-green-500/20',
        border: 'border-green-500/20',
        gradient: 'from-green-400 to-green-600',
        hover: 'hover:bg-green-500/30'
      },
      yellow: {
        text: 'text-yellow-400',
        bg: 'bg-yellow-500/20',
        border: 'border-yellow-500/20',
        gradient: 'from-yellow-400 to-yellow-600',
        hover: 'hover:bg-yellow-500/30'
      },
      pink: {
        text: 'text-pink-400',
        bg: 'bg-pink-500/20',
        border: 'border-pink-500/20',
        gradient: 'from-pink-400 to-pink-600',
        hover: 'hover:bg-pink-500/30'
      },
      purple: {
        text: 'text-purple-400',
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/20',
        gradient: 'from-purple-400 to-purple-600',
        hover: 'hover:bg-purple-500/30'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  const colors = getColorClasses(service.color);

  return (
    <div className="bg-slate-950 min-h-screen mt-10">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          {/* Back Button */}
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Services</span>
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Icon */}
            <div className={`flex-shrink-0 p-6 ${colors.bg} rounded-2xl border ${colors.border} shadow-xl`}>
              <Icon className={`w-16 h-16 ${colors.text}`} />
            </div>

            {/* Title & Description */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent block">
                  {service.title}
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div 
            data-section-id="overview"
            className={`transition-all duration-1000 transform ${
              visibleSections.has('overview')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 lg:p-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                Service Overview
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                {service.fullDescription}
              </p>
              <p className="text-base text-slate-400 leading-relaxed">
                {service.longDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative bg-slate-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div 
            data-section-id="features"
            className={`transition-all duration-1000 transform ${
              visibleSections.has('features')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                Key Features
              </h2>
              <div className={`w-24 h-1 bg-gradient-to-r ${service.gradient} rounded-full mx-auto`}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className={`group bg-slate-900/40 backdrop-blur-xl border ${colors.border} rounded-xl p-6 hover:border-opacity-60 transition-all duration-300 transform hover:scale-105`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 p-2 ${colors.bg} ${colors.hover} rounded-lg transition-colors`}>
                      <Check className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <p className="text-white font-medium leading-relaxed">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div 
            data-section-id="benefits"
            className={`transition-all duration-1000 transform ${
              visibleSections.has('benefits')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                Why Choose This Service
              </h2>
              <div className={`w-24 h-1 bg-gradient-to-r ${service.gradient} rounded-full mx-auto`}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => {
                const benefitIcons = [TrendingUp, Shield, Zap, Users, Award, Clock];
                const BenefitIcon = benefitIcons[index % benefitIcons.length];
                return (
                  <div
                    key={index}
                    className={`group bg-slate-900/40 backdrop-blur-xl border ${colors.border} rounded-xl p-8 hover:border-opacity-60 transition-all duration-300 transform hover:scale-105`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`inline-flex p-4 ${colors.bg} ${colors.hover} rounded-xl mb-4 transition-colors`}>
                      <BenefitIcon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Benefit {index + 1}</h3>
                    <p className="text-slate-400 leading-relaxed">{benefit}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative bg-slate-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div 
            data-section-id="use-cases"
            className={`transition-all duration-1000 transform ${
              visibleSections.has('use-cases')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                Use Cases
              </h2>
              <div className={`w-24 h-1 bg-gradient-to-r ${service.gradient} rounded-full mx-auto`}></div>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                Explore how this service can be applied to your specific needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className={`group bg-slate-900/40 backdrop-blur-xl border ${colors.border} rounded-xl p-6 hover:border-opacity-60 transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 ${colors.bg} ${colors.hover} rounded-lg flex items-center justify-center transition-colors`}>
                      <Target className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{useCase}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
            <div className="text-center mb-12">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                Technologies & Tools
              </h2>
              <div className={`w-24 h-1 bg-gradient-to-r ${service.gradient} rounded-full mx-auto`}></div>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                We work with industry-leading technologies to deliver exceptional results
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`group px-6 py-3 ${colors.bg} ${colors.hover} border ${colors.border} rounded-xl transition-all duration-300 transform hover:scale-110 cursor-default`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className={`${colors.text} font-medium`}>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-slate-950 py-20 px-6 overflow-hidden">
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
            <div className={`bg-slate-900/40 backdrop-blur-xl border ${colors.border} rounded-2xl p-12`}>
              <Rocket className={`w-16 h-16 ${colors.text} mx-auto mb-6`} />
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how {service.title.toLowerCase()} can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/contact')}
                  className={`group relative bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden`}
                  style={{
                    boxShadow: '0 0 0 transparent',
                  }}
                  onMouseEnter={(e) => {
                    const shadowColors = {
                      blue: 'rgba(59, 130, 246, 0.3)',
                      teal: 'rgba(20, 184, 166, 0.3)',
                      green: 'rgba(34, 197, 94, 0.3)',
                      yellow: 'rgba(234, 179, 8, 0.3)',
                      pink: 'rgba(236, 72, 153, 0.3)',
                      purple: 'rgba(168, 85, 247, 0.3)'
                    };
                    e.currentTarget.style.boxShadow = `0 20px 40px ${shadowColors[service.color] || shadowColors.blue}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 0 transparent';
                  }}
                >
                  <span className="relative z-10">Contact Us</span>
                </button>
                <button
                  onClick={() => navigate('/services')}
                  className="group relative border-2 border-slate-600 text-slate-300 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:border-slate-500 hover:scale-105"
                >
                  <span>View All Services</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
