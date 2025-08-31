import React from 'react';
import { Facebook, Linkedin, Github, Instagram, ExternalLink } from 'lucide-react';
import logo from "../assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: '#',
      color: 'hover:text-blue-500 hover:shadow-blue-500/25',
      bgColor: 'group-hover:bg-blue-500/20'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#',
      color: 'hover:text-blue-600 hover:shadow-blue-600/25',
      bgColor: 'group-hover:bg-blue-600/20'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: '#',
      color: 'hover:text-gray-400 hover:shadow-gray-400/25',
      bgColor: 'group-hover:bg-gray-400/20'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
      color: 'hover:text-pink-500 hover:shadow-pink-500/25',
      bgColor: 'group-hover:bg-pink-500/20'
    }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column - Logo & Tagline */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-teal-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                  <img className=' rounded-2xl' src={logo} alt="" />
                </div>
                {/* Logo Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-teal-500 to-yellow-500 rounded-xl blur-md opacity-50 -z-10"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-yellow-400 bg-clip-text text-transparent">
                  NexaTech
                </h3>
              </div>
            </div>
            
            {/* Tagline */}
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Your trusted partner in digital & engineering solutions.
            </p>
            
            {/* Additional Info */}
            <div className="space-y-2 text-sm text-gray-500">
              <p className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for new projects
              </p>
              <p className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                Serving clients worldwide
              </p>
            </div>
          </div>

          {/* Center Column - Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">
              Quick Links
            </h4>
            <nav>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1"
                    >
                      <span className="relative">
                        {link.name}
                        {/* Hover Underline */}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Hover Glow */}
                      <span className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Additional Links */}
            <div className="pt-4 border-t border-slate-800">
              <h5 className="text-sm font-medium text-gray-300 mb-3">Support</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Social Media */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">
              Connect With Us
            </h4>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 bg-slate-800/50 rounded-xl border border-slate-700 text-gray-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                    
                    {/* Background Glow */}
                    <div className={`absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 ${social.bgColor}`}></div>
                    
                    {/* Hover Ring */}
                    <div className="absolute -inset-1 rounded-xl border border-transparent group-hover:border-current opacity-20 transition-opacity duration-300"></div>
                  </a>
                );
              })}
            </div>
            
            {/* Newsletter Signup */}
            <div className="pt-4">
              <h5 className="text-sm font-medium text-gray-300 mb-3">Stay Updated</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 text-sm focus:border-blue-500 focus:outline-none transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg text-sm font-medium hover:from-blue-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © NexaTech 2025. All rights reserved.
            </p>
            
            {/* Additional Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                Terms of Service
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                Cookies
              </a>
            </div>
            
            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-slate-600 rounded-lg text-gray-400 hover:text-white transition-all duration-300 text-sm"
            >
              <span>Back to Top</span>
              <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;