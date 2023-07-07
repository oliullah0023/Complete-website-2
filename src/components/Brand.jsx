import React from 'react'
import google from '../assets/google.png'
import atlassian from '../assets/atlassian.png'
import dropbox from '../assets/dropbox.png'
import shopify from '../assets/shopify.png'
import slack from '../assets/slack.png'


const Brand = () => {
  return (
    <div className='flex m-6 sm:m-24 justify-center items-center gap-4 sm:gap-10'>
    
     <img className='gap-2 w-[80px] h-[60px]' src={google} alt="google" />
     <img className='gap-2 w-[80px] h-[60px]' src={atlassian} alt="atlassian" />
     <img className='gap-2 w-[80px] h-[60px]' src={dropbox} alt="dropbox" />
     <img className='gap-2 w-[80px] h-[60px]' src={shopify} alt="shopify" />
     <img className='gap-2 w-[80px] h-[60px]' src={slack} alt="slack" />
  
    </div>
  )
}

export default Brand
