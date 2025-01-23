import { useState } from 'react'
import Hero from '../Components/Home/Hero/Hero'
import About from '../Components/Home/About/About'
import Titles from '../Components/Home/Titles/Titles'
import OurServices from '../Components/Home/OurServices/OurServices'
import LatestProject from '../Components/Home/LatestProject/LatestProject'
import Contact from './../Components/Home/Contact/Contact';
import Office from '../Components/Home/Office/Office'
import Footer from '../Components/Home/Footer/Footer'
import Navbar from '../Components/Home/Navbar/Navbar'

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
      <Titles title='Our Office' backGroundColor='bg-[#ffff]'/>
      <Office />
      <Footer />
    </div>
      
    </>
  )
}

export default HomePage
