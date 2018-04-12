import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import AppBar from './AppBar';
import FormLine from './FormLine';
import logo from './../logo.svg';




const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 120,
  },
});

function Landing(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <AppBar className={classes.paper}>xs=12</AppBar>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Galería</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>Horario</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>Precio</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Recomendaciónes
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Restricciones</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Google Maps</Paper>
        </Grid>
        <Grid item xs={6} sm={9}>
          <Paper className={classes.paper}>Descricpción
          <p>  Incluye:</p> 
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);


