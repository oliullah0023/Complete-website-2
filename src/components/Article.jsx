import React from 'react'

const Article = ({imgURL, date, title}) => {
  return (
    <div className=' bg-[#042C54] '>
      <div>
        <img src={imgURL} alt="Blog-image" />
      </div>
      <div className=' m-4'>
        <div>
        <p className=' text-white font-normal text-base'>{date}</p>
        <h3 className='text-white font-bold text-2xl'>{title}</h3>
        </div>
        <p className=' cursor-pointer text-white font-normal mt-10 text-base'>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
