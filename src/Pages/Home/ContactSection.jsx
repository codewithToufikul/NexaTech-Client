import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, MapPin, Send, Phone, Globe } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      id="contact-section"
      className="py-20 px-6 bg-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-yellow-400 bg-clip-text text-transparent mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-yellow-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your project? Get in touch with our team today
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Side - Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            
            {/* Get In Touch Header */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Have a project in mind? We'd love to hear about it. Send us a message 
                and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              
              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a 
                    href="mailto:nexatechstudio90@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    nexatechstudio90@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-teal-500/50 transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover:bg-teal-500/30 transition-colors duration-300">
                  <MessageCircle className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">WhatsApp</p>
                  <a 
                    href="https://wa.me/8801707754890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    +8801707-754890
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <a 
                    href="tel:+8801707754890"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    +8801707-754890
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                Our Location
              </h4>
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
                <div className="absolute inset-0 bg-slate-900/20 hover:bg-transparent transition-all duration-300"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`transition-all duration-1000 delay-400 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Send us a Message
              </h3>
              
              <div className="space-y-6">
                
                {/* Name Field */}
                <div>
                  <div className="block text-white font-medium mb-2">
                    Full Name
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <div className="block text-white font-medium mb-2">
                    Email Address
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <div className="block text-white font-medium mb-2">
                    Project Details
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="group relative w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-teal-400 to-yellow-400 text-slate-950 font-bold text-lg shadow-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.7)] transition-all duration-300 animate-pulse hover:animate-none flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  Send Message
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                {/* Form Footer */}
                <p className="text-gray-400 text-sm text-center mt-4">
                  We'll get back to you within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Section */}
        <div className={`mt-16 pt-12 border-t border-slate-800 text-center transition-all duration-1000 delay-600 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-white font-semibold">Global Reach</h4>
              <p className="text-gray-400 text-sm">Serving clients worldwide</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-3">
                <MessageCircle className="w-6 h-6 text-teal-400" />
              </div>
              <h4 className="text-white font-semibold">24/7 Support</h4>
              <p className="text-gray-400 text-sm">Always here to help</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-3">
                <Send className="w-6 h-6 text-yellow-400" />
              </div>
              <h4 className="text-white font-semibold">Quick Response</h4>
              <p className="text-gray-400 text-sm">Fast turnaround time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;