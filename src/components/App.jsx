import React, { Component, Link } from 'react';
import Profile from './Profile.jsx';
import Signin from './Signin.jsx';
import {
  isSignInPending,
  isUserSignedIn,
  redirectToSignIn,
  handlePendingSignIn,
  signUserOut,
} from 'blockstack';
import {Route, Switch
} from 'react-router-dom';
import NavBar from './NavBar.js'
import Home from '../containers/Home.js'
import DoctorContainer from '../containers/DoctorContainer.jsx'


export default class App extends Component {

  constructor(props) {
  	super(props);
  }

  handleSignIn(e) {
    e.preventDefault();
    redirectToSignIn();
  }

  handleSignOut(e) {
    e.preventDefault();
    signUserOut(window.location.origin);
  }

  // <React.Fragment>
  render() {
    return (
        <div className="site-wrapper">
        <NavBar/>
            <div className="site-wrapper-inner">
              { !isUserSignedIn() ?
                <Signin handleSignIn={ this.handleSignIn } />
                :
                <Switch>
                  <Route path="/home" component={Home}/>
                  <Route path="/doctors" component={DoctorContainer}/>
                  <Route path="/profile" component={Profile}/>

                  <Route
                    path='/:username?'
                    render={
                      routeProps => <Profile handleSignOut={ this.handleSignOut } {...routeProps} />
                    }
                  />

                </Switch>
              }
            </div>
          </div>
    )
  }
  // </React.Fragment>

  // { !isUserSignedIn() ?
  //     <Signin handleSignIn={ this.handleSignIn } />
  //     : <Home/>
  // }

  componentWillMount() {
    if (isSignInPending()) {
      handlePendingSignIn().then((userData) => {
        window.location = window.location.origin;
      });
    }
  }
}
