import React from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from "react-router-dom";

import SplashPageCSS from './SplashPage.module.css';


function SplashPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sessionActions.login({
       credential: 'Demo-lition',
       password:'password'
      }));
    history.push('/plants');
  }

  const sessionUser = useSelector(state => state.session.user);

  let homeBttn = null;

  // if (sessionUser) {
  //   homeBttn = (
  //     <Link to="/plants" className={SplashPageCSS.splashHome}>
  //       <div>
  //         <h2>HOME</h2>
  //       </div>
  //     </Link>
  //   ) } else {
  //   homeBttn = (
  //     <Link to="/login" className={SplashPageCSS.splashHome}>
  //       <div>
  //         <h2>HOME</h2>
  //       </div>
  //     </Link>
  //     )
  //   }


  return (

    <div className={SplashPageCSS.splashPageContainer}>


      <div className={SplashPageCSS.titleContainer}>
        <h1 className={SplashPageCSS.title}>Plant Note</h1>
      </div>


      <div className={SplashPageCSS.splashAbout}>
        <p className={SplashPageCSS.description}>
        PlantNote is a web application that allows you to track your plants' health and find what they need to grow. Build your PlantNote collection by adding your own notes for specific plants and stay organized by adding things to your todo list.
        </p>
      </div>



      {/* {homeBttn} */}


      <Link to="/signup" className={SplashPageCSS.splashSignUp}>
        <div>
        <h2>SIGN-UP</h2>
        </div>
      </Link>


      <Link to="/login" className={SplashPageCSS.splashLogin}>
        <div>
          <h2>LOG-IN</h2>
        </div>
      </Link>



      <div className={SplashPageCSS.demo}>
        <button type='button' onClick={handleSubmit}>DEMO</button>
      </div>




    </div>
  );
}

export default SplashPage;
