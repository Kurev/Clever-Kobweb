import React from 'react'
import sample1 from "../../../assets/beach.png";

const Gallery = () => {
  return (
    <div className='px-[10%]'>
        <div className='border-b border-[#1b191964]'>
            <img className='w-[25rem] rounded-sm object-contain mb-10' src={sample1} alt="" />
        </div>
        
    </div>
  )
}

export default Gallery