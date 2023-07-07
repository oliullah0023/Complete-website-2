import React from 'react'
import people from '../assets/people.png'
import ai from '../assets/ai.png'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row  object-contain justify-between m-5  md:mx-16 '>
      <div className=' flex-1 flex flex-col'>
        <h1 className='gradient__text text-[40px] md:text-[62px] md:leading-[75px]  font-bold md:font-extrabold object-contain'>Let’s Build Something
          amazing with GPT-3
          OpenAI
        </h1>
        <p className=' font-normal text-[20px] text-[#81AFDD] leading-[27.32px] pt-5'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className=' pt-7'>
          <input type="email"
          placeholder='Your Email Address'
          className='bg-[#052D56] text-[#3D6184] p-4 text-[20px]'
          />
          <button className=' bg-red-700 p-4 text-white text-[20px] rounded-tr-lg rounded-br-lg'>Get Started</button>
        </div>

        <div className=' flex gap-2 mt-7'>
        <img className=' w-[181.79px] h-[39.61px]' src={people} alt="people" />
        <p className=' text-white '>1,600 people requested access a visit in last 24 hours</p>
        </div>
    
      </div>
      <div className=' flex-1'>
          <img className='h-[600px]' src={ai} alt="ai" />
         </div>

    </div>
  )
}

export default Header
