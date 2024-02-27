import React from 'react';
import styled from 'styled-components';

import schema from '../../schema.js';
import photobase from './photobase.js';

const Photo = ({ id, widthRatio, rowLength }) => {

  return (
    <Image
      src={photobase[id].img_src}
      $ratio={widthRatio}
      alt={id}
    />
  );
}

const Image = styled.img`
  margin: ${schema.photo_margin}px;
  width: calc(${props => props.$ratio * 100}% - ${2 * schema.photo_margin}px);
  height: auto;
  @media (max-width: 600px) {
    width: calc(100% - ${2 * schema.photo_margin}px);
    height: auto;
  }
`;

export default Photo;
