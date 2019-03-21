import React, { Component } from 'react'
import Input from '../FormElements/Input/Input'
import {connect} from 'react-redux'
import {sendLoginForm} from '../../Redux/Actions'
import {Field, reduxForm} from 'redux-form'

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

submit = (values) => {
    console.log(values.userName, 'values')
    console.log(values.password, 'values')
    const user = {
        email : values.userName, 
        password :values.password
    }
    this.props.sendLoginForm(user)
}
    
render() {
    const{handleSubmit} = this.props;

    return (
        <div className='container'>
            <div className="content">
                <form onSubmit={handleSubmit(this.submit)}>
                    <label>
                        Kullanici adi
                    </label> 
                    <Field
                       name="userName"
                       component="input"
                       type="text"
                       placeholder="First ssName"
                    />                      
                    <label>
                        Şifre
                    </label> 
                    <Field
                        component="input"
                        name='password'                           
                        type='password'
                    />   
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
})(
    reduxForm({
    form: 'login'
})(LoginForm)
)