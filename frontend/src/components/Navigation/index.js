import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import NavigationCSS from './Navigation.module.css';
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
        <div><ProfileButton user={sessionUser} /></div>
    );
  if(location.pathname === '/plants' || location.pathname === '/todos' || location.pathname === '/plants/add'){
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
        <Link to="/plants/add" className='addPlant'>
          <div>
            +
          </div>
        </Link>
        <Link to="/todos" className='toDoList noDec sideBar'>
          <div>
            ToDo List
          </div>
        </Link>
      </>
    );
  }
  } else {
    sessionLinks = (
      <>
        <Link to="/login" className='login noDec sideBar'>
          <div>
            Login
          </div>
        </Link>
        <Link to="/signup" className='signup noDec sideBar'>
          <div>
            Sign Up
          </div>
        </Link>

      </>
    );
  }



  return (
    <div className={hideNav}>
      <Link to="/plants" className='home noDec sideBar'>
        <div>
          Home
        </div>
      </Link>


      {isLoaded && sessionLinks}

    </div>
  );
}

export default Navigation;
