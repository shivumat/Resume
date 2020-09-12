import React from 'react';
import './Navigation.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function NavigationItem(props){
    return(
        <React.Fragment>
            <ListItem button className="navigationItem">
              <ListItemLink href={props.link}>
                <ListItemText primary={props.label} disableTypography="true" 
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

export default function Navigation() {

  return (
    <div className="navigation">
      <List component="nav">
          <NavigationItem link="/" label="Home"/>
          <NavigationItem link="/About" label="About"/>
          <NavigationItem link="/Skills" label="Skills"/>
          <NavigationItem link="/Experience" label="Experience"/>
          <NavigationItem link="/Education" label="Education"/>
          <NavigationItem link="/Contact" label="Contact"/>
      </List>
    </div>
  );
}
