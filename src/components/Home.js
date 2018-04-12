import React, { Component, Image } from 'react';
import * as firebase from 'firebase'
import Header from './Header'

import Background from '../images/background_image2.jpg';
import logo from '../images/logo.png';

var sectionStyle = {
  width: "100vw",
  height: "100vh",
  backgroundSize: "cover",
  backgroundImage: `url(${Background})`
};

var sectionStyleImage = {
  height: "30%",
  display: "block",
  margin: "0 auto",
  paddingTop: "10vh"
};

class Home extends Component {
  constructor () {
    super()
    this.handleAuth = this.handleAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  state = {
    user: null
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/plus.login')

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  handleLogout () {
    firebase.auth().signOut()
      .then(result => console.log('Te has desconectado correctamente'))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  render () {
    return (
      <div>
           <section style={ sectionStyle }>
           <img src={logo} style={ sectionStyleImage }/>

        <Header
          user={this.state.user}
          onAuth={this.handleAuth}
          onLogout={this.handleLogout}
        />
        </section>
      </div>
    )
  }
}

export default Home
