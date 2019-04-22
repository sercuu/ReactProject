import React, { Component } from 'react'
import Default from '../../Layout/Default/index'
import './Todolist.scss'

class Todolist extends Component {
    constructor(props){
        super(props)
    }

handleSearchTermSubmit(event) {
    event.preventDefault();
    this.props.onSearchTermSubmit(this.textInput.value);
    }

render() {
    const{handleSubmit} = this.props;

    return (
        <Default>
            <div className="SearchBar">
            <h1>SearchBar</h1>
            <form onSubmit={this.handleSearchTermSubmit}>
            <input type="text" ref={(input) => this.textInput = input} />
            <button>Search</button>
            <button type="button">Random (doesn't do anything)</button>
            </form>
        </div>
        </Default>
    )
  }
}

export default  Todolist