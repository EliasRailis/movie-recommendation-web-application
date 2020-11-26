import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from './components/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MoviesList from './components/MoviesList';

ReactDOM.render(
  <Router>
  <Nav/>
    <Switch>
      <Route path="/home" component={App}/>
      <Route path="/movies" component={MoviesList}/>
    </Switch>
  </Router>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);