import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from './Checkbox';

    const Form = () => (
        <div>
          <TextField
            hintText="Nickname"
          /><br />
          <br />
          <TextField
            hintText="Edad"
            /><br />
            <br />
            <TextField
            hintText="Enfermedades/ problemas de salud"
          /><br />
          <br />
          <TextField
            hintText="Actividades de interés"
          /><br />
          <Checkbox/>
        </div>

);

export default Form
