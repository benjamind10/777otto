import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DrawGames from './components/pages/DrawGames';
import Products from './components/pages/Products';
import ScrollToTop from './components/ScrollToTop';
import SignInAndSingUpPage from './components/pages/sign-in-and-sign-up.component';

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

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
          <Route path="/login" component={SignInAndSingUpPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
