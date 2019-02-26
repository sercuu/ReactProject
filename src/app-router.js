import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './containers/loginPage/login-page';



class AppRouter extends Component {
  
    renderRouter() {
        if (!!localStorage.getItem('access_token')) {
            return <Switch>
                <Route path="/"
                    component={LoginPage} />
            </Switch>;
        } else if (!localStorage.getItem('access_token') || localStorage.getItem('access_token') === '') {
            return <Switch>
                <Route path="*" component={LoginPage} />
            </Switch>;
        } 
    }


    render() {
        return (
            this.renderRouter()
        );
    }
}

export default AppRouter

