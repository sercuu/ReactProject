import React, { Component } from 'react'
import {Field} from 'redux-form'

class Input extends Component {

    
    render() {
        return (
            <div>
                <Field
                    {...this.props}
                />
            </div>
        )
    }
}

export default Input;