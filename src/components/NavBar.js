import React from 'react';
import {Link} from 'react-router';


class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Logout</Link>
        </nav>
        ​</div>
    )
  }
}


export default NavBar;