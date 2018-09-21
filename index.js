import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/App'

if(module.hot) {
  module.hot.accept();
}


let root = document.getElementById('root')

ReactDOM.render(<App/>,root)


