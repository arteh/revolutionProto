import React from 'react';
const img = require('../img/logo.png');
const ROOT = require('../config').ROOT;


class NameAndLogo extends React.Component {
  render() {
    return (
      <span className="nameandlogo">
        <h3>Revolution</h3>
        <img src={`${ROOT}${img}`}/>
          </span>
    )
  }
}


export default NameAndLogo;

