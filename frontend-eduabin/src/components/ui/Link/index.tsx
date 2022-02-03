import NextLink from 'next/link'
import propTypes from 'prop-types'

const Link = ({ href, children, ...props }) => {
  return (
    <NextLink href={href}>
      <a { ...props }> { children } </a>
    </NextLink>
  )
}

export default Link

Link.prototype = {
  href: propTypes.string.isRequired
}
