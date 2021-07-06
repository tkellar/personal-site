import React from 'react'
import Image from 'react-bootstrap/Image'

const ImageLink = (props) => {
  return (
    <a
      href={props.href}
      target='_blank'
      rel='noreferrer noopener'
      style={props.style}
    >
      <Image src={props.src} style={{ height: '100%' }} />
    </a>
  )
}

export default ImageLink
