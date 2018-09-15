import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Testimonials from './Testimonials'
import get from 'lodash/get'
const MainPageTestimonials = () => (
  <StaticQuery
    query={graphql`
      query MainPageTestimonials {
        allContentfulTestimonials(limit: 4) {
          edges {
            node {
              id
              testimonial {
                testimonial
              }
              author
            }
          }
        }
      }
    `}
    render={(data) => {
      const testimonials = get(data, 'allContentfulTestimonials.edges')
      if (!testimonials) {
        return null
      }

      return <Testimonials testimonials={testimonials} />
    }}
  />
)

export default MainPageTestimonials
