import React, { Component } from 'react'
import User from './components/user/User'
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      userA: {
        firstName: "Harper",
        lastName: "Perez",
        age: 33,
        avatarUrl:
          "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
      },
      userB: {
        firstName: "Ana",
        lastName: "Hello",
        age: 22,
        avatarUrl:
          "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
      },
      clickCount: 0,
      background: 'white'
    }
  }


  updateCounter = () => this.state.clickCount != 5 ? this.setState({ clickCount: this.state.clickCount + 1 }) : this.setState({ background: 'green' })



  render() {

    return (
      <main>

        <section className="users">
          <h1>Listado de usuarios</h1>
          <User background={this.state.background} firstName={this.state.userA.firstName} lastName={this.state.userA.lastName} age={this.state.userA.age} avatarUrl={this.state.userA.avatarUrl} />
          <User background={this.state.background} firstName={this.state.userB.firstName} lastName={this.state.userB.lastName} age={this.state.userB.age} avatarUrl={this.state.userB.avatarUrl} />
          {/* <User {...this.state.userA} /> */}
        </section>

        <section className="clickCounter">
          <h1>Contador de clicks (woah!)</h1>
          <p>El valor actual del contador es {this.state.clickCount}</p>
          <button onClick={this.updateCounter}>Aumentar el contador</button>
        </section>

      </main>
    )

  }
}

export default App
