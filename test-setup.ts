/*eslint-env node*/

// const enzyme = require('enzyme')
// import Adapter from '@cfaester/enzyme-adapter-react-18'

// enzyme.configure({
// adapter: new Adapter(),
// })

export interface Global {
  document: Document
  window: Window
}

declare const global: Global

// global.window.resizeTo = (width: number, height: number) => {
// global.window.innerWidth = width || global.window.innerWidth
// global.window.innerHeight = height || global.window.innerHeight
// global.window.dispatchEvent(new Event('resize'))
// }

document.body.innerHTML = `<div id="root"></div><div id="portal"></div>`
