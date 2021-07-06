import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from './context/theme.context'
import { BackgroundImage } from '@tkellar/react-ui-lib'
import ImageOverlay from './components/ImageOverlay'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonPrimary from './components/ButtonPrimary'
import ButtonSecondary from './components/ButtonSecondary'
import ImageLink from './components/ImageLink'

const H1 = styled.h1`
  font-weight: bold;
`

const H2 = styled.h2`
  color: ${({ theme }) => theme.secondary};
`

const Home = () => {
  const themeContext = useContext(ThemeContext)

  return (
    <div className='Home'>
      <BackgroundImage
        fullScreen
        imgSrc='img/city.jpeg'
        overlayStyle={{
          background:
            'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2))'
        }}
      >
        <Container className='text-light h-100'>
          <Row className='h-100 align-items-center' md={2}>
            <Col>
              <H2 theme={themeContext}>Hi, my name is</H2>
              <H1 className='display-1'>Tristan Kellar</H1>
              <H2 theme={themeContext}>A Software Engineer</H2>
              <H2 theme={themeContext}>Living in New York City</H2>
              <p>
                <ButtonPrimary style={{ margin: '1em 1em 0 0' }}>
                  About me
                </ButtonPrimary>
                <ButtonSecondary>Portfolio</ButtonSecondary>
              </p>
            </Col>
            <Col className='text-center'>
              <ImageOverlay
                style={{
                  width: '30vw',
                  height: '30vw',
                  margin: '0 auto',
                  borderRadius: '50%'
                }}
                imgSrc='img/computer.jpeg'
              >
                <ImageLink
                  href='https://www.linkedin.com/in/tristan-kellar-3b9857170/'
                  src='img/linkedin.png'
                />
                <ImageLink
                  href='https://github.com/tkellar'
                  src='img/github.png'
                />
                <ImageLink
                  href='mailto:tristandkellar@gmail.com'
                  src='img/email.png'
                />
              </ImageOverlay>
            </Col>
          </Row>
        </Container>
      </BackgroundImage>
    </div>
  )
}

export default Home
