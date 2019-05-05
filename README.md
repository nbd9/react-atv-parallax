# react-atv-parallax
Apple TV cards for React. Now in Typescript!

## Install
`npm install --save react-atv-parallax`

`yarn add react-atv-parallax`

## Demo
[http://danielsinclair.github.io/react-atv-parallax/](http://danielsinclair.github.io/react-atv-parallax/)

![GIF](.github/parallax-demo.gif)

## API
Layers are ordered by children order background to foreground.

### Example

```javascript
import ATVParallax from 'react-atv-parallax'

<ATVParallax style={{ width: 320, height: 190 }}>
  <img src='img/background.png'/>
  <img src='img/foreground.png'/>
  <span>Floating Title</span>
</ATVParallax>
```

## License
[MIT](LICENCE)
