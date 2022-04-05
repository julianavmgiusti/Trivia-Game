import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Play from './components/Play';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/play" component={ Play } />
      </Switch>
    );
  }
}

export default App;
