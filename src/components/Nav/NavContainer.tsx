'use client'
import React from 'react'
import Nav from './Nav';
import useAppState from '@/global state management/useAppState';
import useAppDispatch from '@/global state management/useAppDispatch';

const NavContainer = () => {
  const { isLoggedIn } = useAppState();
  const dispatch = useAppDispatch;


  return (
    <Nav isLoggedIn={isLoggedIn}/>
  )
}

export default NavContainer;