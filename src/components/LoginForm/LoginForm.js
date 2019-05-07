import React, { Component } from 'react'
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
    const user = {
        email : values.userName, 
        password :values.password
    }
    this.props.login(user)
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
const mapDispatchToProps = dispatch => {
   return {
    login : user => dispatch(sendLoginForm(user))
   }
}

export default connect(null, mapDispatchToProps)(
    reduxForm({
    form: 'login'
})(LoginForm))