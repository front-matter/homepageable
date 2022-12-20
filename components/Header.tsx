import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(props) {
  return (
    <>
      <nav className='bg-white'>
        <div className='container flex flex-auto items-center justify-between font-sans'>
          <div className='flex justify-between h-16'>
            <div className='flex mx-2 px-2 lg:px-0'>
              <div className='flex-shrink-0 flex items-center'>
                <Link href='/' className='text-lg text-green-600 pl-6 space-x-2 border-b-0 flex items-center'>
                  <Image src='/images/logo.svg' alt='Front Matter' width={228} height={36} layout="responsive" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
