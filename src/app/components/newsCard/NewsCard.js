import React              from 'react';
import PropTypes          from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { Link }       from 'react-router-dom';
import styles         from './newsCard.scss';

export default class NewsCard extends React.Component {
  render () {
  return (
      <div className={styles.newscard}>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <Link
              className="link"
              to="#">
              Read
            </Link>
      </div>
    );
  }
}
