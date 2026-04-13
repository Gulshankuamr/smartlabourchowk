'use client'

import { useEffect } from 'react'
import FeatureSectionn from '../../components/features/FeatureSectionn'
import CTASection from '../../components/home/CTASection'
import FeatureHeroSection from '../../components/features/FeatureHeroSection'
import WhyConnectSkool from '../../components/features/WhyConnectskool'
import RoleBasedPortal from '../../components/features/Rolebasedportal'
import BenefitsSection from '../../components/features/BenifitFeature'


function Features() {
  useEffect(() => {
    document.title = 'ConnectSkool | Complete School ERP Software'
  }, [])

  return (
    <>
      <FeatureHeroSection/>
       <WhyConnectSkool/>
       <RoleBasedPortal/>
       <BenefitsSection/>
      <FeatureSectionn/>
     
     
      
      <CTASection />
    </>
  )
}

export default Features