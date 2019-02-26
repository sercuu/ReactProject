import React, { Component } from 'react'
class Auth extends Component {
  render() {
    return (
        <div className='container'>
            <div className='content'>
                {this.props.children}
            </div>
        </div>
    )
  }
}
export default Auth;