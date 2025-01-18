import React from 'react'

const Titles = ({ title }) => {
  return (
    <div className='w-full flex justify-center items-center pb-4 bg-[#f7f7f7]'>
        <h1 className='text-[3rem] text-[#6a5f39] font-semibold'>{title}</h1>
    </div>
  )
}

export default Titles