import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import useStyles from './components/styles';

import {
  Actors,
  MovieInformation,
  Movies,
  NavBar,
  Profile,
} from './components';
import { ActorsPage, MovieInfoPage, MoviesPage, ProfilePage } from './pages';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInfoPage />} />
          <Route path="/actors/:id" element={<ActorsPage />} />
          <Route exact path="/" element={<MoviesPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
