'use client'
import React from 'react'
import UserDrawer from './UserDrawer';
import useAppState from '@/global state management/useAppState';
import useAppDispatch from '@/global state management/useAppDispatch';
import { APP_ACTIONS } from '@/global state management/appReducer';

const UserDrawerContainer = () => {
  const { isOpen } = useAppState().Drawer;
  const dispatch = useAppDispatch();

  const toggleDrawer = (newOpen: boolean) => () => {
    const { SET_IS_OPEN } = APP_ACTIONS;
    dispatch({
      type:SET_IS_OPEN,
      payload:newOpen
    });
  };

  return (
    <UserDrawer 
      isOpen={isOpen}
      toggleDrawer={toggleDrawer}
    />
  )
}

export default UserDrawerContainer;