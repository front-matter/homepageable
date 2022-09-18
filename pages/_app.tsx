import React from 'react'
import '../styles/global.css'
import PlausibleProvider from 'next-plausible'
import Head from 'next/head'

import '@fortawesome/fontawesome-free/css/all.min.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false

// global style overrides for prism theme (optional)
// import 'styles/prism-theme.css'

import 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'

export default function App({ Component, pageProps }) {
  return (
    <>
      <PlausibleProvider domain='front-matter.io'>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <title>Front Matter</title>
          <link rel='shortcut icon' href='/favicon.ico' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
        </Head>
        <Component {...pageProps} />
      </PlausibleProvider>
    </>
  )
}
