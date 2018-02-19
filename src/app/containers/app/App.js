// @flow weak

import React, {
  Component
}                             from 'react';
import PropTypes              from 'prop-types';
import {
  top,
  BackToTop,
  NavigationBar
}                             from '../../components';
import navigationModel        from '../../config/navigation.json';
import MainRoutes             from '../../routes/MainRoutes';

class App extends Component {
  static propTypes = {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,

    // views:
    currentView: PropTypes.string

  };

  state = {
    navModel : navigationModel
  };

  render() {
    const { navModel } = this.state;

    return (
      <div id="appContainer">
        <NavigationBar />
        <div className="container-fluid">
          <MainRoutes />
        </div>
        <BackToTop
          minScrollY={40}
          scrollTo={'appContainer'}
        />
      </div>
    );
  }

  handleLeftNavItemClick = (event, viewName) => {
    // something to do here?
  }

  handleRightNavItemClick = (event, viewName) => {
    // something to do here?
  }
}

export default App;
