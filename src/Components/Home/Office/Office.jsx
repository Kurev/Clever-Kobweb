import React from 'react'

const Office = () => {
  return (
    // if the map is available change the hight to 100% or auto for better responsiveness
    <div className='w-full h-[20rem] bg-[#ffffff] flex  items-center flex-col px-[10%]'>
        <div className='mb-[3rem]'>
            <h1 className='text-center font-[300] text-gray-600 '>
            Explore our vibrant headquarters in Davao City, Philippines. Our dedicated team of real estate professionals is committed to turning your dreams into reality. From stylish condominiums to lucrative investments, we prioritize understanding your unique needs. Experience the Demo difference today and step into a brighter future with us.
            </h1>
        </div>
        <h1 className='p-10 bg-[#b5a371] rounded-md'>Map</h1>
    </div>
  )
}

export default Office