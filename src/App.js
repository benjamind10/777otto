import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import DrawGames from './components/pages/DrawGames';
import Products from './components/pages/Products';
import ScrollToTop from './components/ScrollToTop';
import SignInAndSingUpPage from './components/pages/sign-in-and-sign-up.component';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Router>
          <Navbar currentUser={this.state.currentUser} />
          <Switch>
            <ScrollToTop>
              <Route path="/" exact component={Home} />
            </ScrollToTop>
          </Switch>
          <Switch>
            <Route path="/draw-games" component={DrawGames} />
            <Route path="/products" component={Products} />
            <Route path="/login" component={SignInAndSingUpPage} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
