import React from 'react'
import { render } from 'react-dom'

import ATVParallax from 'react-atv-parallax'

const rootDivStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(238, 239, 244, 1)'
}

render(
  <div style={rootDivStyle}>
    <ATVParallax
      layers={[
        'img/1.png',
        'img/2.png',
        'img/3.png',
        'img/4.png',
        'img/5.png'
      ]}
      style={{ width: 320, height: 500 }}
    />
  </div>,
  document.getElementById('root')
)
