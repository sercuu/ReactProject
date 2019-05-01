import React, { Component } from 'react'
import Default from '../../Layout/Default/index'
import { connect } from 'react-redux';
import List from '../../components/List/List'
import './Todolist.scss'
import { todolistDelete} from '../../Redux/Actions'

class Todolist extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:'',
            items: []
        }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

onChange = (e) => {
    this.setState({
        value: e.target.value
    });
}
onSubmit = (value) => {
    value.preventDefault();
    this.setState({
        value: '',
        items: [...this.state.items, this.state.value]
      });
}

componentWillReceiveProps(props){
    console.log(props, 'props')
}

render() {
    return (
        <Default>  
            <div className="todolist">
                <div className='row'>
                    <div className='col-12'>
                        <h1>Todolist</h1>d
                        {this.props.todolistDelete}  d
                        <form onSubmit={this.onSubmit}>
                            <input
                                type='text'
                                placeholder='Todo'
                                value={this.state.value}
                                onChange={this.onChange} />

                            <button className='addButton' disabled={!this.state.value}>Submit</button>
                        </form>
                    </div>
                </div>
                <List items={this.state.items} />
            </div>  
        </Default>
    )
  }
}
const mapStateToProps = (todolistReducer) => {
    const { todolistDelete} = todolistReducer
    return {
        todolistDelete
    }
}

export default connect(mapStateToProps, {
    todolistDelete
})(Todolist)