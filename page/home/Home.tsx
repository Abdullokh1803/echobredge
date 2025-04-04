'use client'
import React, { useEffect } from 'react'
import Hero from './../../components/hero/hero';
import HowItWorks from '@/components/howItWorks/how_it_works';
import Advantages from './../../components/advantages/advantages';
import WhoItsFor from './../../components/whoItsFor/who_its_for';
import Testimonials from './../../components/testimonials/testimonials';
import Price from './../../components/price/price';
import Footer from './../../components/footer/footer';
import CallToAction from './../../components/cta/call_to_action';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import('aos')
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom'
      })
    }
    initAOS()
  }, [])

  return (
    <div className='overflow-hidden'>
      <Hero id='home' />
      <HowItWorks id='how-it-works' />
      <Advantages id='features' />
      <WhoItsFor id='who-its-for' />
      <Testimonials id='testimonials' />
      <Price id='pricing' />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home