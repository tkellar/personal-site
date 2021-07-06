import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../context/theme.context'
import ButtonBase from './ButtonBase'

const ButtonStyled = styled(ButtonBase)`
  border: solid ${({ theme }) => theme.primary_shade1} 1px;
  background-color: ${({ theme }) => theme.primary};

  &:hover {
    background-color: ${({ theme }) => theme.primary_shade1};
  }

  &:active {
    border: solid ${({ theme }) => theme.primary} 2px;
  }
`

const ButtonPrimary = (props) => {
  const themeContext = useContext(ThemeContext)

  return <ButtonStyled theme={themeContext} {...props} />
}

export default ButtonPrimary
