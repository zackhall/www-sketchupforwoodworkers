import React from 'react'
import Link from 'next/link'
import AuthButton from './AuthButton'

const Header: React.FC<{}> = () => (
  <>
    <header className='border-b border-gray-300 mb-4'>
      <div className='container px-4 mx-auto h-16 flex'>
        <div className='flex-1 flex justify-start'></div>
        <div className='flex-1 flex items-center'>
          <Link href='/'>
            <h1 className='text-xl md:text-2xl lg:text-3xl cursor-pointer'>
              <span className='uppercase'>Sketchup</span>&nbsp;
              <span className='italic'>for</span>&nbsp;
              <span className='uppercase'>Woodworkers</span>
            </h1>
          </Link>
        </div>
        <div className='flex-1 flex items-center justify-end'>
          <AuthButton />
        </div>
      </div>
    </header>
    <p className='center font-normal'>
      The internet's FREE leading online resource for learning Sketchup that is
      built and run by woodworkers for woodworkers.
    </p>
  </>
)

export default Header
