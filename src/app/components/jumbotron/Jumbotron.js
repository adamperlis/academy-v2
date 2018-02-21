// @flow weak

import React              from 'react';
import PropTypes          from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import styles         from './jumbotron.scss';

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
      </Col>

      <Col xs="8" md="4" className={styles.carouselLarge}>
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
