import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';

import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import DrawGames from './components/pages/DrawGames';
import Products from './components/pages/Products';
import ScrollToTop from './components/ScrollToTop';
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up.component';
import { setCurrentUser } from './redux/user/user.actions';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <ScrollToTop>
              <Route path="/" exact component={Home} />
            </ScrollToTop>
          </Switch>
          <Switch>
            <Route path="/draw-games" component={DrawGames} />
            <Route path="/products" component={Products} />
            <Route
              exact
              path="/login"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Switch>
        </Router>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
