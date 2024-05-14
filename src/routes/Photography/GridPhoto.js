import React from 'react';
import styled from 'styled-components';

import schema from '../../schema.js';
import photobase from './photobase.js';

const { photo_margin } = schema;


const GridPhoto = ({ id, widthRatio, handleSelectPhoto }) => {

  return (
    <ImageContainer
      $ratio={widthRatio}
      onClick={() => handleSelectPhoto(id)}
    >
      <Image
        src={photobase[id].img_src}
        alt={id}
        draggable={false}
        loading="lazy"
      />
    </ImageContainer>
  );
}


const ImageContainer = styled.div.attrs(
  ({ $ratio }) => ({
    style: {
      width: `${100 * $ratio}%`,
    }
  })
)`
  display: inline-block;
  margin: ${photo_margin/4}px ${photo_margin}px;
  border-radius: ${photo_margin}px;
  user-select: none;
  cursor: pointer;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: ${photo_margin}px;
  user-select: none;
`;

export default GridPhoto;
