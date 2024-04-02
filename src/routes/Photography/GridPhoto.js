import React from 'react';
import styled from 'styled-components';

import schema from '../../schema.js';
import photobase from './photobase.js';

const { photo_margin } = schema;


const GridPhoto = ({ id, widthRatio, handleSelectPhoto }) => {
  return (
    <ImageContainer
      $ratio={widthRatio}
      onClick={() => handleSelectPhoto(id)}>
      <Image
        src={photobase[id].img_src}
        $ratio={widthRatio}
        alt={id}
      />
    </ImageContainer>
  );
}

const ImageContainer = styled.div.attrs(
  ({ $ratio }) => ({
    style: {
      width: `calc(${100 * $ratio}%)`,
    }
  })
)`
  display: inline-block;
  margin: ${photo_margin/4}px ${photo_margin}px;
  transition: width 0.2s ease;
  border-radius: ${photo_margin}px;
  user-select: none;
  cursor: pointer;
  &:hover img {
    filter: drop-shadow(2px 2px 4px rgba(0,0,0, 80%));
  }
`;


const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: ${photo_margin}px;
  user-select: none;
`;

export default GridPhoto;
