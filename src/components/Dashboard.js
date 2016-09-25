import React from 'react';
import NavBar from './NavBar';
import Acts from './Acts';
import NameAndLogo from './NameAndLogo';
import DashboardNavBar from './DashboardNavBar';


class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="row">
          <div className="nine columns">
            <span className="nameandlogo">
            <NameAndLogo />
              </span>
            <div>
              <DashboardNavBar />
              {this.props.children}
            </div>
          </div>
          <div className="three columns">
            <Acts />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
