import { Network, Globe, Smartphone, Brain, Palette, Ruler } from 'lucide-react';

export const servicesData = [
  {
    id: 'networking',
    icon: Network,
    title: 'Networking Solutions',
    shortDescription: 'Comprehensive network infrastructure design, implementation, and optimization for seamless connectivity and peak performance.',
    fullDescription: 'We design and implement robust network infrastructures that ensure seamless connectivity, optimal performance, and scalability. Our solutions include LAN/WAN setup, network security, wireless networking, and cloud networking integration.',
    longDescription: `At NexaTech, we specialize in designing and implementing comprehensive networking solutions that power modern businesses. Our expert team works with cutting-edge technologies to create network infrastructures that are not only robust and secure but also scalable and efficient.

Whether you're setting up a new network from scratch or optimizing an existing infrastructure, we provide end-to-end services that cover every aspect of network deployment. From initial assessment and planning to implementation and ongoing maintenance, we ensure your network operates at peak performance.

Our networking solutions are designed to support your business growth, handle increasing data loads, and maintain security standards. We understand that network downtime can be costly, which is why we build redundant systems and implement comprehensive monitoring solutions.`,
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    features: [
      'Network Infrastructure Design',
      'LAN/WAN Setup & Configuration',
      'Network Security & Firewall',
      'Wireless Network Solutions',
      'Cloud Network Integration',
      'Network Monitoring & Maintenance',
      'VPN & Remote Access Setup',
      'Network Performance Optimization'
    ],
    benefits: [
      'Improved network reliability and uptime',
      'Enhanced security with advanced firewall protection',
      'Scalable architecture for business growth',
      'Reduced network latency and faster data transfer',
      '24/7 monitoring and proactive maintenance',
      'Cost-effective solutions tailored to your needs'
    ],
    useCases: [
      'Enterprise network setup and expansion',
      'Cloud infrastructure connectivity',
      'Remote work infrastructure',
      'Data center networking',
      'Branch office connectivity',
      'Network security hardening'
    ],
    technologies: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto', 'Ubiquiti', 'Aruba', 'SD-WAN', 'MPLS']
  },
  {
    id: 'web-dev',
    icon: Globe,
    title: 'Web Development',
    shortDescription: 'Modern, responsive websites and web applications built with cutting-edge technologies for exceptional user experiences.',
    fullDescription: 'We create stunning, high-performance websites and web applications using the latest technologies. From simple landing pages to complex enterprise applications, we deliver solutions that are fast, secure, and scalable.',
    longDescription: `Our web development team crafts exceptional digital experiences that not only look beautiful but also perform flawlessly. We understand that your website is often the first impression customers have of your business, which is why we focus on creating responsive, fast-loading, and user-friendly websites.

From simple landing pages to complex enterprise applications, we leverage modern frameworks and technologies to build scalable solutions. Our development process follows best practices for code quality, security, and performance optimization.

We work closely with clients to understand their unique requirements and business goals, ensuring that every feature and functionality serves a purpose. Whether you need an e-commerce platform, a content management system, or a custom web application, we have the expertise to bring your vision to life.`,
    color: 'teal',
    gradient: 'from-teal-500 to-teal-600',
    features: [
      'Responsive Web Design',
      'Frontend Development (React, Vue, Angular)',
      'Backend Development (Node.js, Python, PHP)',
      'E-Commerce Solutions',
      'CMS Development (WordPress, Custom)',
      'API Development & Integration',
      'Progressive Web Apps (PWA)',
      'Performance Optimization & SEO'
    ],
    benefits: [
      'Faster page load times and improved SEO',
      'Mobile-first responsive design',
      'Secure and scalable architecture',
      'Custom features tailored to your business',
      'Easy content management and updates',
      'Integration with third-party services'
    ],
    useCases: [
      'Corporate websites and landing pages',
      'E-commerce platforms',
      'SaaS applications',
      'Web portals and dashboards',
      'Content management systems',
      'API and backend services'
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PHP', 'WordPress']
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile Applications',
    shortDescription: 'Native and cross-platform mobile apps that engage users and drive business growth across iOS and Android platforms.',
    fullDescription: 'We develop powerful mobile applications for iOS and Android platforms using native and cross-platform technologies. Our apps are designed for performance, user engagement, and scalability.',
    longDescription: `In today's mobile-first world, having a presence on smartphones is essential for business success. We develop native and cross-platform mobile applications that provide exceptional user experiences and drive engagement.

Our mobile app development process covers everything from initial concept and design to App Store deployment and ongoing maintenance. We understand the nuances of both iOS and Android platforms, ensuring your app works flawlessly on both.

We build apps that are not just functional, but also intuitive and engaging. Performance is at the core of our development approach, ensuring your app loads quickly, runs smoothly, and provides a seamless user experience even on older devices.`,
    color: 'green',
    gradient: 'from-green-500 to-green-600',
    features: [
      'Native iOS Development (Swift)',
      'Native Android Development (Kotlin)',
      'Cross-Platform (React Native, Flutter)',
      'UI/UX Design Integration',
      'App Store Optimization',
      'Push Notifications',
      'In-App Purchases & Payments',
      'App Maintenance & Updates'
    ],
    benefits: [
      'Native performance and user experience',
      'Access to platform-specific features',
      'Faster development with cross-platform tools',
      'App Store optimization for visibility',
      'Secure payment and authentication',
      'Regular updates and feature enhancements'
    ],
    useCases: [
      'Business mobile apps',
      'E-commerce mobile platforms',
      'Social and community apps',
      'Productivity and utility apps',
      'Gaming applications',
      'Enterprise mobile solutions'
    ],
    technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'iOS SDK', 'Android SDK', 'Firebase', 'App Store Connect']
  },
  {
    id: 'ai-solutions',
    icon: Brain,
    title: 'AI & Machine Learning',
    shortDescription: 'Intelligent automation and AI-powered solutions that transform data into actionable insights and competitive advantages.',
    fullDescription: 'We leverage artificial intelligence and machine learning to create intelligent systems that automate processes, analyze data, and provide actionable insights that drive business growth.',
    longDescription: `Artificial Intelligence is transforming how businesses operate, and we help you harness its power. Our AI and machine learning solutions automate complex processes, analyze large datasets, and provide insights that drive strategic decision-making.

We develop custom AI solutions tailored to your specific business needs. From predictive analytics to natural language processing, our AI implementations help you gain a competitive edge and improve operational efficiency.

Our team stays at the forefront of AI innovation, working with the latest machine learning frameworks and tools. We don't just implement AI - we ensure it integrates seamlessly with your existing systems and provides measurable business value.`,
    color: 'yellow',
    gradient: 'from-yellow-500 to-yellow-600',
    features: [
      'Machine Learning Models',
      'Natural Language Processing (NLP)',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'Chatbots & Virtual Assistants',
      'Automated Decision Making',
      'Data Mining & Analysis',
      'AI Integration & Consulting'
    ],
    benefits: [
      'Automated processes reduce manual work',
      'Data-driven insights for better decisions',
      'Improved customer experience with AI assistants',
      'Predictive capabilities for forecasting',
      'Cost reduction through automation',
      'Competitive advantage with advanced technology'
    ],
    useCases: [
      'Customer service chatbots',
      'Predictive maintenance systems',
      'Image and document recognition',
      'Sentiment analysis',
      'Recommendation engines',
      'Fraud detection and prevention'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Google Cloud AI', 'Azure ML', 'Python', 'R', 'Natural Language Toolkit']
  },
  {
    id: 'ui-ux',
    icon: Palette,
    title: 'UI/UX Design',
    shortDescription: 'User-centered design that creates intuitive, beautiful interfaces and exceptional digital experiences that convert.',
    fullDescription: 'We create user-centered designs that are not just beautiful, but also functional and intuitive. Our design process focuses on user research, usability testing, and creating experiences that convert visitors into customers.',
    longDescription: `Great design is more than just aesthetics - it's about creating experiences that users love and that drive business results. Our UI/UX design team combines creativity with data-driven insights to create interfaces that are both beautiful and highly functional.

We follow a user-centered design approach, starting with extensive research to understand your users' needs, behaviors, and pain points. This research informs every design decision, ensuring that the final product truly serves your audience.

Our design process includes wireframing, prototyping, and extensive testing to refine every detail. We create design systems that ensure consistency across your digital products while maintaining flexibility for future growth.`,
    color: 'pink',
    gradient: 'from-pink-500 to-pink-600',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'User Interface (UI) Design',
      'User Experience (UX) Design',
      'Design Systems & Style Guides',
      'Usability Testing',
      'Design Handoff & Collaboration'
    ],
    benefits: [
      'Improved user engagement and conversions',
      'Reduced bounce rates and better retention',
      'Enhanced brand perception',
      'Faster development with design systems',
      'Accessibility and inclusivity',
      'Data-driven design decisions'
    ],
    useCases: [
      'Website redesign',
      'Mobile app interface design',
      'Dashboard and admin panel design',
      'E-commerce user experience',
      'SaaS application design',
      'Brand identity and visual design'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Adobe Creative Suite', 'Framer', 'Webflow']
  },
  {
    id: 'autocad',
    icon: Ruler,
    title: 'AutoCAD Engineering',
    shortDescription: 'Precision engineering drawings, 3D modeling, and technical documentation for complex engineering projects.',
    fullDescription: 'We provide professional AutoCAD and CAD services for engineering projects. Our team creates precise technical drawings, 3D models, and documentation for architecture, mechanical engineering, electrical systems, and more.',
    longDescription: `Precision and accuracy are paramount in engineering, and our AutoCAD services deliver exactly that. We provide comprehensive CAD solutions for a wide range of engineering disciplines, from architecture to mechanical design.

Our experienced engineers and drafters work with the latest AutoCAD software to create detailed 2D drawings and sophisticated 3D models. We understand industry standards and requirements, ensuring that every drawing meets specifications and regulations.

Whether you need architectural blueprints, mechanical part drawings, electrical schematics, or structural engineering plans, we have the expertise to deliver professional, accurate documentation. We can also convert legacy drawings to modern formats and maintain existing CAD libraries.`,
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
    features: [
      '2D Technical Drawings',
      '3D Modeling & Visualization',
      'Architectural Drawings',
      'Mechanical Engineering Design',
      'Electrical Schematics',
      'Structural Engineering',
      'Technical Documentation',
      'CAD Conversion & Updates'
    ],
    benefits: [
      'Precise and accurate technical drawings',
      '3D visualization for better understanding',
      'Industry-standard compliance',
      'Fast turnaround times',
      'Cost-effective engineering support',
      'Digital documentation for easy sharing'
    ],
    useCases: [
      'Architectural design and blueprints',
      'Mechanical part and assembly design',
      'Electrical system schematics',
      'Structural engineering plans',
      'Land development and site plans',
      'Technical documentation and revisions'
    ],
    technologies: ['AutoCAD', 'SolidWorks', 'Revit', 'Inventor', 'Fusion 360', '3ds Max', 'SketchUp', 'Civil 3D']
  }
];

