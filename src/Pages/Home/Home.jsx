import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutUs'
import ServicesSection from './OurService'
import PortfolioSection from './PortfolioSection'
import FeaturesSection from './FeaturesSection'
import TestimonialsSection from './TestimonialsSection'
import CTASection from './CTASection'
import ContactSection from './ContactSection'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <AboutSection/>
        <ServicesSection/>
        <PortfolioSection/>
        <FeaturesSection/>
        <TestimonialsSection/>
        <ContactSection/>
    </div>
  )
}

export default Home