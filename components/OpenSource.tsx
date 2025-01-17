import React from 'react'
import Link from 'next/link'

export default function OpenSource() {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-extrabold text-green-600'>
            Open source software
          </h2>
          <p className='mt-4 text-lg text-gray-500'>
            Front Matter is built with open source software, including the
            following key components:
          </p>
        </div>
        <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8'>
          <div className='relative'>
            <dt>
              <Link href='https://github.com/inveniosoftware/invenio-app-rdm'
                className='ml-9 text-xl leading-6 font-bold font-sans text-green-600 border-b-0'
                target='_blank'
                rel='noopener noreferrer'
              >
                InvenioRDM
              </Link>
            </dt>
            <dd className='mt-0 ml-9 text-base text-gray-500'>
              The turn-key research data management platform built on Invenio.
              <p className='mt-2 text-sm font-sans'>
                Original author Lars Holm Nielsen
              </p>
            </dd>
          </div>

          <div className='relative'>
            <dt>
              <Link href='https://github.com/TryGhost/Ghost' 
                className='ml-9 text-xl leading-6 font-bold font-sans text-green-600 border-b-0'
                target='_blank'
                rel='noopener noreferrer'
              >
                Ghost
              </Link>
            </dt>
            <dd className='mt-0 ml-9 text-base text-gray-500'>
              Ghost is a blogging platform, designed to simplify the process of
              online publishing.
              <p className='mt-2 text-sm font-sans'>
                Original authors John O&apos;Nolan, Hannah Wolfe
              </p>
            </dd>
          </div>


          <div className='relative'>
            <dt>
              <Link href='https://github.com/vercel/next.js/'
                className='ml-9 text-xl leading-6 font-bold font-sans text-green-600 border-b-0'
                target='_blank'
                rel='noopener noreferrer'
              >
                Next.js
              </Link>
            </dt>
            <dd className='mt-0 ml-9 text-base text-gray-500'>
              A front-end development web framework that enables server-side
              rendering and generating static websites.
              <p className='mt-2 text-sm font-sans'>
                Original author Guillermo Rauch
              </p>
            </dd>
          </div>

          <div className='relative'>
            <dt>
              <Link href='https://github.com/jgm/pandoc'
                className='ml-9 text-xl leading-6 font-bold font-sans text-green-600 border-b-0'
                target='_blank'
                rel='noopener noreferrer'
              >
                Pandoc
              </Link>
            </dt>
            <dd className='mt-0 ml-9 text-base text-gray-500'>
              The universal markup converter is a library for converting from
              one markup format to another.
              <p className='mt-2 text-sm font-sans'>
                Original author John MacFarlane
              </p>
            </dd>
          </div>

          <div className='relative'>
            <dt>
              <Link href='https://github.com/citation-style-language/styles'
                className='ml-9 text-xl leading-6 font-bold font-sans text-green-600 border-b-0'
                target='_blank'
                rel='noopener noreferrer'
              >
                CSL
              </Link>
            </dt>
            <dd className='mt-0 ml-9 text-base text-gray-500'>
              Citation Style Language (CSL) automates the formatting of
              citations and bibliographies.
              <p className='mt-2 text-sm font-sans'>
                Original authors Bruce D&apos;Arcus, Frank Bennett, Rintze Zelle
              </p>
            </dd>
          </div>

          <div className='relative'>
            <dt>
              <Link href='https://github.com/plausible/hosting'
                className='ml-9 text-xl leading-6 font-bold font-sans text-green-600 border-b-0'
                target='_blank'
                rel='noopener noreferrer'
              >
                Plausible
              </Link>
            </dt>
            <dd className='mt-0 ml-9 text-base text-gray-500'>
              Plausible provides all website traffic metrics at a glance in a
              simple and modern web analytics dashboard.
              <p className='mt-2 text-sm font-sans'>
                Original authors Marko Saric, Uku Täht
              </p>
            </dd>
          </div>
        </dl>
        <div className='max-w-3xl mx-auto text-center'>
          <p className='mt-4 text-lg text-gray-500'>
            Front Matter has released the following open source software:
          </p>
        </div>
        <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8'>
          <div className='relative'>
            <dt>
              <Link href='https://github.com/front-matter/commonmeta'
                className='ml-9 text-xl leading-6 font-bold font-sans text-green-600 border-b-0'
                target='_blank'
                rel='noopener noreferrer'
              >
                Commonmeta
              </Link>
            </dt>
            <dd className='mt-0 ml-9 text-base text-gray-500'>
              Go package and command-line utility for the conversion of scholarly metadata into 
              different metadata formats, including Crossref, DataCite, and schema.org.
              <p className='mt-2 text-sm font-sans'>
                Original author Martin Fenner
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
