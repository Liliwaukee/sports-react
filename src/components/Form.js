import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from './Checkbox';
import FormLine from './FormLine';
import Button from './Button';

const styles = theme => ({
  FormLine: {
    padding: 50,
  },
  Checkbox: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 120,
  },
});


    const Form = () => (
        <div>
         <FormLine />
         <br />
          <Checkbox/>
          <br />
          <br />
          <Button />
        </div>

);

export default Form
