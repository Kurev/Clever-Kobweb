import React from 'react'

const Titles = ({ title, backGroundColor }) => {
  return (
    <div className={`w-full flex justify-center items-center pb-4 ${ backGroundColor || 'bg-[#f7f7f7]'}`}>
        <h1 className='text-[2.5rem] text-[#6a5f39] font-[400] uppercase'>{title}</h1>
    </div>
  )
}

export default Titles