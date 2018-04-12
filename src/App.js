import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Form from './components/Form';
import { withStyles } from 'material-ui/styles';
import Landing from './components/Landing';




class App extends Component {
  render() {
    return (

      <Router>
      <div>
        <Route exact path= "/" component = {Home}/>
        <Route path= "/form" component = {Form}/>
        <Route path= "/landing" component = {Landing}/>
      </div>
      </Router>
    );
    }
}

export default App;
