import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartLine,
  faClipboard,
  faCloud,
  faServer,
  faSearch,
  faDatabase
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import inveniordm from '../public/img/inveniordm.png'
import cloud from '../public/img/cloud.png'

export default function Features() {
  return (
    <>
      <div className='py-12 bg-gray-50 overflow-hidden'>
        <div className='container relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl'>
          <svg
            className='hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4'
            width='404'
            height='784'
            fill='none'
            viewBox='0 0 404 784'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='b1e6e422-73f8-40a6-b5d9-c8586e37e0e7'
                x='0'
                y='0'
                width='20'
                height='20'
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x='0'
                  y='0'
                  width='4'
                  height='4'
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width='404'
              height='784'
              fill='url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)'
            />
          </svg>

          <div className='relative'>
            <h2 className='text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Introducing Front Matter
            </h2>
            <p className='mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500'>
              Front Matter offers software development and hosting for the
              scholarly community.
            </p>
          </div>

          <svg
            className='hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12'
            width='404'
            height='784'
            fill='none'
            viewBox='0 0 404 784'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                x='0'
                y='0'
                width='20'
                height='20'
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x='0'
                  y='0'
                  width='4'
                  height='4'
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width='404'
              height='784'
              fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
            />
          </svg>

          <div className='relative mt-12 sm:mt-16 lg:mt-24'>
            <div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center'>
              <div className='lg:col-start-2'>
                <h3
                  id='software_development'
                  className='text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl'
                >
                  Software Development
                </h3>
                <p className='mt-3 text-lg text-gray-500'>
                  Front Matter offers software development contract work with a
                  focus on{' '}
                  <a
                    href='https://inveniosoftware.org/products/rdm/'
                    target='_blank'
                    className='text-green-600 font-bold'
                    rel='noopener noreferrer'
                  >
                    invenioRDM
                  </a>
                  , research data management, persistent identifiers, and
                  metadata.
                </p>

                <dl className='mt-10 space-y-10'>
                  <div className='relative'>
                    <dt>
                      <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white'>
                        <FontAwesomeIcon icon={faDatabase} />
                      </div>
                      <p className='mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans'>
                        Custom Metadata
                      </p>
                    </dt>
                    <dd className='mt-1 ml-16 text-base text-gray-500'>
                      Help with adding support for domain-specific metadata, and
                      mapping to other metadata standards.
                    </dd>
                  </div>

                  <div className='relative'>
                    <dt>
                      <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white'>
                        <FontAwesomeIcon icon={faChartLine} />
                      </div>
                      <p className='mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans'>
                        Usage Stats and Citations{' '}
                      </p>
                    </dt>
                    <dd className='mt-1 ml-16 text-base text-gray-500'>
                      Help with tracking and showing citations and usage stats
                      for datasets and other scholarly content.
                    </dd>
                  </div>

                  <div className='relative'>
                    <dt>
                      <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white'>
                        <FontAwesomeIcon icon={faSearch} />
                      </div>
                      <p className='mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans'>
                        Schema.org
                      </p>
                    </dt>
                    <dd className='mt-1 ml-16 text-base text-gray-500'>
                      Help with exposing metadata in landing pages via
                      schema.org.
                    </dd>
                  </div>
                </dl>
              </div>

              <div className='mt-10 -mx-4 relative lg:mt-0 lg:col-start-1'>
                <svg
                  className='absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden'
                  width='784'
                  height='404'
                  fill='none'
                  viewBox='0 0 784 404'
                  aria-hidden='true'
                >
                  <defs>
                    <pattern
                      id='e80155a9-dfde-425a-b5ea-1f6fadd20131'
                      x='0'
                      y='0'
                      width='20'
                      height='20'
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x='0'
                        y='0'
                        width='4'
                        height='4'
                        className='text-gray-200'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width='784'
                    height='404'
                    fill='url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)'
                  />
                </svg>
                <Image
                  className='relative mx-auto mr-16 shadow-md'
                  width={880}
                  height={642}
                  src={inveniordm}
                  alt='inveniordm'
                />
              </div>
            </div>

            <div className='relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
              <div className='relative'>
                <h3
                  id='hosting'
                  className='text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl'
                >
                  Cloud Hosting
                </h3>
                <p className='mt-3 mr-16 text-lg text-gray-500'>
                  Front Matter helps with setting up and maintaining cloud
                  infrastructure for scholarly services.
                </p>

                <dl className='mt-10 space-y-10'>
                  <div className='relative'>
                    <dt>
                      <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white'>
                        <FontAwesomeIcon icon={faCloud} />
                      </div>
                      <p className='mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans'>
                        Public Cloud Providers
                      </p>
                    </dt>
                    <dd className='mt-1 ml-16 text-base text-gray-500'>
                      Help with running scholarly infrastructure with cloud
                      providers Amazon&nbsp;AWS or{' '}
                      <a
                        href='https://digitalocean.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-green-600 font-bold'
                      >
                        Digital Ocean
                      </a>
                      .
                    </dd>
                  </div>

                  <div className='relative'>
                    <dt>
                      <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white'>
                        <FontAwesomeIcon icon={faServer} />
                      </div>
                      <p className='mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans'>
                        Kubernetes
                      </p>
                    </dt>
                    <dd className='mt-1 ml-16 text-base text-gray-500'>
                      Help with setting up and maintaining a{' '}
                      <a
                        href='https://kubernetes.io/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-green-600 font-bold'
                      >
                        Kubernetes
                      </a>{' '}
                      cluster.
                    </dd>
                  </div>

                  <div className='relative'>
                    <dt>
                      <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white'>
                        <FontAwesomeIcon icon={faClipboard} />
                      </div>
                      <p className='mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans'>
                        Terraform
                      </p>
                    </dt>
                    <dd className='mt-1 ml-16 text-base text-gray-500'>
                      Help with setting up and maintaining{' '}
                      <a
                        href='https://www.terraform.io/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-green-600 font-bold'
                      >
                        Terraform
                      </a>{' '}
                      for managing cloud infrastructure.
                    </dd>
                  </div>
                </dl>
              </div>

              <div className='mt-10 -mx-4 relative lg:mt-0' aria-hidden='true'>
                <svg
                  className='absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden'
                  width='784'
                  height='404'
                  fill='none'
                  viewBox='0 0 784 404'
                >
                  <defs>
                    <pattern
                      id='ca9667ae-9f92-4be7-abcb-9e3d727f2941'
                      x='0'
                      y='0'
                      width='20'
                      height='20'
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x='0'
                        y='0'
                        width='4'
                        height='4'
                        className='text-gray-200'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width='784'
                    height='404'
                    fill='url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)'
                  />
                </svg>
                <Image
                  className='relative mt-16 mx-auto shadow-md'
                  width={853}
                  height={480}
                  src={cloud}
                  alt='Cloud'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
