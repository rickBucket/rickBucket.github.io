import React, { useState } from 'react';
import styled from 'styled-components';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';

import NavBar from './NavBar.js';
import Menu from './Menu.js';
import Photography from './routes/Photography/Photography.js';
import AboutMe from './routes/AboutMe/AboutMe.js';
import schema from './schema.js';
import './App.css';

const App = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <HashRouter>
      <schema.GlobalStyle />
      <Overlay onClick={() => setMenuActive(false)} />
      <Backdrop />
      <NavBar
        hideMenu={() => setMenuActive(false)}
        toggleMenu={() => setMenuActive(!menuActive)}
      />
      <Menu
        visibility={menuActive}
        setVisibility={(val) => setMenuActive(val)}
      />
      <Routes>
        <Route exact path="/" element={<Photography />} />
        <Route path="/index.html" element={<Photography />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </HashRouter>
  );
}

const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 2;
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
