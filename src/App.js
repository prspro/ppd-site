import './app.sass';
import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';

function App() {
  return (
    <div className="app">
      <CssBaseline />
      <div className="app__col app__col--nav">
        <Container maxWidth="sm">
          test
        </Container>
      </div>
      <div className="app__col app__col--main">
        <Container maxWidth="lg">
          test
        </Container>
      </div>
    </div>
  );
}

export default App;
