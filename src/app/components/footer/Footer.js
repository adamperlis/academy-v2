import React              from 'react';
import PropTypes          from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { Link }       from 'react-router-dom';
import styles         from './footer.scss';

export default class Footer extends React.Component {
  render () {
  return (
      <div className={styles.footer}>
      <Row>
          <Col xs="4" md="4">
            <img src="" />
            <p> | UX & Design Thinking Studio</p><br></br>
            <h4>130 GRAND ST. SUITE #3D | BROOKLYN, NY 11249</h4>
          </Col>
          <Col xs="4" md="4"></Col>
          <Col xs="4" md="4">
            <Link
              className="link"
              to="#">
              About
            </Link>
            <Link
              className="link"
              to="#">
              Blog
            </Link>
            <Link
              className="btn link"
              to="#">
              Contact Us
            </Link>
            <i></i>
          </Col>
        </Row>
      </div>

    );
  }
}
