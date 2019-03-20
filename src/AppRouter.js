import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import NotFound from './containers/NotFound/NotFound';
import {PrivateRoute} from './components/PrivateRoute'


class AppRouter extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home'>
        </Redirect>
        </Route>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/home' component={Home}/>
        <PrivateRoute component= {NotFound}/>
      </Switch>
    )
      
  }
} 


export default AppRouter;