import './app.sass';
import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import {createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Source Sans Pro",
    fontSize: 20,
    htmlFontSize: 20,
    h1: {
      fontSize: 77,
      lineHeight: 1.26
    },
    h2: {
      fontSize: 35,
      lineHeight: 1.26,
      fontWeight: 700
    },
    h3: {
      fontSize: 22,
      lineHeight: 1.26
    },
    h4: {
      fontSize: 20,
      lineHeight: 1.26
    },
    body2: {
      fontSize: "20px",
      lineHeight: 1.26
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <CssBaseline />
        <SidebarMenu/>
        <div className="app__col app__col--main">
          <Container maxWidth="lg">
            main
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
