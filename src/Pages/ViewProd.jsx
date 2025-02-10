import React from 'react'
import Navbar from './../Components/Home/Navbar/Navbar';
import ViewProject from '../Components/Product/ViewProject/ViewProject';
import Footer from '../Components/Home/Footer/Footer';

const ViewProd = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Ensures full height */}
        <Navbar />
        <ViewProject />
        <Footer />
    </div>
  )
}

export default ViewProd