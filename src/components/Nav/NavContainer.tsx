'use client'
import React from 'react'
import Nav from './Nav';
import useAppState from '@/global state management/useAppState';
import { APP_ACTIONS } from '@/global state management/appReducer';
import useAppDispatch from '@/global state management/useAppDispatch';

const NavContainer = () => {
  const { isLoggedIn } = useAppState();
  const dispatch = useAppDispatch();

  const handleHamburgerClick = () => {
      const { SET_IS_OPEN } = APP_ACTIONS;
      dispatch({
        type:SET_IS_OPEN,
        payload:true
      });
  }

  return (
    <Nav 
      isLoggedIn={isLoggedIn}
      handleHamburgerClick={handleHamburgerClick}
    />
  )
}

export default NavContainer;