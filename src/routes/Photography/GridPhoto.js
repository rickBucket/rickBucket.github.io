import React from 'react';
import styled from 'styled-components';

import schema from '../../schema.js';
import photobase from './photobase.js';

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
  margin: ${schema.photo_margin/2}px ${schema.photo_margin}px;
  height: auto;
  transition: width 0.2s ease;
  border-radius: ${schema.photo_margin}px;
`;


const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: ${schema.photo_margin}px;
`;

export default GridPhoto;
