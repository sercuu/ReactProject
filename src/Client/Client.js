import axios from 'axios';
import * as API from './Api'


export const Uaa = axios.create({
    baseURL: API.LOGIN
  });

  //Interceptors