import React from 'react'
import PropsType from 'prop-types'
import './style.css'

const Button = ({ type, children, onClick, ...props }) => (
  <button type={type} {...props} onClick={onClick}>{children}</button>
)
Button.propsType = {
  type: PropsType.string,
  onClick: PropsType.func
}
export default Button