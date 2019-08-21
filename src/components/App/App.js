import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import addOwnerForm from '../AddOwnerForm/addOwnerForm';
import addPetForm from '../AddPetForm/AddPetForm';


class App extends Component  {




  render() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Python Pet Hotel</h1>
      </header>
      <Router>
        <Link to="/">DashBoard</Link>
        <Link to="/owner">Manage Owners</Link>

        <Route exact path="/" component = {addPetForm}/>
        <Route path="/owner" component = {addOwnerForm} />


      </Router>
    </div>
  );
  }
}

export default connect()(App);
