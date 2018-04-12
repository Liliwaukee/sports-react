import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 40,
  },
  input: {
    margin: theme.spacing.unit,
  },
});

function Inputs(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Input
        placeholder="Nickname"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        placeholder="Edad"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        placeholder="Problemas de salud"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <br />
    </div>
  );
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);