import React from 'react';
import styled from 'styled-components';

import schema from '../../schema.js';
import photobase from './photobase.js';

const { navBarHeight } = schema;

const EnlargedPhoto = ({ id }) => {
  return (
    <Image
      src={photobase[id].img_src}
      alt={id}
      draggable={false}
    />
  );
};


const Image = styled.img`
  display: block;
  position: absolute;
  top: calc(44% + ${navBarHeight}px);
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: auto;
  width: auto;
  max-height: 84%;
  max-width: 92%;
  filter: drop-shadow(0px 0px 8px rgb(0,0,0));
  user-select: none;
`;

export default EnlargedPhoto;
