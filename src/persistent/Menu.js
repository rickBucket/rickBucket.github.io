import React from 'react';
import styled from 'styled-components';

import schema from '../schema.js';

const Menu = ({ visibility, setVisibility }) => {

  const handleMenuItem = (item) => {
    window.location.href = window.location.origin + schema.menu[item];
    setVisibility(false);
  };

  return (
    <MenuWrapper $vis={visibility}>
      {Object.keys(schema.menu).map((key) => (
        <MenuItem key={key} onClick={() => handleMenuItem(key)}>{key}</MenuItem>
      ))}
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  width: 192px;
  position: fixed;
  top: ${schema.navBarHeight}px;
  right: 0;
  padding: 8px 0;
  color: white;
  background: rgba(8,8,8,0.85);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  visibility: ${props => props.$vis ? 'visible' : 'hidden'};
  z-index: 5;
`;

const MenuItem = styled.button`
  height: 40px;
  width: 192px;
  background: transparent;
  color: white;
  font-size: 14px;
  border: none;
  user-select: none;
`;

export default Menu;