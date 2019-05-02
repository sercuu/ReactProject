import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import loginReducers from './Export/loginReducers.js';
import todolistReducer from './Export/todolistReducers';

const allField = combineReducers({
  todolist: todolistReducer,
  auth: loginReducers,
  form: reduxFormReducer
});

export default allField;
