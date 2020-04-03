import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Cities from './components/citiesList';
import WeatherReport from './components/WeatherReport';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:2
  },
  paper: {
    padding:theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Cities/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <WeatherReport/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
