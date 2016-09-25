import React from 'react';
const img = require('../img/Theresapic.png');
const ROOT = require('../config').ROOT;

class MPImage extends React.Component {
  render () {
    return (
      <div>
      <img className="mppic" src={`${ROOT}${img}`} />
    </div>
    )
  }
}


export default MPImage;