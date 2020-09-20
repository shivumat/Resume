import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Navigation from '../navigation/Navigation'
import Logo from '../logo/Logo'
import './SideBar.css'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  menuButton : {
    backgroundColor : 'black'
  }
});

export default function TopAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Navigation/>
    </div>
  );

  return (
    <div>
        <React.Fragment>
          <AppBar position="static" className="topAppBar">
            <Toolbar className={classes.menuButton}>
              <Button onClick={toggleDrawer('left', true)}><Logo/></Button>
            </Toolbar>
          </AppBar>
          <Drawer PaperProps={{className : classes.menuButton}} anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
