import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

const theme = createTheme({});
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </ThemeProvider>,
);
