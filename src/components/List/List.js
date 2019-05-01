import React from 'react';
import './List.scss'
import {connect} from 'react-redux'
import {todolistDelete} from '../../Redux/Actions'

const List = props => (
    <div className="listContainer">
      <div className="list">
          <ul>
            {
              props.items.map((item, index) => {
                return  <li key={index}>
                  {item}
                  <button onClick={ () => {
                    console.log(index, 'sds')
;                    props.todolistDelete(index)
                  }}></button>
                </li>
              })
            }
          </ul>
      </div>
    </div>  
);

const mapStateToProps = () => {
  return {

  }
}


export default connect(mapStateToProps,{
  todolistDelete
})(List);