import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Header from './components/Header/Header'
import AppRouter from './AppRouter';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Router>      
            <AppRouter/>
          </Router>
        </React.Fragment>
    );
  }
}

export default App;
