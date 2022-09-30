import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {
  return (
    <>
      <nav className='bg-white'>
        <div className='container flex flex-auto items-center justify-between font-sans'>
          <div className='flex justify-between h-16'>
            <div className='flex mx-2 px-2 lg:px-0'>
              <div className='flex-shrink-0 flex items-center'>
                <Link href='/' passHref>
                  <a href='dummy' className='text-lg text-green-600 pl-6 space-x-2 border-b-0 flex items-center'>
                    <FontAwesomeIcon icon={faArchive} />
                    <span className='font-semibold'>
                      Front Matter
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
