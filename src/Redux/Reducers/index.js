import {combineReducers} from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import loginReducers from './Export/loginReducers';
import todolistReducer from './Export/todolistReducers'

const allField = combineReducers({
    todolistReducer,
    loginReducers,
    form: reduxFormReducer,
  });
  
  export default allField;
   