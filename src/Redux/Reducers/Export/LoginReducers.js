import { LOGIN_FORM_SEND } from '../../types'


const INITIAL_STATE = {
    loginSuccess : false,
  };
  

const LoginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOGIN_FORM_SEND:
        return{
          ...state,
          loginSuccess: true
        };
       
        default:
          return state;
    }
}   
export default LoginReducer;