import React from 'react';
import './List.scss'

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
                  }}></button>
                </li>
              })
            }
          </ul>
      </div>
    </div>  
);



export default List;