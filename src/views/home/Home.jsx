'use client'

import { useEffect } from 'react'
import HeroSection from '../../components/home/HeroSection'
import TrustedSection from '../../components/home/TrustedSection'
import ProblemSolutionSection from '../../components/home/ProblemSolutionSection'
import FeaturesSection from '../../components/home/FeaturesSection'
import ModulesSection from '../../components/home/ModulesSection'
import DashboardSection from '../../components/home/DashboardSection'
import ScreenshotsSection from '../../components/home/ScreenshotsSection'
import BenefitsSection from '../../components/home/BenefitsSection'
import TestimonialsSection from '../../components/home/TestimonialsSection'
import PricingSection from '../../components/home/PricingSection'
import CTASection from '../../components/home/CTASection'


function Home() {
  useEffect(() => {
    document.title = 'ConnectSkool | Complete School ERP Software'
  }, [])

  return (
    <>
      <HeroSection />
     
      <TrustedSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <ModulesSection />
      <DashboardSection />
      {/* <ScreenshotsSection /> */}
      <BenefitsSection />
      <TestimonialsSection />
      {/* <PricingSection /> */}
      <CTASection />
    </>
  )
}

export default Home
