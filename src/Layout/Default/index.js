import React, { Component } from 'react'
import Header from '../../components/Header/Header'
class Default extends Component {
  render() {
    return (
        <div className='container'>
            <Header/>
            {this.props.children}
        </div>
    )
  }
}
export default Default;