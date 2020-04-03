import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    padding: '8px'
  },
  currentReport: {
    background: "rgba(76, 175, 80, 0.1)"
  }
});

const WeatherReport = ({ reports }) => {
  const classes = useStyles();
  return (
    <Fragment>
      {reports.map((report) => {
        return (
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2">
                {`${report.location.city},${report.location.region},${report.location.country}`}
              </Typography>
              <Grid container={classes.root}>
                <Grid item xs={12} sm={12} spacing={6} className={classes.currentReport} alignItems="center">
                  <Grid container direction="row" justify="center" alignItems="center" >
                    <Typography className={classes.pos}>
                      CURRENT WEATHER
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      °C
                    </Typography>
                  </Grid>
                  <Grid item xs container direction="column" spacing={6}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        {report.current_observation.condition.temperature}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {report.current_observation.condition.text}
                      </Typography>
                      {/* <Typography variant="body2" color="textSecondary">
                        code
                      </Typography> */}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <List className={classes.root}>
                    {Object.keys(report.current_observation).map((keyName) => {
                      const notInclude = ['condition', 'pubDate', 'astronomy'];
                      return notInclude.indexOf(keyName) < 0 && (
                        <span>
                          <ListItem key={report.current_observation[keyName]} role={undefined} dense>
                            <ListItemText id={1} primary={keyName} />
                            {keyName === 'wind' && (
                              <span>
                                <ListItemText id={1} secondary={`chill-${report.current_observation[keyName].chill}`} />
                                <ListItemText id={1} secondary={`direction-${report.current_observation[keyName].direction}`} />
                                <ListItemText id={1} secondary={`speed-${report.current_observation[keyName].speed}`} />
                              </span>
                            )}
                            {keyName === 'atmosphere' && (
                              <span>
                                <ListItemText id={1} secondary={`humidity-${report.current_observation[keyName].humidity}`} />
                                <ListItemText id={1} secondary={`visibility-${report.current_observation[keyName].visibility}`} />
                                <ListItemText id={1} secondary={`pressure-${report.current_observation[keyName].pressure}`} />
                                <ListItemText id={1} secondary={`rising-${report.current_observation[keyName].rising}`} />
                              </span>
                            )}
                          </ListItem>
                          <Divider light />
                        </span>
                      );
                    })}
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      })}
    </Fragment>
  );
};

export default WeatherReport;
