import React from 'react';
import './List.scss';

const List = ({ handleDelete, items, handleEdit }) => (
  <div className="listContainer">
    <div className="list">
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              {item.name}
              <button className='delete'
                onClick={() => {
                  handleDelete(item.id);
                }}
              />
              <button className='edit'
                onClick={() => {
                  handleEdit(item.id);
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
