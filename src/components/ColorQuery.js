import React from 'react';
import PropTypes from 'prop-types';
const queryString = require('query-string');

function ColorQuery() {

  const matchedColor = queryString.parse(location.search);
  return <div style={{ backgroundColor: matchedColor.color, width: 100, height: 100 }}></div>;
}

ColorQuery.propTypes = {
  match: PropTypes.shape({
    color: PropTypes.string
  })
};

export default ColorQuery;
