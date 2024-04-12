'use client'
import React from 'react'
import Nav from './Nav';
import useAppState from '@/global state management/useAppState';

const NavContainer = () => {
  const { isLoggedIn } = useAppState();

  return (
    <Nav isLoggedIn={isLoggedIn}/>
  )
}

export default NavContainer;