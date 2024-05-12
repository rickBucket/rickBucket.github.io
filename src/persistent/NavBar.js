import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

import schema from '../schema.js';
import text from '../text.js';

const { navBarHeight } = schema;
const { fullName } = text;

const NavBar = ({ hideMenu, toggleMenu }) => {
  const [scrollPos, setScrollPos] = useState(0);

  const handleClick = () => {
    hideMenu();
    if (window.pageYOffset) {
      setScrollPos(window.pageYOffset);
      window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
      window.scrollTo({top: scrollPos, behavior: 'smooth'});
    }
  };

  return (
    <NavBarWrapper onClick={handleClick}>
      <ProfilePic $size={48} src="./profile.jpg" alt="Profile pic of me"/>
      <Title>{ fullName }</Title>
      <MenuButton onClick={(e) => toggleMenu(e.stopPropagation())}>
        <MenuIcon />
      </MenuButton>
    </NavBarWrapper>
  )
};


const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: -2px;
  height: ${navBarHeight}px;
  width: 100%;
  min-width: 320px;
  background: rgba(22,22,23,0.8);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  cursor: pointer;
  z-index: 5;
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${navBarHeight}px;
  width: ${navBarHeight}px;
  padding: auto;
  margin: 0px;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    backdrop-filter: brightness(200%);
  }
  &:active {
    backdrop-filter: brightness(80%);
  }
`;

const ProfilePic = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.$size}px;
  width: ${props => props.$size}px;
  padding: auto;
  margin: 4px;
  border-radius: 50%;
  background: white;
  user-select: none;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 192px;
  color: rgba(256, 256, 256, 0.9);
  cursor: default;
  user-select: none;
  text-shadow: 0px 0px 5px rgba(0,0,0,0.5);
`;

export default NavBar;