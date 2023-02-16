import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/styles';

import useStyle from './styles';

const NavBar = () => {
  console.log('NavBar');
  const classes = useStyle();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        {isMobile && (
          <IconButton color="inherit" edge="start" style={{ outline: 'none' }} onClick={() => {}} className={classes.menuButton}>
            <Menu />
          </IconButton>
        )}
        <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 /> }

        </IconButton>
        {!isMobile && 'Search...'}
        <div>
          {!isAuthenticated ? (
            <Button color="inherit" onClick={() => {}}>Login &nbsp; <AccountCircle />  </Button>
          ) : (
            <Button
              color="inherit"
              component={Link}
              to="/profile/:id"
              className={classes.linkButton}
              onClick={() => {}}
            >
              {!isMobile && <>My Movies &nbsp;  </>}
              <Avatar
                style={{ width: 30, height: 30 }}
                alt="profile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpWvXdcjNuTkrkDCYKZRtWwZ-emiiDJdP6sUb7VRshRA&s"
              />
            </Button>
          )}
        </div>
        {isMobile && 'Search...'}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
