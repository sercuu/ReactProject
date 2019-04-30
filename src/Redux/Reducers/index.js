import {combineReducers} from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import loginReducers from './Export/loginReducers';

const allField = combineReducers({
    loginReducers,
    form: reduxFormReducer,
  });
  
  export default allField;
   