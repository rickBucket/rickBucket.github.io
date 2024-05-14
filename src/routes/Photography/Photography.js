import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import GalleryMenu from './GalleryMenu.js'
import GridPhoto from './GridPhoto.js';
import EnlargedPhoto from './EnlargedPhoto.js';
import photobase from './photobase.js';
import schema from '../../schema.js';

const { navBarHeight, PageWrapper, photo_margin, photo_gallery_sides } = schema;

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
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 1280) {
      setMaxRowValue(9);
    } else if (windowWidth > 960) {
      setMaxRowValue(7);
    } else if (windowWidth > 640) {
      setMaxRowValue(5);
    } else {
      setMaxRowValue(3);
    }
  }, [windowWidth]);

  let handleShuffleIDs = () => {
    setPhotoIDs([
      ...photoIDs
      .sort(() => Math.random() - 0.5)
    ]);
  };

  let handleOrientation = (prevWidth) => {
    if (prevWidth !== window.innerWidth) {
      setTimeout(handleOrientation, 400, window.innerWidth);
      handleResize();
    }
  }

  let handleSelectPhoto = (id) => {
    setActivePhoto(id);
  }

  let handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  let resetResize = () => {
    if (windowWidth > 1280) {
      setMaxRowValue(9);
    } else if (windowWidth > 960) {
      setMaxRowValue(7);
    } else if (windowWidth > 640) {
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
   *    Maximum row weight = maxRowValueif ()
   * @return: Array<Array[id, ratioToContainerWidth]>
   */
  let formattedPhotoCollection = (ids) => {
    let finalArray = [];
    let intermediaryArray = [];
    let tempArray = [];
    let counter = 0;

    // Set intermediaryArray to hold the rows
    ids.forEach((id) => {
      const height = photobase[id].height;
      const width = photobase[id].width;
      const counterIncrement = width >= height ? 2 : 1;
      if (counter + counterIncrement > maxRowValue) {
        intermediaryArray.push([...tempArray]);
        tempArray = [];
        counter = 0;
      }
      tempArray.push([id, width/height]);
      counter += counterIncrement;
    });

    // Handle final row being of an orphan or two
    // For not-sparse grids (maxRowValue < 5) add orphan to above
    // For denser grids (maxRowValu > 6) add a third to a dual orphan
    if (tempArray.length > 2) {
      intermediaryArray.push(tempArray);
    } else if (tempArray.length === 1) {
      if (maxRowValue < 5 && tempArray[0][1] > 1) {
        intermediaryArray.push(tempArray);
      } else {
        insertStray(intermediaryArray, tempArray[0]);
      }
    } else if (maxRowValue > 6 && tempArray.length === 2) {
      tempArray.unshift(
        intermediaryArray[intermediaryArray.length - 1]
          .pop()
      );
      intermediaryArray.push(tempArray);
    }

    intermediaryArray.forEach((row) => {
      finalArray.push(...calculateRowDimensions(row));
    });
    return finalArray;
  };

  /* Helper function to insert stray orphan into grid rows
   * @param:
   *  array: Array<Array[id, width/height]>
   *  stray:[id, width/height]
   */
  let insertStray = (array, stray) => {
    let index = array.length - 1;
    array[index].push(stray);
    while (index > 0 && array[index][1] < 1) {
      array[index - 1].push(array[index].shift());
      index--;
    }
  };

  /* Helper function to calculate the dimensions of photos in a row
   * Compensate for margins affecting different aspect ratios differently
   * @param:
   *    Array<Array[id, aspectRatio<width/height>]>
   * @return: Array<Array[id, ratioToContainerWidth]>
   */
  let calculateRowDimensions = (row) => {
    const totalMargins = 2 * photo_margin * row.length;
    const containerWidth = windowWidth > 640
      ? 0.9 * windowWidth
      : windowWidth - photo_gallery_sides;
    let result = [];
    let aspectSum = 0;

    row.forEach((photo) => {
      aspectSum += photo[1];
    });
    const rowHeight = (containerWidth - totalMargins)/aspectSum;

    row.forEach((photo) => {
      result.push([
        photo[0],
        rowHeight * photo[1] / containerWidth,
      ]);
    });
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
          resetResize={resetResize}
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
  width: 90vw;
  margin: auto;
  padding-top: ${1.4 * navBarHeight}px;
  @media (max-width: 640px) {
    width: calc(100vw - ${photo_gallery_sides}px);
    padding-top: ${1.2 * navBarHeight}px;
  }
`;

export default Photography;

