import React from 'react';
import PropTypes from 'react';

function Color({ match }) {
  const matchedColor = match.params.color;
  return <div style={{ backgroundColor: matchedColor, width: 100, height: 100 }}></div>;
}


export default Color;
