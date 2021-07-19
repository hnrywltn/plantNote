import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import NavigationCSS from './Navigation.module.css';

import { useState, useEffect } from 'react';




function Navigation({ isLoaded }){
  const location = useLocation();
  const [hideNav, setHideNav] = useState('hideNavbar');
  // console.log(location);

  const isHidden = location.pathname === '/SplashPage' ? 'hideNavbar' : 'navbar';

  useEffect(() => {
    setHideNav(isHidden);
  }, [isHidden]);

  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }



  return (
    <div className={hideNav}>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
