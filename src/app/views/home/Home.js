// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import { Link }       from 'react-router-dom';
// import classnames     from 'classnames/bind';
import {Jumbotron, Card}    from '../../components';
import AnimatedView   from '../../components/animatedView/AnimatedView';
import styles         from './home.scss';
import { Container, Row, Col } from 'reactstrap';

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
        <Jumbotron />

        <Container fluid>

          <Row>
            <Col xs="11" md="11" className={styles.navCards}>
              <Col xs="1" md="1"></Col>
              <Col xs="3" md="3">
                <Card title="Work" subtitle="Product Design + Development" description="We have worked with some of the biggest companies on the planet and our work has been featured on Awwwards, TheFWA, and TechCrunch."/>
              </Col>
              <Col xs="3" md="3">
                <Card title="Our Process" subtitle="Product Relays™" description="Our team of highly skilled experts can train your team on how to apply UX & Design Thinking principles into your product design and development processes."/>
              </Col>
              <Col xs="3" md="3">
                <Card title="Consulting" subtitle="Training" description="We believe in a Design Thinking first approach to product design and development. Our process is human centered, democratic and data-driven."/>
              </Col>
            </Col>
            <Col xs="1" md="1">
            </Col>
          </Row>

          <Row>
            <Col xs="6" md="6" className={styles.borderRight}>
              <img src="" />
            </Col>

            <Col xs="6" md="6">
            <h1>Our Work</h1><br></br><h2>is Human Centered</h2>
              <Link
                className="link"
                to={'#'}>
                See Our Work
              </Link>
            </Col>
          </Row>

          <Row className={styles.sectionDividerLightGray}>
            <Col xs="12" md="12"  className={styles.center}>
              <Col xs="12" md="8">
                <img src="" />
                <h1>Our Process</h1><br></br><h2>is Collaborative</h2>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="12"  className={styles.center}>
              <Col xs="12" md="4">
                  <p>Our belief is that working with people from a diverse set of skills leads to building better products. Our religion is Design Thinking and Our process is Product Relays™.</p>
                  <Link
                    className="link"
                    to={'#'}>
                    See More
                  </Link>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col xs="1" md="1"></Col>
            <Col xs="3" md="3">
              <h1>Consulting,</h1><br></br><h2>Learning, & Doing</h2>
              <p>We provide a range of consulting opportunities that are custom fit to your organization. Whether thats providing expertise in UX/UI Design, Research, Prototyping, Testing, Development, Product Management, and Analytics or training your teams with our Workshops and Bootcamps. We work right along side you acting as an extension to your internal team.</p>

              <Link
                className="link"
                to={'#'}>
                See More
              </Link>

            </Col>
            <Col xs="1" md="1"></Col>
            <Col xs="6" md="6">
              <Row>
                <Col xs="2" md="2">
                  <img src="" />
                  <h4>Workshops</h4>
                </Col>
                <Col xs="10" md="10">
                  <p>Join top design leaders, project managers, developers, and innovators for a full-day workshop on mastering design sprints—led by sprint master Adam Perlis.</p>
                </Col>
                </Row>
                <Row>
                  <Col xs="2" md="2">
                    <img src="" />
                    <h4>Bootcamps</h4>
                  </Col>
                  <Col xs="10" md="10">
                    <p>This two week bootcamp is built for product teams of 5-7 people. The bootcamp will be customized and centered around solving a real challenge your product is facing.</p>
                  </Col>
                  </Row>
                  <Row>
                    <Col xs="2" md="2">
                      <img src="" />
                      <h4>Special Ops</h4>
                    </Col>
                    <Col xs="10" md="10">
                      <p>Our teams will work side by side running Design Sprints and building products that endure.</p>
                    </Col>
                    </Row>
              </Col>
            <Col xs="1" md="1"></Col>
          </Row>



        </Container>
      </AnimatedView>
    );
  }
}

export default Home;
