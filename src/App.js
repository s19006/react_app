import React from 'react'

const Embed = props => {
  return (
    <h1>{props.item}-{props.value}円</h1>
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
        <Embed item='値段は' value='1200' />
      </div>
    )
  }
}
export default App
