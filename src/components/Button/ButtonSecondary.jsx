import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from 'context/theme.context'
import ButtonBase from './ButtonBase'

const ButtonStyled = styled(ButtonBase)`
  border: solid ${({ theme }) => theme.secondary_shade1} 1px;
  background-color: ${({ theme }) => theme.secondary};
  color: black !important;

  &:hover {
    background-color: ${({ theme }) => theme.secondary_shade1};
  }

  &:active {
    border: solid ${({ theme }) => theme.secondary} 2px;
  }
`

const ButtonSecondary = (props) => {
  const themeContext = useContext(ThemeContext)

  return <ButtonStyled theme={themeContext} {...props} />
}

export default ButtonSecondary
