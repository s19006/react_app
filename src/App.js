import React from 'react'

const Greeting = props => {
  return (
    <h1>[Math.floor(Math.random() * 3)]</h1>
  )
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Greeting text='こんにちは。' />
      </div>
    )
  }
}
export default App
