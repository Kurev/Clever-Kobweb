import React from 'react'
import Navbar from '../Components/Home/Navbar/Navbar'
import Property from '../Components/Product/Property/Property'
import Footer from '../Components/Home/Footer/Footer';
import Titles from '../Components/Home/Titles/Titles';
import Amenities from '../Components/Product/Amenities/Amenities';
import '../index.css';
import Gallery from '../Components/Product/Gallery/Gallery';
import Office from '../Components/Home/Office/Office';
import Contact from './../Components/Home/Contact/Contact';

const PropertyPage = () => {
  return (
    <div>
        <Navbar />
        <Property />
        <Titles title="Amenities" backGroundColor='bg-[#ffff]'/>
        <Amenities />
        <Titles title="Gallery" backGroundColor='bg-[#ffff]'/>
        <Gallery />
        <Titles title="Location" backGroundColor='bg-[#ffff]'/>
        <Office />
        <Titles title="INquire now" backGroundColor='bg-[#ffff]'/>
        <Contact />
        <Footer />
    </div>
  )
}

export default PropertyPage