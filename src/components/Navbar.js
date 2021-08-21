import React, { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { auth } from '../firebase/firebase.utils';
import { ReactComponent as Logo } from '../images/crown.svg';

function Navbar({ currentUser }) {
  const [click, setClick] = useState(false);

  // Unused code after implementing firebase will keep for the record.

  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Unused code after implementing firebase will keep for the record.

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            777otto
            <Logo className="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/draw-games"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                DRAW GAMES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                PRODUCTS
              </Link>
            </li>

            <li>
              {currentUser ? (
                <div
                  className="nav-links"
                  onClick={() => {
                    closeMobileMenu();
                    auth.signOut();
                  }}
                >
                  SIGN OUT
                </div>
              ) : (
                <Link
                  className="nav-links"
                  to="/login"
                  onClick={closeMobileMenu}
                >
                  SIGN IN
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
