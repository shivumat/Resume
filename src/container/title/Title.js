import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    h2: {
      marginTop: 2,
      color: "#3f3f3f"
    },
    h4: {
      marginBottom: 2,
      color: "#3f3f3f"
    },
    h6: {
      marginTop: 2,
      marginBottom: 2,
      color: "#3f3f3f"
    },
    hr: {
      width: "30%",
      borderColor: "#3f3f3f",
      borderStyle: "solid"
    }
  }));

export default function Title() {
  const classes = useStyles();

  return (
    <div>
        <h4 className={classes.h4}>Hello, I'm</h4>
        <h2 className={classes.h2}>Shivank Mathur</h2>
        <hr className={classes.hr}/>
        <h6 className={classes.h6}>Software | Web Developer</h6>
        <hr className={classes.hr}/>
    </div>
  );
}

