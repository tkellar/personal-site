import React from 'react'
import { Link } from 'react-router-dom'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'

const ButtonLink = ({ variant, linkTo, children, ...rest }) => {
  let SelectedButton
  switch (variant) {
    case 'primary':
      SelectedButton = ButtonPrimary
      break
    case 'secondary':
      SelectedButton = ButtonSecondary
      break
    default:
      SelectedButton = ButtonPrimary
  }

  return (
    <Link to={linkTo}>
      <SelectedButton {...rest}>{children}</SelectedButton>
    </Link>
  )
}

export default ButtonLink
