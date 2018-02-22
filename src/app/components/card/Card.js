// @flow weak

import React              from 'react';
import PropTypes          from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import styles         from './card.scss';

export default class Card extends React.Component {
  render () {
  return (
      <div className={styles.card}>
        <Container>
        <Row>
        <Col xs="4" md="4"><img src="" /></Col>
        <Col xs="8" md="8"><h3>{this.props.title}</h3></Col>
        </Row>
        <Row>
        <Col xs="12" md="12"><h4>{this.props.subtitle}</h4></Col>
        </Row>
        <Row>
        <Col xs="12" md="12"><p>{this.props.description}</p></Col>
        </Row>
        </Container>
      </div>
    );
  }
}
