import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter,
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
  const [backgroundColor, setBackgroundColor] = useState('hsl(0, 25%, 75%)');

  // TODO: Replace with more efficient technique
  useEffect(() => {
    // window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
    }
  }, []);

  const handleScroll = () => {
    setBackgroundColor(`hsl(${window.pageYOffset / 2 % 360}, 25%, 75%)`);
  };

  return (
    <BrowserRouter>
      <schema.GlobalStyle />
      <Overlay onClick={() => setMenuActive(false)} />
      <Backdrop style={{background: backgroundColor}} />
      <NavBar
        hideMenu={() => setMenuActive(false)}
        toggleMenu={() => setMenuActive(!menuActive)}
      />
      <Menu
        visibility={menuActive}
        setVisibility={(val) => setMenuActive(val)}
      />
      <Routes>
        <Route path="/photography" element={<Photography />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/" element={<Photography />} />
      </Routes>
    </BrowserRouter>
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
  z-index: -1;
  transition: background 0.5s ease;
`;

export default App;
