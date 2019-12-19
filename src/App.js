import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
    console.log('constructor')
  }

  componentDidMount () {
    console.log('compomentDidMount')
  }

  sholdComponentUpdate (nextProps) {
    console.log('sholdComponentUpdate')
  }

  componentDidUpdate () {
    console.log('compomentDidUpdate')
  }

  render () {
    console.log('render')
    const setStateHandler = (e) => {
      console.log('* call setState()')
      this.setState({ r: Math.random()})
    }
    return (
      <div>
        <button onClick={setStateHandler}>
      setState
        </button>
      </div>
    )
  }
}

export default App
