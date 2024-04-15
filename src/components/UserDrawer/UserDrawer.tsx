import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Button, Drawer, Typography } from '@mui/material';
import React, { useState } from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { UserDrawerProps } from '../../../interfaces/UserDrawer';

const UserDrawer = ({isOpen,isLoggedIn,toggleDrawer, user}:UserDrawerProps) => {

  let DrawerContent;
  
  if (isLoggedIn && user) {
    DrawerContent = (
      <Typography variant='h6' component='p'>{user.name}</Typography>
    );
  } else {
    DrawerContent = (
      <Typography variant='h6' component='p' sx={{ textAlign:'center'}}>Sign In with any of the following methods</Typography>
    );
  }

  return (
      <Drawer open={isOpen} onClose={toggleDrawer(false)} data-testid="drawer">
        <Box sx={{ width: 250, px:1, pt:2 }} role="presentation" onClick={toggleDrawer(false)}>
          {DrawerContent}
        </Box>
      </Drawer>
  );
}

export default UserDrawer