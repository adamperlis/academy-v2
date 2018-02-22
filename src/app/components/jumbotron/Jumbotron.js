// @flow weak

import React              from 'react';
import PropTypes          from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import styles         from './jumbotron.scss';
import {SlickCarousel}    from '../../components';

const Jumbotron = (props) => {
  return (
    <div className={styles.vwrapper}>
      <Row noGutters className={styles.vrow}>
      <Col xs="12" md="5" className={styles.vcol}>
        <Row className="align-items-center">
          <Col xs="12" md="12">
              <p>Think Better, Build Better with UX & Design Thinking</p>
          </Col>
        </Row>
      </Col>

      <Col xs="4" md="3" className={styles.carouselSmall}>
        <Row className="align-items-center">
          <Col xs="12" md="12">
            <SlickCarousel />
          </Col>
        </Row>
      </Col>

      <Col xs="8" md="4" className={styles.carouselLarge}>
        <Row className="align-items-center">
          <Col xs="12" md="12">
            <SlickCarousel />
          </Col>
        </Row>
      </Col>

      </Row>
      {props.children}
    </div>
  );
};

Jumbotron.propTypes = {
  children: PropTypes.node
};

export default Jumbotron;
