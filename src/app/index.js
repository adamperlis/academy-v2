// @flow weak

import React                from 'react';
import {render}             from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTpEventPlugin  from 'react-tap-event-plugin';
import { AppContainer }     from 'react-hot-loader';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import 'animate.css';
// import 'jquery';
// import 'font-awesome/css/font-awesome.min.css';s
import 'bootstrap/dist/css/bootstrap.css';
import styles from './style/index.scss';
import Root from './Root';

// smoothscroll polyfill
smoothScrollPolyfill.polyfill();
// force polyfill (even if browser partially implements it)
window.__forceSmoothScrollPolyfill__ = true;

const ELEMENT_TO_BOOTSTRAP  = 'root';
const BootstrapedElement    = document.getElementById(ELEMENT_TO_BOOTSTRAP);

injectTpEventPlugin();

const renderApp = RootComponent => {
  render(
    <MuiThemeProvider>
      <AppContainer
        warnings={false}
      >
        <RootComponent className={styles.root} />
    </AppContainer>
    </MuiThemeProvider>,
    BootstrapedElement
  );
};

renderApp(Root);

if (module.hot) {
  module.hot.accept(
    './Root',
    () => {
      const RootComponent = require('./Root').default;
      renderApp(RootComponent);
    }
  );
}
