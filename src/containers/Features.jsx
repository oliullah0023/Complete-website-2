import React from 'react'
import { Feature } from '../components'

const Features = () => {
  return (
    <div className='flex md:flex-row flex-col m-8 md:m-24'>
       <div className='flex flex-col font-semibold text-[36px] gap-8 md:text-[46px] my-10'>
       <h1 className='gradient__text'>The possibilities are beyond your imagination</h1> 
       <p className='gradient__text font-normal text-lg mt-7'>Explore The Library</p>
      </div>

      <div>
        
      <div className=' flex-1 flex  flex-col md:justify-between gap-5'>
      <div className=' flex flex-row gap-4 md:gap-16'>
       <Feature title='Chatbot' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' />
      </div>
      <div className=' flex flex-row gap-4 md:gap-16'>
       <Feature title='Knowledge' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' />
      </div>
      <div className=' flex flex-col gap-4 md:gap-16'>
       <Feature  title='Education' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' />
      </div>
      </div>
      </div>

    </div>
  )
}

export default Features
