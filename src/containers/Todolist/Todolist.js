import React, { Component } from 'react';
import Default from '../../Layout/Default/index';
import { connect } from 'react-redux';
import List from '../../components/List/List';
import { todolistPost, todolistGet, todolistDelete, todolistEdit } from '../../Redux/Actions';
import './Todolist.scss';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      id: '',
      edit: false
    };
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const {edit} = this.state
    if(edit){
      const { value, id } = this.state
      this.props.edit({value, id})
      this.setState({
        value:'',
        edit:false
      });
    }else{
      const { list } = this.props;
      const { value } = this.state;
      const item = { id: list.length + 1, name: value };
      this.props.post(item);
      this.setState({
        value: ''
      });
    }   
  };

  handleEdit = (id) => {
    const {list} = this.props
    const selectedItem = list.find(item => item.id === id);
    this.setState({
      value: selectedItem.name,
      edit:true,
      id: id
    });
  }

  render() {
    return (
      <Default>
        <div className="todolist">
          <div className="row">
            <div className="col-12">
              <h1>Todolist</h1>
              <form onSubmit={this.onSubmit}>
                <input
                  type="text"
                  placeholder="Todo"
                  value={this.state.value}
                  onChange={this.onChange}
                />

                <button className="addButton" disabled={!this.state.value}>
                  Submit
                </button>
              </form>
            </div>
          </div>
          <List items={this.props.list} 
                handleDelete={this.props.delete} 
                handleEdit={this.handleEdit}
                />
        </div>
      </Default>
    );
  }
}

const mapStateToProps = state => {
  const { list } = state.todolist;
  return {
    list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: id => dispatch(todolistDelete(id)),
    get: () => dispatch(todolistGet),
    post: item => dispatch(todolistPost(item)),
    edit : item => dispatch(todolistEdit(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todolist);
