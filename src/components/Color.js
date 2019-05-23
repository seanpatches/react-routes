import React from 'react';
import PropTypes from 'prop-types';

function Color({ match }) {
  const matchedColor = match.params.color;
  return <div style={{ backgroundColor: matchedColor, width: 100, height: 100 }}></div>;
}

Color.propTypes = {
  match: PropTypes.shape({
    color: PropTypes.string
  })
};

export default Color;
