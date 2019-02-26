import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import {history} from './Helpers'
import AppRouter from './AppRouter';


class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Router history={history}>      
            <AppRouter/>
          </Router>
        </React.Fragment>
    );
  }
}

export default App;
