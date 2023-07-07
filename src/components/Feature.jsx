import React from 'react'

const Feature = ({title, text}) => {
  return (
    <div className=''>
      <div>
       <div className='w-[38px] h-[3px] bg-yellow-600' />
       <h1 className=' text-white text-[20px] font-semibold mr-7 sm:mr-16'>{title}</h1>
     </div>
     <div>
      <p className=' font-normal tent-[16px] leading-8 text-[#81AFDD]'>{text}</p>
     </div>
    </div>
  )
}

export default Feature
