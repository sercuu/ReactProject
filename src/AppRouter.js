import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import NotFound from './containers/NotFound/NotFound';


class AppRouter extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route component= {NotFound}></Route>
      </Switch>
    )
  } 
}


export default AppRouter;