import React from 'react';
import CarouselBoard from './CarouselBoard';
import YouVoted from './YouVoted';

class Votes extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="eight columns">
          <CarouselBoard />
        </div>
        <div className="four columns">
          <YouVoted />
        </div>
      </div>
    )
  }
}


export default Votes;