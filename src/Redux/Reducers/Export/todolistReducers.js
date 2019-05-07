import { TODOLIST_GET, TODOLIST_POST, TODOLIST_DELETE, TODOLIST_EDIT } from '../../types';

const INITIAL_STATE = {
  list: []
};

const todolistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODOLIST_GET:
      return {
        ...state
      };
    case TODOLIST_POST:
      return {
        list: [...state.list, action.payload]
      };
    case TODOLIST_DELETE:
      const list = state.list.filter(item => item.id !== action.payload);
      return {
        list
      };
    case TODOLIST_EDIT:
      const editItem = state.list.filter(item => item.id === action.payload);
      console.log(editItem, 'list');
      return {
        editItem
      };

    default:
      return state;
  }
};
export default todolistReducer;
