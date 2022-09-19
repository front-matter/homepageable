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
              <Link href='https://github.com/inveniosoftware/invenio-app-rdm' passHref>
                <a
                  href='dummy'
                  className='ml-9 text-xl leading-6 font-bold font-sans text-green-600 border-b-0'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  InvenioRDM
                </a>
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
              <Link href='https://github.com/TryGhost/Ghost' passHref>
                <a
                  href='dummy'
                  className='ml-9 text-xl leading-6 font-bold font-sans text-green-600 border-b-0'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Ghost
                </a>
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
              <Link href='https://github.com/vercel/next.js/' passHref>
                <a
                  href='dummy'
                  className='ml-9 text-xl leading-6 font-bold font-sans text-green-600 border-b-0'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Next.js
                </a>
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
              <Link href='https://github.com/jgm/pandoc' passHref>
                <a
                  href='dummy'
                  className='ml-9 text-xl leading-6 font-bold font-sans text-green-600 border-b-0'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Pandoc
                </a>
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
              <Link
                href='https://github.com/citation-style-language/styles'
                passHref
              >
                <a
                  href='dummy'
                  className='ml-9 text-xl leading-6 font-bold font-sans text-green-600 border-b-0'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  CSL
                </a>
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
              <Link href='https://github.com/plausible/hosting' passHref>
                <a
                  href='dummy'
                  className='ml-9 text-xl leading-6 font-bold font-sans text-green-600 border-b-0'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Plausible
                </a>
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
            Front Matter has released thr following open source software:
          </p>
        </div>
        <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8'>
          <div className='relative'>
            <dt>
              <Link href='https://github.com/front-matter/briard' passHref>
                <a
                  href='dummy'
                  className='ml-9 text-xl leading-6 font-bold font-sans text-green-600 border-b-0'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Briard
                </a>
              </Link>
            </dt>
            <dd className='mt-0 ml-9 text-base text-gray-500'>
              Ruby gem and command-line utility for conversion of DOI metadata from 
              and to different metadata formats, including schema.org. 
              <p className='mt-2 text-sm font-sans'>
                Original author Martin Fenner
              </p>
            </dd>
          </div>

          <div className='relative'>
            <dt>
              <Link href='https://github.com/front-matter/schlagzeile' passHref>
                <a
                  href='dummy'
                  className='ml-9 text-xl leading-6 font-bold font-sans text-green-600 border-b-0'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Schlagzeile
                </a>
              </Link>
            </dt>
            <dd className='mt-0 ml-9 text-base text-gray-500'>
              Schlagzeile is a Ghost theme forked from the official theme Headline, with
              improved display of metadata such as the canonical URL and license.
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
