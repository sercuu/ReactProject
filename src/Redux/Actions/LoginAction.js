import { LOGIN_FORM_SEND, LOGIN_FORM_SEND_SUCCSES, LOG_OUT} from '../types'
import * as res from '../../Client'
import auth from '../../Helpers/auth'
import {history} from '../../Helpers'

export const sendLoginForm = data => dispatch => {
    dispatch({
      type: LOGIN_FORM_SEND
    }); 
    res.Uaa.post('', data)
    .then(response => {
      setLogalStorage(dispatch,response)
    })
  }; 


const setLogalStorage = (dispatch, response) => {
  auth.setToken(response.data.token);
  history.push('/home')

  dispatch({ 
    type: LOGIN_FORM_SEND_SUCCSES
  });

}
export const logOut = () => dispatch =>{
  dispatch({
    type: LOG_OUT
  }); 
  auth.clear('token')
  history.push('/login')
}