import React from 'react'
import { Link } from 'gatsby'

const LinkSmart = ({ to, target, rel, ...restProps }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use gatsby-link for internal links, and <a> for others
  if (internal) {
    return <Link to={to} {...restProps} />
  }
  return <a href={to} target={target} rel={rel} {...restProps} />
}

LinkSmart.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

export default LinkSmart
