import { LOGIN_FORM_SEND } from '../types'
import * as res from '../../Client'

export const sendLoginForm = data => dispatch => {
    dispatch({
      type: LOGIN_FORM_SEND
    }); 
    console.log(data ,' data')
    res.Uaa.post('', data).then(response => {
      console.log(response, 'response')
    })
  };