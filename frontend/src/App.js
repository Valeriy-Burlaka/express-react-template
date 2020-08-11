import React, { Component } from 'react'

let DEV_URL = ''

if (process.env.NODE_ENV === 'development') {
  DEV_URL = 'http://localhost:3000'
}

class App extends Component {
 constructor(props) {
    super(props)

    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    // Call self-hosted API to get users response
    let response
    try {
      response = await fetch(`${DEV_URL}/users`)
      const users = await response.json()
      this.setState({
        users
      })
    } catch (err) {
      console.error(`Failed to fetch "${DEV_URL}/users": ${err.toString()}`)
    }

  }

  render() {
    return (
      <div className="App">
        {this.state.users.map((user, key) => (
          <p key={key}>{user}</p>
        ))}
      </div>
    )
  }
}

export default App;
