import React, { Component } from 'react'
import {connect} from 'react-redux'
import {logOut} from '../../Redux/Actions'

class LogOut extends Component {


  render () {
    return (
      <div>
        <button type='submit' onClick={ () => {
          this.props.logOut()
        }}>
            Log Out
        </button>
      </div>
    )
    
  }
}

const mapStateToProps = () => {
  return {
 
  }
}

export default connect(mapStateToProps,{    
  logOut
})(LogOut)
