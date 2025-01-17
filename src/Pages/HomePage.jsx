import { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'

function HomePage() {

  return (
    <>
    <div >
      <Navbar />
      <Hero/>
      <About/>
    </div>
      
    </>
  )
}

export default HomePage
