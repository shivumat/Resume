import React from 'react';
import './Navigation.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Social from '../social/Social'
import {routes} from '../../../../static/data/routes'

function NavigationItem(props){
    return(
        <React.Fragment>
            <ListItem button className="navigationItem">
              <ListItemLink index = {props.index} 
                  onClick={() => {props.handleChange(props.index); props.handleSkillChange("")}}>
                <ListItemText primary={props.label} disableTypography={true}
                    className="navigationLabel"/>
              </ListItemLink>
            </ListItem>
            <Divider className="navigationDivider"/>
        </React.Fragment>
    )
}

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

export default function Navigation(props) {

  return (
    <div className="navigation">
      <List component="nav">
        {routes.map((route,i) => <NavigationItem key={i} index={i} handleChange={props.handleChange}
                   handleSkillChange={props.handleSkillChange} label={route.label}/>)}
      </List>
      
      <Social/>
    </div>
  );
}
