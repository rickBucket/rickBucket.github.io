import React from 'react';
import styled from 'styled-components';

// import schema from '../../schema.js';
import photobase from './photobase.js';

const Photo = ({ id }) => {

  return (
    <Image
      src={photobase[id].img_src}
      width={photobase[id].width/4}
      height={photobase[id].height/4}
      alt={id}
    />
  );
}

const Image = styled.img`
  float: left;
  margin: 4px;
  height: auto;
  @media (max-width: 600px) {
    width: calc(100% - 8px);
  }
`;

export default Photo;
