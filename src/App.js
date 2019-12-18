import React from 'react'

const embed = props => {
  const item = 'SDカード'
  const value = '1200'
  return (
    <h1>{item}-{value}円</h1>
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
        <embed />
      </div>
    )
  }
}
export default App
