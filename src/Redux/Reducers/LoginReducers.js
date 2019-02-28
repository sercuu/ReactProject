import { LOGIN_FORM_SEND } from '../Types'


const INITIAL_STATE = {
    
  };
  

const LoginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_FORM_SEND:
          return {...state, activeTabId: action.payload};
        default:
          return state;
    }
}   
export default LoginReducer;