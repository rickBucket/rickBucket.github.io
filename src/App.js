import React, { useState } from 'react';
import styled from 'styled-components';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';


import Footer from './persistent/Footer.js';
import NavBar from './persistent/NavBar.js';
import Menu from './persistent/Menu.js';
import HomePage from './routes/HomePage/HomePage.js';
import Photography from './routes/Photography/Photography.js';

import AppContext from './contexts/AppContext.js';
import schema from './schema.js';
import './App.css';

const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isPhotoMenuOpen, setIsPhotoMenuOpen] = useState(false);

  const hideMenus = () => {
    setMenuActive(false);
    setIsPhotoMenuOpen(false);
  }

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    setIsPhotoMenuOpen(false);
  }

  const setMenuVisibility = (val) => {
    setMenuActive(val);
    setIsPhotoMenuOpen(false);
  }

  return (
    <HashRouter>
      <schema.GlobalStyle />
      <AppContext.Provider
        value={{ isPhotoMenuOpen, setIsPhotoMenuOpen }}
      >
        {(menuActive || isPhotoMenuOpen) &&
          <Overlay onClick={hideMenus} />
        }
        <Backdrop />
        <NavBar
          hideMenu={hideMenus}
          toggleMenu={toggleMenu}
        />
        <Menu
          visibility={menuActive}
          setVisibility={(val) => setMenuVisibility(val)}
        />
        <div id="top"></div>
        <Routes>
          <Route exact path="/" element={<Photography />} />
          <Route path="/index.html" element={<Photography />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </HashRouter>
  );
}

const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const Backdrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #fbfbfd;
  z-index: -1;
  transition: background 0.5s ease;
`;

export default App;
