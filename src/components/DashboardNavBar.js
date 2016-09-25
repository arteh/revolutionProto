import React from 'react';
import { Link } from 'react-router';

class DashboardNavBar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/dashboard/votes">Votes</Link></li>
          <li><Link to="/dashboard/mp">MP</Link></li>
          <li><Link to="/dashboard/constituency">Constituency</Link></li>
          </ul>
      </nav>
    )
  }
}


export default DashboardNavBar;