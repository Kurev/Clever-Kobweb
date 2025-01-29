import React from 'react'
import Navbar from './../Components/Home/Navbar/Navbar';
import ProjectPage from '../Components/Product/ProjectsPage/ProjectPage';
import Footer from '../Components/Home/Footer/Footer';


const ProductPage = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Ensures full height */}
        <Navbar />
        <ProjectPage />
        <Footer />
    </div>
  )
}

export default ProductPage