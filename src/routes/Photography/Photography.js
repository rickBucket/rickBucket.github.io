import React from 'react';
import styled from 'styled-components';

import Photo from './Photo.js';
import photobase from './photobase.js';
import schema from '../../schema.js';

const PageWrapper = schema.PageWrapper;

const Photography = () => {

  return (
    <PageWrapper>
      <GalleryWrapper>
        {
          photobase.ids.events.map((id) => (
            <Photo id={id} key={id} />
          ))
        }
      </GalleryWrapper>
    </PageWrapper>
  )
}

const GalleryWrapper = styled.div`
  justify-content: center;
  width: 85vw;
  overflow: auto;
  margin: auto;
  padding: auto;
  // border: solid;
  transition: width 0.5s ease;
  @media (max-width: 600px) {
    width: 100vw;
    margin: 0px;
  }
`;

export default Photography;

