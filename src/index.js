import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: amber.A400,
      light: amber[200],
      dark: amber[700]
    },
    type: 'dark'
  },
  spacing: {
    unit: 10
  }
})

ReactDOM.render(
   <MuiThemeProvider theme={theme}>
     <App />
   </MuiThemeProvider>, 
   document.getElementById('root'));
