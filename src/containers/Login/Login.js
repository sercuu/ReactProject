import React, { Component } from 'react'
import Auth from '../../Layout/Auth'
import LoginForm from '../../components/LoginForm/LoginForm'

class Login extends Component {
  render() {
    return (
      <Auth>
        <LoginForm/>
      </Auth>
    )
  }
}

export default Login;