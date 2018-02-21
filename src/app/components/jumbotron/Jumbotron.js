// @flow weak

import React              from 'react';
import PropTypes          from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Jumbotron = (props) => {
  return (
    <div>
      <Grid fluid>
      <Row middle="xs">
          {props.children}
      </Row>
      </Grid>
    </div>
  );
};

Jumbotron.propTypes = {
  children: PropTypes.node
};

export default Jumbotron;
