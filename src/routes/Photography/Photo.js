import React from 'react';
import styled from 'styled-components';

import schema from '../../schema.js';
import photobase from './photobase.js';

const Photo = ({ id, widthRatio }) => {

  return (
    <Image
      src={photobase[id].img_src}
      $ratio={widthRatio}
      alt={id}
    />
  );
}


const Image = styled.img.attrs(
  ({ $ratio }) => ({
    style: {
      width: `calc(${100 * $ratio}%)`,
    }
  })
)`
  margin: ${schema.photo_margin/2}px ${schema.photo_margin}px;
  height: auto;
  transition: width 0.2s ease;
  border-radius: ${schema.photo_margin}px;
`;

export default Photo;
