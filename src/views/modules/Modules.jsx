'use client'

import { useEffect } from 'react'

import CTASection from '../../components/home/CTASection'

import ConnectSkoolModules from '../../components/modules/ConnectSkoolModules'
import ModulesHero from '../../components/modules/ModulesHero'



function Features() {
  useEffect(() => {
    document.title = 'ConnectSkool | Complete School ERP Software'
  }, [])

  return (
    <>
      
      <ModulesHero/>
      <ConnectSkoolModules/>

      
    
     
      
      <CTASection />
    </>
  )
}

export default Features