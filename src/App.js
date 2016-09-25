import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Votes from './components/Votes';
import MP from './components/MP';
import Constituency from './components/Constituency';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={LandingPage}/>
          <Route path='/signin' component={Signin}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/dashboard' component={Dashboard}>
            <IndexRoute component={Votes} />
            <Route path='/dashboard/votes' component={Votes}/>
            <Route path='/dashboard/mp' component={MP}/>
            <Route path='/dashboard/constituency' component={Constituency}/>
          </Route>
        </Route>
      </Router>
    )
  }
}

//*******MAKE SURE YOU ARE RUNNING EXPRESS AND WEBPACK --WATCH*********

export default App;
