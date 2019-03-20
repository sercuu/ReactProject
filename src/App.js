import React, { Component } from 'react';
import {
  Router
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/store'
import {history} from './Helpers'
import AppRouter from './AppRouter';


class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Provider store={store}>
            <Router history={history}>      
              <AppRouter/>
            </Router>
          </Provider>
        </React.Fragment>
    );
  }
}

export default App;
