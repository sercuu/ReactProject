import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import './login-form.css';
import Input from '../form-field/input/input' 

class LoginForm extends Component {
    render() {
        return (
            <div>
                <form>

                <Input
                    className="Input"
                    name="username"
                    ref="username"
                    autoComplete="off"
                    id="username"
                    component="input"
                    type="text"
                
                />
                </form>
            </div>
        );
    }
}


const mapStateToProps = ({ }) => {
    return {
      
    };
};

export default connect(mapStateToProps, {

})(
    reduxForm({
    form: 'login'
})(LoginForm)
);
