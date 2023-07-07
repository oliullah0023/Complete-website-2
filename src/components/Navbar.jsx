import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='section__padding'>
     <div className=' md:flex hidden justify-between items-center'>
      <img src={logo} alt="logo" />

      
         <p className=' text-white text-[18px] '>
          <a className=' mr-3' href="#home">Home</a>
          <a className=' mr-3' href="#whatgpt">WhatGPT3?</a>
          <a className=' mr-3' href="#open">Open AI</a>
          <a className=' mr-3' href="#case">Case Studies</a>
          <a className=' mr-3' href="#library">Library</a>
          </p>

          <div className=' flex gap-3 cursor-pointer'>
            <p className=' text-white text-[18px] p-3'>Sign In</p>
            <button className=' text-white p-2 bg-red-700 rounded-lg '>Signup</button>
          </div>
     </div>

     <div className=' flex justify-end md:hidden cursor-pointer'>
      {
        toggle ?
        <RiCloseLine className=' text-white text-[40px]' 
        onClick={()=> setToggle(false)}/> 
        : <RiMenu3Line className=' text-white text-[40px]'
        onClick={() => setToggle(true)}/>
       
      }
       {
          toggle && (

            <div className=' flex flex-col md:hidden mt-12 bg-amber-950 p-3 scale-up-center rounded-lg gap-5 '>
              <div>
                     <p className=' text-white text-[18px]  gap-4 flex flex-col  '>
         <a className=' mr-3' href="#home">Home</a>
         <a className=' mr-3' href="#whatgpt">WhatGPT3?</a>
         <a className=' mr-3' href="#open">Open AI</a>
         <a className=' mr-3' href="#case">Case Studies</a>
         <a className=' mr-3' href="#library">Library</a>
         </p>
         </div>
         <div>
         <p className=' text-white text-[18px] p-1'>Sign In</p>
            <button className=' text-white p-2 bg-red-700 rounded-lg '>Signup</button>
         </div>
         

         </div>

         

          )
        }
       </div>
    </nav>
  )
}

export default Navbar
