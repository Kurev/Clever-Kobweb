import React from 'react'
import Navbar from '../Components/Home/Navbar/Navbar'
import Property from '../Components/Product/Property/Property'
import Footer from '../Components/Home/Footer/Footer';
import Titles from '../Components/Home/Titles/Titles';
import Amenities from '../Components/Product/Amenities/Amenities';
import '../index.css';

const PropertyPage = () => {
  return (
    <div>
        <Navbar />
        <Property />
        {/* <Titles title="Amenities" />
        <Amenities />
        <Footer /> */}
    </div>
  )
}

export default PropertyPage