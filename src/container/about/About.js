import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  about: {
    height: "100%",
    backgroundColor: "#bdb390"
  }
});

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.about}></div>
  );
}

