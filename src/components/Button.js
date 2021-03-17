import PropTypes from "prop-types"

const Button = ({ color, text, onClick }) => {
  return (
    <button
      className='btn'
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button

Button.defaultProps = {
  text: "Add",
  color: "Black",
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
}
