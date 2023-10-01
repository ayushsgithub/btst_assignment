import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
        <div>
            <h1 className='text-7xl'>Wall Street Blogs</h1>
            <h2 className='mt-5 md:mt-3'>Welcome to {" "} <span className='underline decoration-3 decoration-orange-400'>Every Developers</span>{" "} fav blog in hashnode</h2>
        </div>
        <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
            Street Journal | The latest in market | The weekly stock nightmares & more!
        </p>
    </div>
  )
}

export default Banner