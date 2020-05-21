import React, { Component } from 'react'
import Header from './components/header/header'
import Banner from './components/banner/banner'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
      </div>
    )
  }
}

export default App
