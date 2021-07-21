import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
// import {getUsers} from '../../store/session';




function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  // const users = useSelector(state => state.session.user);



  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    // dispatch(getUsers());
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);




  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };



  return (
    <>
      <button onClick={openMenu} className={!showMenu ? 'profileBttn' : 'smallBttn'} style={ { backgroundImage: `url(${user.profileImg})`} }>
        {user.username}
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <div>{user.username}</div>
          <div>{user.email}</div>
          <div>
            <button onClick={logout} className='logOut'>Log Out</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
