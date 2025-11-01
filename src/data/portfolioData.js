import { Globe, Smartphone, Network, Brain, Palette, Code } from 'lucide-react';

export const portfolioData = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    tagline: 'Next.js & React with AI recommendations',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    color: 'blue',
    icon: Globe,
    description: 'A comprehensive e-commerce platform built with modern technologies featuring AI-powered product recommendations, real-time inventory management, and seamless checkout experience.',
    fullDescription: `This e-commerce platform represents a complete digital shopping solution designed for scalability and performance. Built with Next.js and React, the platform features AI-driven product recommendations that personalize the shopping experience for each user.

The platform includes advanced features like real-time inventory tracking, multiple payment gateway integrations, and a robust admin dashboard for managing products, orders, and customers. The responsive design ensures optimal experience across all devices.

Key achievements include 300% increase in conversion rates, 50% reduction in cart abandonment, and 99.9% uptime. The platform handles over 10,000 daily active users and processes thousands of orders seamlessly.`,
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
    features: [
      'AI-powered product recommendations',
      'Real-time inventory management',
      'Multiple payment gateways',
      'Advanced search & filters',
      'User reviews & ratings',
      'Order tracking system',
      'Admin dashboard',
      'Mobile responsive design'
    ],
    results: [
      '300% increase in conversion rates',
      '50% reduction in cart abandonment',
      '99.9% uptime',
      '10,000+ daily active users'
    ],
    client: 'E-Commerce Startup',
    duration: '4 months',
    status: 'Live'
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking App',
    tagline: 'Secure fintech solution with biometrics',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    color: 'teal',
    icon: Smartphone,
    description: 'A secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.',
    fullDescription: `This mobile banking app provides a secure and intuitive platform for managing finances on the go. Built with React Native for cross-platform compatibility, the app features state-of-the-art security including biometric authentication (fingerprint and face ID).

The app includes features like real-time balance updates, transaction history, bill payments, money transfers, and investment tracking. Advanced encryption and security protocols ensure user data protection.

The app has achieved 4.8/5 rating on app stores, processed over $10M in transactions, and has 50,000+ active users with zero security breaches.`,
    technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB', 'Biometric API'],
    features: [
      'Biometric authentication',
      'Real-time transactions',
      'Bill payments',
      'Money transfers',
      'Investment tracking',
      'Transaction history',
      'Budget planner',
      'Push notifications'
    ],
    results: [
      '4.8/5 app store rating',
      '$10M+ transactions processed',
      '50,000+ active users',
      'Zero security breaches'
    ],
    client: 'Financial Institution',
    duration: '6 months',
    status: 'Live'
  },
  {
    id: 'network-dashboard',
    title: 'Network Monitoring Dashboard',
    tagline: 'Real-time infrastructure analytics',
    category: 'Networking',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    color: 'yellow',
    icon: Network,
    description: 'A comprehensive network monitoring solution providing real-time analytics, alerting, and infrastructure management for enterprise networks.',
    fullDescription: `This network monitoring dashboard provides complete visibility into network infrastructure with real-time analytics and intelligent alerting. Built to handle large-scale enterprise networks, the system monitors thousands of devices simultaneously.

The dashboard includes features like network topology visualization, bandwidth monitoring, device health tracking, automated alerts, and detailed reporting. Advanced machine learning algorithms predict potential network issues before they occur.

The solution has helped reduce network downtime by 80%, improved incident response time by 60%, and supports monitoring of 5000+ network devices across multiple locations.`,
    technologies: ['React', 'Python', 'Django', 'WebSocket', 'Grafana', 'PostgreSQL'],
    features: [
      'Real-time network monitoring',
      'Network topology visualization',
      'Bandwidth analytics',
      'Automated alerting',
      'Device health tracking',
      'Custom reporting',
      'Multi-location support',
      'API integrations'
    ],
    results: [
      '80% reduction in downtime',
      '60% faster incident response',
      '5000+ devices monitored',
      '99.5% accuracy in predictions'
    ],
    client: 'Enterprise Corporation',
    duration: '5 months',
    status: 'Live'
  },
  {
    id: 'ai-chatbot',
    title: 'AI Customer Support Bot',
    tagline: 'NLP-powered intelligent assistance',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    color: 'blue',
    icon: Brain,
    description: 'An intelligent AI-powered chatbot using natural language processing to provide 24/7 customer support with human-like conversation capabilities.',
    fullDescription: `This AI chatbot leverages advanced natural language processing and machine learning to provide intelligent, context-aware customer support. The bot understands user intent, maintains conversation context, and provides accurate responses across multiple channels.

Integrated with existing CRM systems, the chatbot handles common queries, ticket creation, order tracking, and product recommendations. It continuously learns from interactions to improve response accuracy.

The chatbot has achieved 85% query resolution rate, reduced support tickets by 40%, and provides 24/7 customer support across multiple languages, resulting in $200K annual cost savings.`,
    technologies: ['Python', 'TensorFlow', 'NLP', 'React', 'FastAPI', 'PostgreSQL'],
    features: [
      'Natural language understanding',
      'Multi-channel support',
      'Context awareness',
      'Ticket creation',
      'Order tracking',
      'Multi-language support',
      'CRM integration',
      'Analytics dashboard'
    ],
    results: [
      '85% query resolution rate',
      '40% reduction in support tickets',
      '24/7 availability',
      '$200K annual savings'
    ],
    client: 'E-Commerce Company',
    duration: '3 months',
    status: 'Live'
  },
  {
    id: 'design-system',
    title: 'Corporate Design System',
    tagline: 'Scalable UI component library',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    color: 'teal',
    icon: Palette,
    description: 'A comprehensive design system with reusable components, design tokens, and documentation for consistent UI across all digital products.',
    fullDescription: `This corporate design system provides a complete library of reusable components, design tokens, and guidelines ensuring visual consistency across all digital touchpoints. The system includes comprehensive documentation, code examples, and best practices.

Built with Figma for design and React for implementation, the design system covers components like buttons, forms, navigation, data visualization, and more. Each component is fully accessible and responsive.

The design system has reduced design time by 50%, improved consistency by 90%, and is now used across 20+ products and applications within the organization.`,
    technologies: ['Figma', 'React', 'Storybook', 'TypeScript', 'CSS-in-JS'],
    features: [
      '200+ reusable components',
      'Design tokens',
      'Accessibility compliance',
      'Responsive design',
      'Dark mode support',
      'Comprehensive documentation',
      'Code examples',
      'Version control'
    ],
    results: [
      '50% reduction in design time',
      '90% consistency improvement',
      '20+ products using system',
      'Accessibility WCAG 2.1 AA'
    ],
    client: 'Tech Corporation',
    duration: '4 months',
    status: 'Live'
  },
  {
    id: 'saas-platform',
    title: 'SaaS Analytics Platform',
    tagline: 'Data visualization & insights',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    color: 'yellow',
    icon: Code,
    description: 'A comprehensive SaaS platform for business analytics with advanced data visualization, custom dashboards, and real-time reporting capabilities.',
    fullDescription: `This SaaS analytics platform empowers businesses to make data-driven decisions through advanced analytics and visualization. The platform supports multiple data sources, custom dashboard creation, and automated reporting.

Built with modern technologies for scalability, the platform can handle millions of data points, provides real-time updates, and offers advanced features like predictive analytics and custom alerting.

The platform has 500+ active clients, processes 1M+ data points daily, and provides insights that have helped clients increase revenue by an average of 25% through better decision-making.`,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'D3.js', 'Chart.js', 'AWS'],
    features: [
      'Custom dashboards',
      'Real-time data updates',
      'Advanced visualizations',
      'Predictive analytics',
      'Automated reporting',
      'Data export',
      'Multi-user collaboration',
      'API access'
    ],
    results: [
      '500+ active clients',
      '1M+ data points daily',
      '25% average revenue increase',
      '95% customer satisfaction'
    ],
    client: 'Analytics Startup',
    duration: '6 months',
    status: 'Live'
  },
  {
    id: 'iot-dashboard',
    title: 'IoT Monitoring System',
    tagline: 'Smart device management platform',
    category: 'Networking',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    color: 'blue',
    icon: Network,
    description: 'An IoT platform for managing and monitoring connected devices with real-time data collection, remote control, and predictive maintenance.',
    fullDescription: `This IoT monitoring system provides comprehensive management for connected devices across various industries. The platform collects real-time data from thousands of sensors, provides remote device control, and uses machine learning for predictive maintenance.

The system includes features like device onboarding, remote firmware updates, anomaly detection, and energy consumption tracking. Advanced analytics help optimize device performance and reduce maintenance costs.

The platform manages 10,000+ IoT devices, has reduced maintenance costs by 35%, and improved device uptime to 99.7%, making it a critical infrastructure component for smart city initiatives.`,
    technologies: ['React', 'Python', 'MQTT', 'InfluxDB', 'Grafana', 'Docker'],
    features: [
      'Device management',
      'Real-time monitoring',
      'Remote control',
      'Firmware updates',
      'Predictive maintenance',
      'Anomaly detection',
      'Energy tracking',
      'Custom alerts'
    ],
    results: [
      '10,000+ devices managed',
      '35% maintenance cost reduction',
      '99.7% device uptime',
      'Real-time data processing'
    ],
    client: 'Smart City Initiative',
    duration: '8 months',
    status: 'Live'
  },
  {
    id: 'mobile-fitness',
    title: 'Fitness Tracking App',
    tagline: 'Health metrics with AI insights',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    color: 'teal',
    icon: Smartphone,
    description: 'A comprehensive fitness tracking mobile app with AI-powered insights, workout plans, nutrition tracking, and social features.',
    fullDescription: `This fitness tracking app combines traditional activity tracking with AI-powered insights to help users achieve their health goals. The app tracks steps, calories, workouts, sleep, and provides personalized recommendations.

Features include workout plans created by certified trainers, nutrition tracking with barcode scanning, social challenges, progress visualization, and integration with popular fitness wearables.

The app has 100,000+ downloads, maintains a 4.7/5 rating, and users have collectively logged over 50 million activities. The AI insights have helped users achieve 30% better results compared to standard tracking apps.`,
    technologies: ['React Native', 'Firebase', 'Machine Learning', 'HealthKit', 'Fitbit API'],
    features: [
      'Activity tracking',
      'AI workout plans',
      'Nutrition tracking',
      'Sleep monitoring',
      'Social challenges',
      'Progress analytics',
      'Wearable integration',
      'Personalized insights'
    ],
    results: [
      '100,000+ downloads',
      '4.7/5 app rating',
      '50M+ activities logged',
      '30% better user results'
    ],
    client: 'Health & Fitness Company',
    duration: '5 months',
    status: 'Live'
  }
];

