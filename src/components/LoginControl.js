/**
 * @flow
 */

import React, { Component } from 'react'

class LoginControl extends Component {
  state = { isLoggedIn: true }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true })
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false })
  }

  handleChange = () => {
    this.setState(({ isLoggedIn }: { isLoggedIn: boolean }) => ({
      isLoggedIn: !isLoggedIn,
    }))
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn

    // let button = null
    //
    // if (isLoggedIn) {
    //   button = <LogoutButton onClick={this.handleLogoutClick} />
    // } else {
    //   button = <LoginButton onClick={this.handleLoginClick} />
    // }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        <button onClick={this.handleChange}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        {/* {isLoggedIn
          ? <LogoutButton onClick={this.handleLogoutClick} />
          : <LoginButton onClick={this.handleLoginClick} />} */}
        <h4>
          The user is <strong>{isLoggedIn ? 'currently' : 'not'}</strong> logged
          in.
        </h4>
      </div>
    )
  }
}

function Greeting (props) {
  if (props.isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

function UserGreeting (props) {
  return <h2>Welcome back!</h2>
}

function GuestGreeting (props) {
  return <h2>Please sign in.</h2>
}

function LogoutButton (props) {
  return <button onClick={props.onClick}>Logout</button>
}

function LoginButton (props) {
  return <button onClick={props.onClick}>Login</button>
}

export default LoginControl
