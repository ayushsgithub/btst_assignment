import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
        <div>
            <h1 className='text-7xl'>Ayush's Daily Blog's</h1>
            <h2 className='mt-5 md:mt-0'>Welcome to {" "} <span className='underline decoration-3 decoration-orange-400'>Every Developers</span>{" "} fav blog in hashnode</h2>
        </div>
        <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
            Software Development | The latest in tech | The weekly debugging nightmares & More!
        </p>
    </div>
  )
}

export default Banner