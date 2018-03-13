import React              from 'react';
import PropTypes          from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import styles         from './workshopCard.scss';

export default class WorkshopCard extends React.Component {
  render () {
  return (
      <div className={styles.card}>
        <Container>
        <Row>
          <Col xs="8" md="8">
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
          </Col>
          <Col xs="4" md="4">
            <Col xs="8" md="8">
              <h7>{this.props.month}</h7>
              <h8>{this.props.day}</h8>
            </Col>
            <Col xs="4" md="4">
              <i></i>
            </Col>
            <div className="btn">BUY TICKET</div>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}
