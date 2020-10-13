import React from 'react';
import './CompanyInfo.css';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    backgroundColor : ' rgba(255, 255, 255, 0.3)'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    backgroundColor: 'white',
    color   :   'grey'
  },
  descriptionCard:{
      paddingTop : '0'
  }
}));

export default function CompanyInfo(props) {
  const classes = useStyles();
  const {index, expanded} = props;
  const {company, companyLogo, title, startDate, endDate, location, description,alt } = props.companyInfo;

  const handleExpandClick = () => {
    props.handleExpandClick(index);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
        <Avatar variant="square" aria-label="recipe" className={classes.avatar} src={companyLogo}>{alt}</Avatar>
        }
        action={
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
            </IconButton>
          }
        title={company}
        subheader={`${title} | ${startDate} - ${endDate} | ${location}`}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.descriptionCard}>
            <Typography className="companyDescription">{description}</Typography>  
        </CardContent>
      </Collapse>
    </Card>
  );
}

 