import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

firebase.initializeApp( {
  apiKey: "AIzaSyC-i5Kqu8RRx5feFLgXdqDEJMn3j8cGm8I",
  authDomain: "sport-react.firebaseapp.com",
  databaseURL: "https://sport-react.firebaseio.com",
  projectId: "sport-react",
  storageBucket: "sport-react.appspot.com",
  messagingSenderId: "192361496144"
});


ReactDOM.render( <MuiThemeProvider>
    <App />
  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();



