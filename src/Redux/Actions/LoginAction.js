import { LOGIN_FORM_SEND } from '../Types'

export const sendLoginForm = data => dispatch => {
    dispatch({
      type: LOGIN_FORM_SEND
    }); 
  };