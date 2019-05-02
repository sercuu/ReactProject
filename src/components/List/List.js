import React from 'react';
import './List.scss';

const List = ({ handleDelete, items }) => (
  <div className="listContainer">
    <div className="list">
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              {item.name}
              <button
                onClick={() => {
                  handleDelete(item.id);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

export default List;
