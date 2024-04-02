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

import schema from './schema.js';
import './App.css';

const App = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <HashRouter>
      <schema.GlobalStyle />
      {menuActive &&
        <Overlay onClick={() => setMenuActive(false)} />
      }
      <Backdrop />
      <NavBar
        hideMenu={() => setMenuActive(false)}
        toggleMenu={() => setMenuActive(!menuActive)}
      />
      <Menu
        visibility={menuActive}
        setVisibility={(val) => setMenuActive(val)}
      />
      <div id="top"></div>
      <Routes>
        <Route exact path="/" element={<Photography />} />
        <Route path="/index.html" element={<Photography />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 3;
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
