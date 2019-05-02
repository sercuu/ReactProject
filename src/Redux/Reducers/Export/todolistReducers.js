import { TODOLIST_GET, TODOLIST_POST, TODOLIST_DELETE } from '../../types';

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

    default:
      return state;
  }
};
export default todolistReducer;
