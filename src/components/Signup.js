import React from 'react';
import { Link } from 'react-router';

class Signup extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div className="row">
            <div className="six columns">
              <label for="exampleEmailInput">Your email</label>
              <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput"/>
            </div>
              <div className="six columns">
                <label for="exampleNameInput">Your name</label>
                <input className="u-full-width" type="name" placeholder="name" id="exampleNameInput"/>
              </div>
          </div>
          <div className="row">
            <div className="six columns">
              <label for="examplePasswordInput">Password</label>
              <input className="u-full-width" type="password" placeholder="password" id="examplePasswordInput"/>
            </div>
            <div className="six columns">
              <label for="exampleRetypePasswordInput">Retype Password</label>
              <input className="u-full-width" type="password" placeholder="retype password" id="exampleRetypePassword"/>
            </div>
          </div>
          <input className="button-primary" type="submit" value="Submit"/>
        </form>
        <Link to='/'>
          <button className="button button-primary">Back</button>
        </Link>
      </div>
    )
  }
}

export default Signup;

