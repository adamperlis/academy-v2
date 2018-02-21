// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import { Link }       from 'react-router-dom';
// import classnames     from 'classnames/bind';
import {Jumbotron}    from '../../components';
import AnimatedView   from '../../components/animatedView/AnimatedView';
import styles         from './home.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';

// IMPORTANT: we need to bind classnames to CSSModule generated classes:
// const cx = classnames.bind(styles);

class Home extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,

    // views:
    currentView:  PropTypes.string.isRequired,
    enterHome:    PropTypes.func.isRequired,
    leaveHome:    PropTypes.func.isRequired
  };

  componentDidMount() {
    const { enterHome } = this.props;
    enterHome();
  }

  componentWillUnmount() {
    const { leaveHome } = this.props;
    leaveHome();
  }

  render() {
    return(
      <AnimatedView>
        <Jumbotron>
          <Col xs={12} md={5}>
            <Row>
              <Col xs={6}>
                <p>Think Better, Build Better with UX & Design Thinking</p>
              </Col>
            </Row>
          </Col>
          <Col xs={4} md={3}>
            <div className={styles.carouselSmall}></div>
          </Col>
          <Col xs={8} md={4}>
          <div className={styles.carouselLarge}></div>
          </Col>
        </Jumbotron>
      </AnimatedView>
    );
  }
}

export default Home;
