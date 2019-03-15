import React, { Component } from 'react'
import Input from '../FormElements/Input/Input'
import {connect} from 'react-redux'
import {sendLoginForm} from '../../Redux/Actions'

class LoginForm extends Component {
state = {
    value: {}
}

handleChane = (e) =>
    this.setState({
        value: {
            ...this.state.value,
            [e.target.name]: e.target.value
        }
    });

handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.value.userName, 'this.state.value.userName')
    console.log(this.state.value.password, 'this.state.value.password')
    const user = {
        email : this.state.value.userName, 
        password :this.state.value.password
    }
    this.props.sendLoginForm(user)
}
    
render() {
    return (
        <div className='container'>
            <div className="content">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Kullanici adi
                        <Input
                            type='text'
                            name='userName'
                            onChange={this.handleChane}
                        />
                    </label>   
                    <label>
                        Şifre
                        <Input
                            type='password'
                            name='password'                           
                            onChange={this.handleChane}
                        />
                    </label>  

                    <button type='submit'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
  }
}
const mapStateToProps = () => {
   return {
  
   }
}

export default connect(mapStateToProps,{    
    sendLoginForm
})(LoginForm)