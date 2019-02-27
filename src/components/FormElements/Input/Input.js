import React, { Component } from 'react'

class Input extends Component {

    
    render() {
        return (
            <div>
                <input
                    {...this.props}
                />
            </div>
        )
    }
}

export default Input;