import React, { Component } from 'react'
import Header from '../../components/Header/Header'
class Default extends Component {
  render() {
    return (
        <div className='container'>
            <Header/>
            <div className='content'>
                {this.props.children}
            </div>
        </div>
    )
  }
}
export default Default;