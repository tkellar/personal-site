import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  padding: 0.7em 1.7em;
  border-radius: 0.6em;
  color: white;
  transition: all 0.1s ease-out;
  font-size: 110%;
`

const ButtonBase = (props) => {
  return <ButtonStyled {...props} />
}

export default ButtonBase
