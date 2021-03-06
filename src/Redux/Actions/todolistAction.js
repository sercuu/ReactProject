import { TODOLIST_GET, TODOLIST_POST, TODOLIST_DELETE, TODOLIST_EDIT } from '../types';

export const todolistGet = dispatch => {
  dispatch({
    type: TODOLIST_GET
  });
};

export const todolistPost = item => dispatch => {
  dispatch({
    type: TODOLIST_POST,
    payload: item
  });
};

export const todolistDelete = id => dispatch => {
  dispatch({
    type: TODOLIST_DELETE,
    payload: id
  });
};
export const todolistEdit= (value, id) => dispatch => {
  dispatch({
    type: TODOLIST_EDIT,
    payload: value,id
  });
};
