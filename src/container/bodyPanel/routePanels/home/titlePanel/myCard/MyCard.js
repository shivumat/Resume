import React from 'react';
import titleImage from '../../../../../..//static/images/titleImage.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: "30%",
    marginLeft: "35%",
    opacity: 0.75,
  }
});

export default function MyCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised={true}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Shivank Mathur"
          height="50%"
          src={titleImage}
          title="Yeah, that's me!"
        />
      </CardActionArea>
    </Card>
  );
}

