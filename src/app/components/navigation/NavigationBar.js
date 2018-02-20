import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ShortText from 'material-ui-icons/ShortText';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  }
};

class ButtonAppBar extends React.Component {
  state = {
    top: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

render() {
  const { classes } = this.props;

  const fullList = (
    <div className={classes.listFull}>
    <MenuItem>
    <Link
      onTouchTap={this.toggleDrawer('top', false)}
      className=""
      to={'/'}>
      Home
      </Link>
    </MenuItem>
    <Divider />
    <MenuItem>
    <Link
      onTouchTap={this.toggleDrawer('top', false)}
      className=""
      to={'/about'}>
      About
      </Link>
    </MenuItem>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {fullList}
          </div>
        </Drawer>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          <Button color="inherit">Work</Button>
          <Button color="inherit">Our Process</Button>
          <Button color="inherit">Consulting</Button>
          <IconButton onClick={this.toggleDrawer('top', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
            <ShortText />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

// import React from 'react';
// import { Link } from 'react-router-dom';
// import AppBar from 'material-ui/AppBar';
// import Drawer from 'material-ui/Drawer';
// import IconButton from 'material-ui/IconButton';
// import FlatButton from 'material-ui/FlatButton';
// import MenuItem from 'material-ui/MenuItem';
// import {grey900} from 'material-ui/styles/colors';
// import ShortText from 'material-ui/svg-icons/editor/short-text';
//
// export default class NavigationBar extends React.Component {
//
//   constructor(props){
//     super(props);
//     this.state = {open:false};
//   }
//
//   handleToggle() {
//     this.setState({open: !this.state.open});
//     console.log("open")
//    }
//
//   handleClose() { this.setState({open: false}); }
//         render() {
//
//             return (
//                 <div>
//                 <Drawer
//                   docked={false}
//                   open={this.state.open}
//                   width={600}
//                   openSecondary={true}
//                   onRequestChange={(open) => this.setState({open})}
//                   >
//
//                   <MenuItem>
//                     <Link
//                     onTouchTap={this.handleClose.bind(this)}
//                     className=""
//                     to={'/'}>
//                     Home
//                     </Link>
//                   </MenuItem>
//                   <MenuItem>
//                     <Link
//                     onTouchTap={this.handleClose.bind(this)}
//                     className=""
//                     to={'/about'}>
//                     About
//                     </Link>
//                   </MenuItem>
//                   <MenuItem>
//                     <Link
//                     onTouchTap={this.handleClose.bind(this)}
//                     className=""
//                     to={'/'}>
//                     Home
//                     </Link>
//                   </MenuItem>
//                   </Drawer>
//
//             <AppBar
//             style={{backgroundColor: 'rgba(0,0,0,0)', boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px', position:'absolute'}}
//             title={
//                   <Link
//                   className="nav-logo"
//                    to={'/'}>
//                   <img src='' height="24px"/>
//                   Academy
//                   </Link>
//                 }
//                 iconElementRight={<IconButton><ShortText color={grey900} /></IconButton>}
//                 showMenuIconButton={false}
//                 onRightIconButtonClick={this.handleToggle.bind(this)}
//             />
//                 </div>
//             );
//         }
//     }
