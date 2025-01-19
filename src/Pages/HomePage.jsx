import { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Titles from '../Components/Titles/Titles'
import OurServices from '../Components/OurServices/OurServices'
import LatestProject from '../Components/LatestProject/LatestProject'
import Contact from './../Components/Contact/Contact';

function HomePage() {

  return (
    <>
    <div >
      <Navbar />
      <Hero/>
      <About/>
      <Titles title='Our Services'/>
      <OurServices />
      <Titles title='Lastest Project'/>
      <LatestProject />
      <Titles title='Contact Us' backGroundColor='bg-[#ffff]'/>
      <Contact />
      <Titles title='Our Office' />
    </div>
      
    </>
  )
}

export default HomePage
