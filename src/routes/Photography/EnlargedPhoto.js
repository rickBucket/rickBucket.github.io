import React from 'react';
import styled from 'styled-components';

import schema from '../../schema.js';
import photobase from './photobase.js';

const EnlargedPhoto = ({ id }) => {

  return (
    <Image
      src={photobase[id].img_src}
      alt={id}
    />
  );
};


const Image = styled.img`
  position: absolute;
  top: calc(50% + ${schema.navBarHeight/2}px);
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  max-height: 90%;
  max-width: 90%;
  height: auto;
  width: auto;
  display: block;
`;

export default EnlargedPhoto;
