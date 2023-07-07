import React from 'react'
import logo from '../assets/logo.svg'
import { footerlinks } from '../constants'

const Footer = () => {
  return (
    <div className=' bg-[#031B34] p-2'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='gradient__text p-8 md:9-24 text-[33px] md:text-[62px] leading-10 items-center justify-center md:leading-relaxed'>Do you want to step in to the <br /> future before others</h1>

        <button className=' bg-transparent border border-[#ffff] p-5 text-white'>Request Early Access</button>
      </div>

      <div className=' flex flex-col md:flex-row gap-20  justify-center items-center md:gap-44 mt-10 md:mt-24 '>
        <div className=' justify-start'>
          <img src={logo} alt="logo" />
          <p className=' text-xs text-white mt-10'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className=' flex flex-col md:flex-row justify-between gap-5 md:gap-44  text-white'>
          {
            footerlinks.map((footerlink) => (
              <div key={footerlink.title}>
                 <h3 
              className=' font-semibold text-[20px]'
              >{footerlink.title}
              </h3>
              <ul className=' list-none gap-3 mt-3'>
              {
              footerlink.links.map((link) => (
                   <li
                   className=' cursor-pointer mb-3'
                   onClick={() => window.open(link.link)}
                   key={link.name}>
                      {link.name}
                   </li>   
               ))
                  }
              </ul>
              
              </div>
             
            ))
          }
        </div>
      </div>
      <p className=' text-white justify-center items-center text-center mt-10'>All Rights reserved</p>
    </div>
  )
}

export default Footer
