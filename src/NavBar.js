import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

import schema from './schema.js';

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
      <ProfilePic size={48} src="./profile.jpg" alt="Profile pic of me"/>
      <Title>{ schema.fullName }</Title>
      <MenuButton onClick={(e) => toggleMenu(e.stopPropagation())}><MenuIcon /></MenuButton>
    </NavBarWrapper>
  )
};


const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 56px;
  width: 100%;
  min-width: 320px;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  // filter: drop-shadow(0px -4px 32px #222);
  z-index: 5;
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  padding: auto;
  margin: 0px;
  background: transparent;
  border: none;
  // border-radius: 4px;
  color: white;
  &:active {
    backdrop-filter: brightness(80%);
  }
`;

const ProfilePic = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  padding: auto;
  margin: 4px;
  border-radius: 50%;
  background: white;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 192px;
  color: rgba(256, 256, 256, 0.8);
  cursor: default;
  user-select: none;
`;

export default NavBar;