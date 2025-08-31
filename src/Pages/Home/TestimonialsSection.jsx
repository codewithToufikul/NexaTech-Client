import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

  const testimonials = [
    {
      id: 'testimonial-1',
      name: 'Sarah Johnson',
      role: 'CEO',
      location: 'TechFlow Solutions',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      review: 'NexaTech transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300% and the team was incredibly professional throughout the project.',
      rating: 5,
      color: 'blue'
    },
    {
      id: 'testimonial-2',
      name: 'Michael Chen',
      role: 'Startup Founder',
      location: 'Singapore',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      review: 'Outstanding mobile app development! They delivered our fintech app ahead of schedule with features we never imagined possible. Highly recommend their services.',
      rating: 5,
      color: 'teal'
    },
    {
      id: 'testimonial-3',
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      location: 'Digital Innovations Inc.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      review: 'The web development team at NexaTech created a stunning, high-performance website that boosted our conversions by 250%. Exceptional attention to detail!',
      rating: 5,
      color: 'yellow'
    },
    {
      id: 'testimonial-4',
      name: 'David Thompson',
      role: 'IT Manager',
      location: 'Global Enterprises Ltd.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      review: 'Their network infrastructure design completely revolutionized our operations. 24/7 support and seamless implementation made all the difference.',
      rating: 5,
      color: 'blue'
    },
    {
      id: 'testimonial-5',
      name: 'Lisa Park',
      role: 'UX Designer',
      location: 'Creative Studio',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      review: 'Working with NexaTech on UI/UX design was a dream. They understand both aesthetics and functionality perfectly, creating interfaces users love.',
      rating: 5,
      color: 'teal'
    },
    {
      id: 'testimonial-6',
      name: 'James Wilson',
      role: 'Engineering Manager',
      location: 'BuildTech Corp.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      review: 'Their AutoCAD and engineering services saved us months of work. Precise, professional, and delivered exactly what we needed for our complex projects.',
      rating: 5,
      color: 'yellow'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute('data-testimonial-id');
            if (cardId) {
              setVisibleCards(prev => new Set([...prev, cardId]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const cards = document.querySelectorAll('[data-testimonial-id]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        gradient: 'from-blue-500/10 to-blue-600/5',
        border: 'border-blue-500/20 group-hover:border-blue-400/40',
        glow: 'shadow-blue-500/20',
        star: 'text-blue-400'
      },
      teal: {
        gradient: 'from-teal-500/10 to-teal-600/5',
        border: 'border-teal-500/20 group-hover:border-teal-400/40',
        glow: 'shadow-teal-500/20',
        star: 'text-teal-400'
      },
      yellow: {
        gradient: 'from-yellow-500/10 to-yellow-600/5',
        border: 'border-yellow-500/20 group-hover:border-yellow-400/40',
        glow: 'shadow-yellow-500/20',
        star: 'text-yellow-400'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  const renderStars = (rating, color) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? `${getColorClasses(color).star} fill-current` 
            : 'text-slate-600'
        }`}
      />
    ));
  };

  return (
    <section className="relative bg-slate-950 py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          {/* Quote Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl mb-6">
            <Quote className="w-8 h-8 text-blue-400" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-yellow-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-yellow-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Trusted by students, professionals & businesses worldwide
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {
            const isVisible = visibleCards.has(testimonial.id);
            const colors = getColorClasses(testimonial.color);
            
            return (
              <div
                key={testimonial.id}
                data-testimonial-id={testimonial.id}
                className={`group relative transition-all duration-700 transform hover:-translate-y-2 hover:shadow-2xl ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Testimonial Card */}
                <div className={`relative bg-slate-900/40 backdrop-blur-xl border ${colors.border} rounded-xl p-8 shadow-lg hover:${colors.glow} transition-all duration-300`}>
                  
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Card Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Header with Avatar and Info */}
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="relative flex-shrink-0">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-slate-600 group-hover:border-slate-500 transition-colors duration-300"
                        />
                        {/* Avatar Glow */}
                        <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 shadow-lg ${colors.glow}`}></div>
                      </div>

                      {/* Client Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition-colors duration-300">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                          {testimonial.role} • {testimonial.location}
                        </p>
                        
                        {/* Star Rating */}
                        <div className="flex items-center gap-1 mt-2">
                          {renderStars(testimonial.rating, testimonial.color)}
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 italic">
                      "{testimonial.review}"
                    </blockquote>

                    {/* Quote Decoration */}
                    <div className={`absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300`}>
                      <Quote className={`w-12 h-12 ${getColorClasses(testimonial.color).star}`} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="space-y-4">
            <p className="text-slate-400 text-lg">
              Ready to join our satisfied clients?
            </p>
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-teal-600 to-yellow-600 hover:from-blue-500 hover:via-teal-500 hover:to-yellow-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <span className="text-lg">Work With Us</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              
              {/* Button Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-teal-400 to-yellow-400 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>500+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span>50+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span>99% Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;