// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import { Link }       from 'react-router-dom';
// import classnames     from 'classnames/bind';
import {
  Jumbotron,
  Card,
  WorkshopCard,
  NewsCard
}                              from '../../components';
import AnimatedView            from '../../components/animatedView/AnimatedView';
import styles                  from './home.scss';
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
              <Link
                className="link"
                to={'#'}>
                See More
              </Link>
              <h6>PROUD PARTNERS OF <img /><img /></h6>

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

          <Row>
            <Col xs="12" md="9"></Col>
            <Col xs="12" md="2"><h1>Upcoming</h1><br></br><h2>Workshops</h2></Col>
            <Col xs="12" md="1"></Col>
          </Row>
          <Row>
            <Col xs="12" md="1"></Col>
            <Col xs="12" md="5">
              <WorkshopCard title="Design Sprint Workshop" month="February" day="4" description="In this jam-packed workshop, you’ll learn and master the tools, techniques, and framework used by teams at Google Ventures, Slack, Uber, and more, to facilitate breakthrough ideas, solve challenges, and validate solutions." />
            </Col>
            <Col xs="12" md="5">
              <WorkshopCard title="Design Sprint Workshop" month="March" day="20" description="In this jam-packed workshop, you’ll learn and master the tools, techniques, and framework used by teams at Google Ventures, Slack, Uber, and more, to facilitate breakthrough ideas, solve challenges, and validate solutions." />
            </Col>
            <Col xs="12" md="1"></Col>
          </Row>

          <Row>
            <Col xs="12" md="1"></Col>
            <Col xs="12" md="2"><h1>Blog/</h1><br></br><h2>Press</h2></Col>
            <Col xs="12" md="9"></Col>
          </Row>
          <Row>
            <Col xs="12" md="1"></Col>
            <Col xs="12" md="3">
              <NewsCard title="Product Relays™" description="Product Relays are a framework that combines Design Sprints with a Modified Agile Sprints helping teams collaborate and work more efficiently together." />
            </Col>
            <Col xs="12" md="3">
              <NewsCard title="Time waits for no-one" description="See the feature writtne about our CEO, Adam Perlis for Tech Open Air’s publication TOA.life.. He addresses questions on UX, Career and Happiness." />
            </Col>
            <Col xs="12" md="3">
              <NewsCard title="SXSW 2017" description="See our CEO, Adam Perlis speaking on Design Sprint and How to Transform Your Organization at SXSW." />
            </Col>
            <Col xs="12" md="2">
              <Link
                className="link"
                to="#">
                See More
              </Link>
            </Col>
          </Row>

        </Container>
      </AnimatedView>
    );
  }
}

export default Home;
