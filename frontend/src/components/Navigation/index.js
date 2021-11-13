import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import { useSelector, useDispatch } from 'react-redux';
// import NavigationCSS from './Navigation.module.css';
import { useState, useEffect } from 'react';


import {getTodos} from '../../store/todos.js';



function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const location = useLocation();
  const [hideNav, setHideNav] = useState('hideNavbar');
  // console.log(location);

  const isHidden = (location.pathname === '/SplashPage' || location.pathname === '/') ? 'hideNavbar' : 'navbar';

  const sessionUser = useSelector(state => state.session.user);





  useEffect(() => {
    dispatch(getTodos());
    setHideNav(isHidden);
  }, [isHidden]);


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
        <div><ProfileButton user={sessionUser} /></div>
    );
  if(location.pathname === '/plants' || location.pathname === '/todos' || location.pathname === '/plants/add' || /[0-9]+/.test(location.pathname) || location.pathname === '/todos'){
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

    let homeBttn = null;

  if (sessionUser) {
    homeBttn = (
      <Link to="/plants" className='home noDec sideBar'>
        <div>
          Home
        </div>
      </Link>
    ) } else {
    homeBttn = (
      <Link to="/login" className='home noDec sideBar'>
        <div>
          Home
        </div>
      </Link>
      )
    }



  return (
    <div className={hideNav}>
      {homeBttn}


      {isLoaded && sessionLinks}

    </div>
  );
}

export default Navigation;
