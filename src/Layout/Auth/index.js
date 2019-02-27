import React, { Component } from 'react';
import  './Auth.scss';

class Auth extends Component {
  render() {
    return (
        <div className='AuthContainer'>
            <div className='AuthContent'>
                {this.props.children}
            </div>
        </div>
    )
  }
}
export default Auth;