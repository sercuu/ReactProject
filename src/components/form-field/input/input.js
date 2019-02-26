import React, { Component } from 'react';

import './input.css';
import { Field } from 'redux-form';

class Input extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            value: ''
        };
        if (props.value !== undefined && props.value !== null) {
            this.state.value = props.value.toString()
        }
    }

    render() {
        if (this.state.value !== undefined && this.state.value !== null) {
            return (
                <div className={["Input-wrapper", this.props['wrapper-class']].join(' ')} style={this.props.wrapperStyle}>
                    <Field
                        {...this.props}
                        value={this.state.value}
                        onKeyUp={(e) => {
                            if (!this.props.value) {
                                this.setState({
                                    value: e.target.value
                                });
                            }
                            if (this.props.keyup) {
                                this.props.keyup(e)
                            }
                            if (this.props.onKeyUp) {
                                this.props.onKeyUp(e)
                            }
                        }}
                    />
                </div>
            );
        } else {
            return ''
        }
    }
}

export default Input;
