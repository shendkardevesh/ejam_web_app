import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import CommentIcon from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Cities = ({ list, toggleCity, fetchWeatherReport }) => {
  const classes = useStyles();

  const handleToggle = (value) => () => {
    toggleCity(value)
  };

  const disableButton = () => {
    return !!list.find(item => item.selected);
  };

  const getWeatherReport = () => {
    const selectedCities = list.filter(item => item.selected).map(item => item.name);
    const stringifyCities = JSON.stringify(selectedCities)
    fetchWeatherReport(stringifyCities);
  }

  return (
    <Fragment>
      <List className={classes.root}>
        {list.map((value) => {
          const labelId = `checkbox-list-label-${value.name}`;

          return (
            <ListItem key={value.name} role={undefined} dense onClick={handleToggle(value)} >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={value.selected}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.name} />
            </ListItem>
          );
        })}
      </List>
      <div>
        <Button size="small" variant="contained" color="primary" disabled={!disableButton()} onClick={getWeatherReport}>
          Weather Report
        </Button>
      </div>
    </Fragment>
  );
};

export default Cities;
