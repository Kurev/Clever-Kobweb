import { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Titles from '../Components/Titles/Titles'
import OurServices from '../Components/OurServices/OurServices'

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
    </div>
      
    </>
  )
}

export default HomePage
