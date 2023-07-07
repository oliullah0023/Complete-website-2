import React from 'react'
import { Article } from '../components'
import blog1 from '../assets/blog01.png'
import blog2 from '../assets/blog02.png'
import blog3 from '../assets/blog03.png'
import blog4 from '../assets/blog04.png'
import blog5 from '../assets/blog05.png'

const Blog = () => {
  return (
    <div id='library' className=' m-8 md:m-24'>
      <div className="">
      <h1 className="gradient__text font-extrabold text-4xl">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className=' flex flex-col md:flex-row justify-between gap-5 mt-8'>
    <div className=' mt-4  '>
      <Article imgURL={blog1} date='july 06, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
    </div>

      <div className=' grid grid-cols-2 gap-4 mt-4 '>
    <Article imgURL={blog2} date='july 06, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
    <Article imgURL={blog3} date='july 06, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
    <Article imgURL={blog4} date='july 06, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
    <Article imgURL={blog5} date='july 06, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
      </div>
     </div>
    </div>
  )
}

export default Blog
