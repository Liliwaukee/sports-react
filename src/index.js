import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './components/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from './components/Card';

ReactDOM.render( <MuiThemeProvider>
    <App />
  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();



