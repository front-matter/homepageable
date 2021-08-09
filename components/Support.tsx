import React from 'react'

export default function Support() {
  return (
    <>
      <div className='bg-white'>
        <div className='container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 font-sans'>
          <div className='sm:flex sm:flex-col sm:align-center'>
            <h1 className='text-5xl font-extrabold text-green-600 sm:text-center'>
              Support Front Matter
            </h1>
            <p className='mt-5 text-xl text-gray-500 sm:text-center'>
              Support the Front Matter Blog by a one-time donation or regular
              membership via{' '}
              <img
                className='inline'
                src='https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg'
                alt='Buy me a coffee'
              />{' '}
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.buymeacoffee.com/frontmatter'
              >
                Buy me a coffee
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
