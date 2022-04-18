import './app.sass';
import React from 'react';
import Logo from "./components/Logo/Logo";
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__col app__col--nav">
          <Logo />
          <SidebarMenu />
        </div>
        <div className="app__col app__col--main">
          <Routes>
            <Route
              path="/"
              element={"route1"}
            />
            <Route
              path="/ppd-assistance"
              element={"route2"}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
