import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-6'>
        <div className='flex items-center space-x-2'>
            <Link href="/">
                <Image className='rounded-full'
                src={"/572.png"}
                width={50}
                height={50}
                alt='logo'
                />
            </Link>
            <h1>hashnode Blogs</h1>
        </div>

        <div>
            <Link
            target='_blank'
            href={"https://ayushisreal.hashnode.dev/newsletter"}
            className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center'>
                Subscribe to my newsletter
            </Link>
        </div>
    </header>
  )
}

export default Header