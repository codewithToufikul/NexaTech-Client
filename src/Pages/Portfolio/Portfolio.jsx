import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  ArrowRight, 
  Code, 
  Smartphone, 
  Network, 
  Brain, 
  Palette, 
  Globe,
  Ruler,
  Filter,
  X,
  Check,
  TrendingUp,
  Users,
  Award,
  Clock,
  Loader
} from 'lucide-react';
import { publicAPI } from '../../services/api';

const Portfolio = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Icon mapping based on category
  const getIconByCategory = (category) => {
    const iconMap = {
      'Web Development': Globe,
      'Mobile App': Smartphone,
      'Networking': Network,
      'AI/ML': Brain,
      'UI/UX Design': Palette,
      'AutoCAD Engineering': Ruler,
      'Other': Code,
    };
    return iconMap[category] || Code;
  };

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await publicAPI.getPortfolio();
        // Map portfolio items to include icon
        const mappedProjects = (response.portfolio || []).map(item => ({
          ...item,
          icon: getIconByCategory(item.category),
        }));
        setProjects(mappedProjects);
        setFilteredProjects(mappedProjects);
        // Initially show all projects
        const initialVisible = new Set(mappedProjects.map(p => `project-${p.id}`));
        setVisibleSections(initialVisible);
        console.log('Portfolio loaded:', mappedProjects);
      } catch (error) {
        console.error('Failed to fetch portfolio:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  useEffect(() => {
    if (filteredProjects.length === 0) return;

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

    // Small delay to ensure DOM is updated
    setTimeout(() => {
      const sections = document.querySelectorAll('[data-section-id]');
      sections.forEach(section => observer.observe(section));
    }, 100);

    return () => observer.disconnect();
  }, [filteredProjects]);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.category === selectedCategory)
      );
    }
  }, [selectedCategory, projects]);

  // Get unique categories from projects
  const categories = [
    'All',
    ...new Set(projects.map(p => p.category).filter(Boolean))
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: Award, color: 'blue' },
    { label: 'Happy Clients', value: '50+', icon: Users, color: 'teal' },
    { label: 'Success Rate', value: '99%', icon: TrendingUp, color: 'yellow' },
    { label: 'Years Experience', value: '5+', icon: Clock, color: 'green' }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        gradient: 'from-blue-600/90 to-blue-800/90',
        border: 'border-blue-500/50',
        button: 'from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500',
        glow: 'shadow-blue-500/25',
        icon: 'text-blue-400',
        bg: 'bg-blue-500/20',
        text: 'text-blue-400'
      },
      teal: {
        gradient: 'from-teal-600/90 to-teal-800/90',
        border: 'border-teal-500/50',
        button: 'from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500',
        glow: 'shadow-teal-500/25',
        icon: 'text-teal-400',
        bg: 'bg-teal-500/20',
        text: 'text-teal-400'
      },
      yellow: {
        gradient: 'from-yellow-600/90 to-yellow-800/90',
        border: 'border-yellow-500/50',
        button: 'from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500',
        glow: 'shadow-yellow-500/25',
        icon: 'text-yellow-400',
        bg: 'bg-yellow-500/20',
        text: 'text-yellow-400'
      },
      green: {
        gradient: 'from-green-600/90 to-green-800/90',
        border: 'border-green-500/50',
        button: 'from-green-500 to-green-600 hover:from-green-400 hover:to-green-500',
        glow: 'shadow-green-500/25',
        icon: 'text-green-400',
        bg: 'bg-green-500/20',
        text: 'text-green-400'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
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
                Our Portfolio
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-green-300 to-yellow-300 bg-clip-text text-transparent mt-2">
                Projects That Deliver Results
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of successful projects across web development, mobile apps, 
              networking, AI, and design
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              const colors = getColorClasses(stat.color);
              return (
                <div
                  key={stat.label}
                  className="text-center bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 transform hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex p-3 ${colors.bg} rounded-xl mb-3`}>
                    <StatIcon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold ${colors.text} mb-1`}>
                    {stat.value}
                  </div>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative bg-slate-950 py-12 px-6">
        <div className="relative max-w-7xl mx-auto">
          <div 
            data-section-id="filters"
            className={`transition-all duration-1000 transform ${
              visibleSections.has('filters')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-wrap items-center gap-4 justify-center">
              <div className="flex items-center gap-2 text-slate-400">
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filter by:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-slate-900/50 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-500/3 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div 
            data-section-id="projects"
            className="transition-all duration-1000"
          >
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader className="w-8 h-8 text-blue-400 animate-spin" />
              </div>
            ) : filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProjects.map((project, index) => {
                  const Icon = project.icon;
                  const isVisible = visibleSections.has(`project-${project.id}`) || visibleSections.size === 0;
                  const colors = getColorClasses(project.color);
                  
                  return (
                    <div
                      key={project.id || index}
                      data-section-id={`project-${project.id}`}
                      onClick={() => handleProjectClick(project)}
                      className={`group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-700 transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
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
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {project.title}
                          </h3>
                          <p className="text-slate-200 text-sm mb-4">
                            {project.tagline}
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProjectClick(project);
                            }}
                            className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${colors.button} text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 pointer-events-auto`}
                          >
                            <span>View Details</span>
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-slate-400 text-sm">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Hover Border Effect */}
                      <div className={`absolute inset-0 border-2 ${colors.border} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-slate-400 text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative bg-slate-900 rounded-2xl border border-slate-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="relative">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent`}></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-sm rounded-full border ${getColorClasses(selectedProject.color).border}`}>
                    {(() => {
                      const Icon = selectedProject.icon || getIconByCategory(selectedProject.category);
                      return <Icon className={`w-4 h-4 ${getColorClasses(selectedProject.color).icon}`} />;
                    })()}
                    <span className="text-white text-sm font-medium">{selectedProject.category}</span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 space-y-6">
                {/* Title & Tagline */}
                <div>
                  <h2 className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${getColorClasses(selectedProject.color).gradient.replace('/90', '-400')} bg-clip-text text-transparent`}>
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate-400 text-lg">{selectedProject.tagline}</p>
                </div>

                {/* Meta Info */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-800">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Client</p>
                    <p className="text-white font-medium">{selectedProject.client}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Duration</p>
                    <p className="text-white font-medium">{selectedProject.duration}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Status</p>
                    <p className={`${getColorClasses(selectedProject.color).text} font-medium`}>{selectedProject.status}</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Overview</h3>
                  <p className="text-slate-300 leading-relaxed">{selectedProject.description}</p>
                  <p className="text-slate-400 leading-relaxed mt-3">{selectedProject.fullDescription}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 ${getColorClasses(selectedProject.color).bg} border ${getColorClasses(selectedProject.color).border} rounded-lg text-sm ${getColorClasses(selectedProject.color).text}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className={`w-5 h-5 ${getColorClasses(selectedProject.color).text} mt-0.5 flex-shrink-0`} />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className={`p-6 ${getColorClasses(selectedProject.color).bg} border ${getColorClasses(selectedProject.color).border} rounded-xl`}>
                  <h3 className="text-xl font-bold text-white mb-4">Results & Achievements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.results.map((result, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <TrendingUp className={`w-5 h-5 ${getColorClasses(selectedProject.color).text} mt-0.5 flex-shrink-0`} />
                        <span className="text-slate-200">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={closeModal}
                    className={`flex-1 px-6 py-3 bg-gradient-to-r ${getColorClasses(selectedProject.color).button} text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Close
                  </button>
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Project
                    </a>
                  )}
                  <a
                    href="/contact"
                    className={`flex-1 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 text-center`}
                  >
                    Start Your Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
