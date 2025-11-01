import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  MessageCircle, 
  MapPin, 
  Send, 
  Phone, 
  Globe,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Calendar,
  User,
  FileText,
  Sparkles
} from 'lucide-react';

const Contact = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear success message when form changes
    if (submitStatus === 'success') {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        service: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'nexatechstudio90@gmail.com',
      link: 'mailto:nexatechstudio90@gmail.com',
      color: 'blue',
      description: 'Send us an email anytime'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+8801707-754890',
      link: 'https://wa.me/8801707754890',
      color: 'teal',
      description: 'Chat with us on WhatsApp'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+8801707-754890',
      link: 'tel:+8801707754890',
      color: 'yellow',
      description: 'Call us for immediate support'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Dhaka, Bangladesh',
      link: '#location',
      color: 'green',
      description: 'We\'re based in Dhaka'
    }
  ];

  const services = [
    'Networking Solutions',
    'Web Development',
    'Mobile Applications',
    'AI & Machine Learning',
    'UI/UX Design',
    'AutoCAD Engineering',
    'General Inquiry'
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-500/20',
        text: 'text-blue-400',
        border: 'border-blue-500/20',
        hover: 'hover:bg-blue-500/30',
        hoverBorder: 'hover:border-blue-500/50'
      },
      teal: {
        bg: 'bg-teal-500/20',
        text: 'text-teal-400',
        border: 'border-teal-500/20',
        hover: 'hover:bg-teal-500/30',
        hoverBorder: 'hover:border-teal-500/50'
      },
      yellow: {
        bg: 'bg-yellow-500/20',
        text: 'text-yellow-400',
        border: 'border-yellow-500/20',
        hover: 'hover:bg-yellow-500/30',
        hoverBorder: 'hover:border-yellow-500/50'
      },
      green: {
        bg: 'bg-green-500/20',
        text: 'text-green-400',
        border: 'border-green-500/20',
        hover: 'hover:bg-green-500/30',
        hoverBorder: 'hover:border-green-500/50'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="bg-slate-950 min-h-screen mt-10">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Get In Touch
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-green-300 to-yellow-300 bg-clip-text text-transparent mt-2">
                Let's Start Your Project
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear about it. Send us a message 
              and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div 
            data-section-id="contact-methods"
            className={`transition-all duration-1000 transform ${
              visibleSections.has('contact-methods')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const colors = getColorClasses(method.color);
                return (
                  <a
                    key={method.title}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`group bg-slate-900/40 backdrop-blur-xl border ${colors.border} ${colors.hoverBorder} rounded-xl p-6 transition-all duration-300 transform hover:scale-105`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`inline-flex p-3 ${colors.bg} ${colors.hover} rounded-lg mb-4 transition-colors`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{method.title}</h3>
                    <p className={`${colors.text} text-sm mb-1 group-hover:underline transition-all`}>
                      {method.value}
                    </p>
                    <p className="text-slate-400 text-xs">{method.description}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Info Section */}
      <section className="relative bg-slate-950 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Side - Contact Form */}
            <div 
              data-section-id="contact-form"
              className={`transition-all duration-1000 transform ${
                visibleSections.has('contact-form')
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Send className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Send us a Message
                  </h2>
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <p className="text-green-400 text-sm">
                      Thank you! Your message has been sent. We'll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-white font-medium mb-2 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                        formErrors.name 
                          ? 'border-red-500 focus:ring-2 focus:ring-red-500/20' 
                          : 'border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-white font-medium mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                        formErrors.email 
                          ? 'border-red-500 focus:ring-2 focus:ring-red-500/20' 
                          : 'border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-white font-medium mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                      placeholder="Enter your phone number (optional)"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-white font-medium mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-white font-medium mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                    >
                      <option value="">Select a service (optional)</option>
                      {services.map(service => (
                        <option key={service} value={service} className="bg-slate-800">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-white font-medium mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Project Details <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      className={`w-full px-4 py-3 bg-slate-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none ${
                        formErrors.message 
                          ? 'border-red-500 focus:ring-2 focus:ring-red-500/20' 
                          : 'border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                      }`}
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-teal-400 to-yellow-400 text-slate-950 font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Form Footer */}
                  <p className="text-gray-400 text-sm text-center">
                    We'll get back to you within 24 hours
                  </p>
                </form>
              </div>
            </div>

            {/* Right Side - Additional Info */}
            <div 
              data-section-id="contact-info"
              className={`space-y-8 transition-all duration-1000 delay-200 transform ${
                visibleSections.has('contact-info')
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
            >
              {/* Business Hours */}
              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-yellow-500/20 rounded-xl">
                    <Clock className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Business Hours</h3>
                </div>
                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-slate-700 last:border-0">
                      <span className="text-slate-300 font-medium">{schedule.day}</span>
                      <span className="text-slate-400">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Map */}
              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Location</h3>
                </div>
                <div className="relative overflow-hidden rounded-xl border border-slate-700 h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8239805594!2d90.25446273358708!3d23.781067240085395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1703234567890!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="filter grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                  <div className="absolute inset-0 bg-slate-900/20 hover:bg-transparent transition-all duration-300 pointer-events-none"></div>
                </div>
                <p className="text-slate-400 text-sm mt-4 text-center">
                  Dhaka, Bangladesh
                </p>
              </div>

              {/* Quick Response Info */}
              <div className="bg-gradient-to-br from-blue-500/10 to-teal-500/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Quick Response Guarantee</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      We understand that time is valuable. That's why we commit to responding to all inquiries within 24 hours, ensuring you get the information you need promptly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div 
            data-section-id="trust-section"
            className={`transition-all duration-1000 transform ${
              visibleSections.has('trust-section')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-yellow-400 bg-clip-text text-transparent mb-4">
                Why Choose Us
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-yellow-500 rounded-full mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">Global Reach</h4>
                <p className="text-slate-400 text-sm">Serving clients worldwide</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-teal-400" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">24/7 Support</h4>
                <p className="text-slate-400 text-sm">Always here to help</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">Quick Response</h4>
                <p className="text-slate-400 text-sm">Fast turnaround time</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
