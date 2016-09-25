import React from 'react';
import {Link} from 'react-router';

class Signin extends React.Component {
  render() {
    return (
      <div className="signinpage">
          <h1>Email</h1>
          <h1>Password</h1>
          <button className="button-primary" type="submit">Sign in</button>
          <Link to="/">
            <button className="button-primary">BACK</button>
          </Link>
      </div>
    )
  }
}

export default Signin;

