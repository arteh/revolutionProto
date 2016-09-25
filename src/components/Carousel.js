import React from 'react';
const img1 = require('../img/democarousel.png');
const ROOT = require('../config').ROOT;

class Carousel extends React.Component {
  render() {
    return (
      <div className="Carousel">
        <h3>You haven't Voted on...</h3>
        <img src={`${ROOT}${img1}`} />
        <h5>Your MP Voted...[YES]</h5>
        <h5>Your Constituency Voted...</h5>
      </div>
    )
  }
}


export default Carousel;

