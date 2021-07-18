import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonLink from 'components/Button/ButtonLink'

const AboutMe = () => {
  return (
    <div className='AboutMe bg-dark p-3' style={{ height: '100vh' }}>
      <ButtonLink linkTo='/' variant='secondary'>
        <span className='mx-2'>
          <i className='bi bi-arrow-left' />
        </span>
        Home
      </ButtonLink>
      <Container className='p-3'>
        <h1 className='text-light display-1'>About Me</h1>
      </Container>
    </div>
  )
}

export default AboutMe
