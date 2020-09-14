import React from 'react';
import './Navigation.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import routes from '../../static/routes/routes'

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
        {routes.map((route,i) => <NavigationItem link={route.link} label={route.label}/>)}
      </List>
    </div>
  );
}
