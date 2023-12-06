import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faMastodon
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className='bg-gray-200' aria-labelledby='footerHeading'>
      <h2 id='footerHeading' className='sr-only'>
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-6 lg:py-8 flex flex-auto items-center justify-between font-sans">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-8 xl:mt-0">
          <div className="mx-4 md:mx-auto mt-2 md:mt-0">
            <h3 className="text-base font-semibold text-gray-400 tracking-wider uppercase">
            Front Matter
            </h3>
            <p className='text-sm text-gray-500 mt-2'>
              Kleimannstrasse 10
              <br /> 48149 Münster
              <br />
              Germany
            </p>
            <ul className='mt-1 list-none'>
              <li>
                <div className='flex space-x-3 mb-3'>
                  <Link href='mailto:info@front-matter.io' className='text-gray-500 hover:text-gray-400 border-b-0'>
                    <span className='sr-only'>Email</span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </Link>

                  <Link href='https://mstdn.science/@frontmatter' rel='me' className='text-gray-500 hover:text-gray-400 border-b-0'>
                    <span className='sr-only'>Mastodon</span>
                    <FontAwesomeIcon icon={faMastodon} />
                  </Link>

                  <Link href='https://github.com/front-matter' className='text-gray-500 hover:text-gray-400 border-b-0'>
                    <span className='sr-only'>GitHub</span>
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>

                  <Link href='https://blog.front-matter.io/atom' className='text-gray-500 hover:text-gray-400 border-b-0'>
                    <span className='sr-only'>RSS</span>
                    <FontAwesomeIcon icon={faRss} />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className='mt-2 mx-6 md:mt-0'>
            <h3 className='text-base font-semibold text-gray-400 tracking-wider uppercase'>
              Services
            </h3>
            <ul className='mt-1 list-none'>
              <li>
                <Link href='https://front-matter.io' className='text-sm border-b-0 text-gray-500 hover:text-gray-400'>
                  Software Development
                </Link>
              </li>
              <li>
                <Link href='https://front-matter.io' className='text-sm border-b-0 text-gray-500 hover:text-gray-400'>
                  Hosting
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-2 mx-6 md:mt-0">
            <h3 className="text-base font-semibold text-gray-400 tracking-wider uppercase">
              More
            </h3>
            <ul className="mt-1 list-none">
              <li>
                <Link href='https://blog.front-matter.io' className='text-sm border-b-0 text-gray-500 hover:text-gray-400'>
                  Blog
                </Link>
              </li>
              <li>
                <Link href='https://docs.front-matter.io' className='text-sm border-b-0 text-gray-500 hover:text-gray-400'>
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-2 mx-6 md:mt-0">
            <h3 className="text-base font-semibold text-gray-400 tracking-wider uppercase">
              About
            </h3>
            <ul className="mt-1 list-none">
              <li>
                <Link href="/team" className="text-sm border-b-0 text-gray-500 hover:text-gray-400">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/open-source" className="text-sm border-b-0 text-gray-500 hover:text-gray-400">
                  Open Source Software
                </Link>
              </li>
              <li>
                <Link href='https://plausible.io/front-matter.io' className='text-sm border-b-0 text-gray-500 hover:text-gray-400'>
                  Usage Stats
                </Link>
              </li>
              <li>
                <Link href='https://front-matter.instatus.com/' className='text-sm border-b-0 text-gray-500 hover:text-gray-400'>
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
