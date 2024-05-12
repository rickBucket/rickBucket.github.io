import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import GalleryMenu from './GalleryMenu.js'
import GridPhoto from './GridPhoto.js';
import EnlargedPhoto from './EnlargedPhoto.js';
import photobase from './photobase.js';
import schema from '../../schema.js';

const { navBarHeight, PageWrapper, photo_margin } = schema;

const Photography = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [maxRowValue, setMaxRowValue] = useState(3);
  const [activePhoto, setActivePhoto] = useState();
  const [activeCategory, setActiveCategory] = useState('Portraits');
  const [photoIDs, setPhotoIDs] = useState(photobase.ids['Portraits']);

  useEffect(() => {
    if (activeCategory === 'All') {
      setPhotoIDs([
        ...schema.photoCategories
          .map((category) => photobase.ids[category])
          .flat()
          .sort(() => Math.random() - 0.5)
      ]);
    } else {
      setPhotoIDs(photobase.ids[activeCategory]);
    }
  }, [activeCategory]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleOrientation);
    screen.orientation.addEventListener("change", handleOrientation);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientation);
      screen.orientation.removeEventListener("change", handleOrientation);
    }
  }, []);

  let handleShuffleIDs = () => {
    setPhotoIDs([
      ...photoIDs
      .sort(() => Math.random() - 0.5)
    ]);
  };

  let handleOrientation = (prevWidth) => {
    if (prevWidth !== window.innerWidth) {
      setTimeout(handleOrientation, 400, window.innerWidth);
    }
    handleResize();
  }

  let handleSelectPhoto = (id) => {
    setActivePhoto(id);
  }

  let handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth > 1280) {
      setMaxRowValue(9);
    } else if (window.innerWidth > 960) {
      setMaxRowValue(7);
    } else if (window.innerWidth > 640) {
      setMaxRowValue(5);
    } else {
      setMaxRowValue(3);
    }
  };


  /* Gets height and width of photos using the ids array
   * Calculates % width for best fit
   * Row Weights:
   *    [Horizontal / Lanscape] = 2
   *    [Vertical / Portraits] = 1
   *    Square = 2
   *    Maximum row weight = MAX_ROW_VALUE
   * @return: Array<Array[id, widthRatio]>
   */
  let formattedPhotoCollection = (ids) => {
    let finalArray = [];
    let tempArray = [];
    let counter = 0;
    ids.forEach((id) => {
      const height = photobase[id].height;
      const width = photobase[id].width;
      const counterIncrement = width >= height ? 2 : 1;
      if (counter + counterIncrement > maxRowValue) {
        finalArray = [
          ...finalArray,
          ...calculateRowDimensions(tempArray),
        ];
        tempArray = [];
        counter = 0;
      }
      tempArray.push([id, width/height]);
      counter += counterIncrement;
    });

    if (tempArray.length > 0) {
      finalArray = [
        ...finalArray,
        ...calculateRowDimensions(tempArray),
      ];
    }

    return finalArray;
  }

  /* Helper function to calculate the dimensions of photos in a row
   * Compensate for margins affecting different aspect ratios differently
   * @param:
   *    Array<Array[id, aspectRatio<width/height>]>
   *    number: maxinum height of photos in array
   * @return: Array<Array[id, widthRatio]>
   */
  let calculateRowDimensions = (photos) => {
    const totalMargins = 2 * photo_margin * photos.length;
    const containerWidth = windowWidth > 640
      ? 0.9 * windowWidth
      : windowWidth - (6 * photo_margin);
    let result = [];
    let aspectSum = 0;

    photos.forEach((photo) => {
      aspectSum += photo[1];
    });
    const height = (containerWidth - totalMargins)/aspectSum;

    photos.forEach((photo) => {
      result.push([
        photo[0],
        (height * photo[1]) / containerWidth,
      ]);
    })
    return result;
  };

  return (
    <PageWrapper>
      {activePhoto &&
        <Overlay onClick={() => handleSelectPhoto()}>
          <EnlargedPhoto id={activePhoto} />
        </Overlay>
      }
      <GalleryWrapper>
        <GalleryMenu
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          handleShuffleIDs={handleShuffleIDs}
          maxRowValue={maxRowValue}
          setMaxRowValue={setMaxRowValue}
          handleResize={handleResize}
        />
        {
          formattedPhotoCollection(photoIDs).map((photo) => (
            <GridPhoto
              id={photo[0]}
              key={photo[0]}
              widthRatio={photo[1]}
              handleSelectPhoto={handleSelectPhoto}
            />
          ))
        }
      </GalleryWrapper>
    </PageWrapper>
  )
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: auto;
  height: 100%;
  width: 100%;
  z-index: 2;
  backdrop-filter: blur(24px) brightness(25%);
  -webkit-backdrop-filter: blur(24px) brightness(25%);
`;

const GalleryWrapper = styled.div`
  justify-content: space-between;
  overflow: auto;
  width: 90vw;
  margin: auto;
  padding-top: ${1.4 * navBarHeight}px;
  overflow: visible;
  transition: width 0.2s ease;
  @media (max-width: 640px) {
    width: calc(100vw - ${6 * photo_margin}px);
    padding-top: ${1.2 * navBarHeight}px;
  }
`;

export default Photography;

