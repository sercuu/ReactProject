import {combineReducers} from 'redux'
import loginReducers from './Export/LoginReducers';

const allField = combineReducers({
    loginReducers
  });
  
  export default allField;
  