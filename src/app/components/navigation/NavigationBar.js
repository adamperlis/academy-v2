import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import ShortText from 'material-ui/svg-icons/editor/short-text';

export default class NavigationBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {open:false};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
    console.log("open")
   }

  handleClose() { this.setState({open: false}); }
        render() {

            return (
                <div>
                <Drawer
                  docked={false}
                  open={this.state.open}
                  width={600}
                  openSecondary={true}
                  onRequestChange={(open) => this.setState({open})}
                  >

                  <MenuItem>
                    <Link
                    onTouchTap={this.handleClose.bind(this)}
                    className=""
                    to={'/'}>
                    Home
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                    onTouchTap={this.handleClose.bind(this)}
                    className=""
                    to={'/about'}>
                    About
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                    onTouchTap={this.handleClose.bind(this)}
                    className=""
                    to={'/'}>
                    Home
                    </Link>
                  </MenuItem>
                  </Drawer>

            <AppBar
            style={{backgroundColor: 'rgba(0,0,0,0)', boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px', position:'absolute'}}
            title={
                  <Link
                  className="nav-logo"
                   to={'/'}>
                  <img src='' height="24px"/>
                  Academy
                  </Link>
                }
                iconElementRight={<IconButton><ShortText /></IconButton>}
                iconElementRightStyle={{color:'black'}}
                showMenuIconButton={false}
                onRightIconButtonClick={this.handleToggle.bind(this)}
            />
                </div>
            );
        }
    }
