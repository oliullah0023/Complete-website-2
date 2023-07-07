import React from 'react'
import possibility from '../assets/possibility.png'

const Possibility = () => {
  return (
    <div id='open' className='flex flex-col md:flex-row p-10 md:p-24  w-full object-contain '>
       <img className='w-[800px] h-[700px]' src={possibility} alt="possibility" />

       <div className='flex-1 flex flex-col justify-center object-contain '>
        <p className=' font-medium text-[16px] text-[#71E5FF] leading-7 mt-9'>Request Early Access to Get Started</p>
        <h1 className=' gradient__text font-extrabold text-[34px] leading-10 mt-5'>The possibilities are beyond your imagination</h1>
        <p className=' font-normal text-[16px] leading-9 text-[#81AFDD] mt-5'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <p className=' font-normal text-[#FF8A71]  text-base'>Request Early Access to Get Started</p>
       </div>
    </div>
  )
}

export default Possibility
