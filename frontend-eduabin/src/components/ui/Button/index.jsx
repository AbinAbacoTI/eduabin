import propTypes from 'prop-types'

const Button = ({ text, className, ...rest }) => {
  return (
    <button
      className={className}
      { ...rest }
    >
      {text}
    </button>
  )
}

export default Button

Button.prototype = {
  text: propTypes.string
}
