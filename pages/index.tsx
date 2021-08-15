import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const IndexPage = () => {
  const tag = {
    name: 'Scholarship needs Front Matter',
    description: null,
    feature_image: '/img/hero.jpg',
    featured: true
  }

  return (
    <>
      <Header />
      <Hero tag={tag} />
      <Footer />
    </>
  )
}

export default IndexPage
