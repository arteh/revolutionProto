import React from 'react';
import {Link} from 'react-router';
import NameAndLogo from './NameAndLogo';
const img = require('../img/UKMap.png');
const ROOT = require('../config').ROOT;


class LandingPage extends React.Component {
  render() {
    // TODO: switch signin link back to go to signin page!!!!!!!
    return (
      <div className="row">
        <div className="eight columns">
          <span>
               <img src={`${ROOT}${img}`} className="map"/>
          </span>
        </div>
        <div className="four columns">
          <div className="row">
            <NameAndLogo/>
          </div>
          <div className="row">
            <Link to='/dashboard'>
              <button className="button-primary">Sign in</button>
            </Link>
          </div>
          <div className="row">
            <Link to='/signup'>
              <button className="button button-primary">Sign up</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
