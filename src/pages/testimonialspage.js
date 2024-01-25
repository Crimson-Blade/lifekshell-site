import Layout from '../components/Layout'
import React from 'react'
import Seo from '../components/Seo'
import Reviews from '../components/Reviews'

const testimonialspage = ({location}) => {
  return (
    <Layout location={location}>
        <Reviews />
    </Layout>
  )
}

export default testimonialspage;
export const Head = () => <Seo title="Testimonials" />
