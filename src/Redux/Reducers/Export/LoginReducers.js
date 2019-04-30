import { LOGIN_FORM_SEND,LOG_OUT } from '../../types'


const INITIAL_STATE = {
    loginSuccess : false,
    logOutSuccess: false
  };
  

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOGIN_FORM_SEND:
        return{
          ...state,
          loginSuccess: true
        };
      case LOG_OUT:
        return{
          ...state,
          logOutSuccess: true
        };
       
        default:
          return state;
    }
}   
export default loginReducer;