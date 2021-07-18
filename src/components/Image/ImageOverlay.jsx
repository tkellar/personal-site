import React from 'react'
import { BackgroundImage } from '@tkellar/react-ui-lib'

const ImageOverlay = (props) => {
  return (
    <BackgroundImage
      {...props}
      overlayStyle={{
        position: 'relative',
        left: '20%',
        bottom: '-80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '15%',
        width: '60%',
        borderRadius: '0.5em',
        backgroundColor: 'rgba(255,255,255,0.4)',
        backdropFilter: 'blur(4px)'
      }}
    >
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { style: { height: '75%' } })
        }

        return child
      })}
    </BackgroundImage>
  )
}

export default ImageOverlay
