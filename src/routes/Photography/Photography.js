import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Photo from './Photo.js';
import photobase from './photobase.js';
import schema from '../../schema.js';

const PageWrapper = schema.PageWrapper;

const Photography = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [maxRowValue, setMaxRowValue] = useState(2);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    screen.orientation.addEventListener("change", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      screen.orientation.removeEventListener("change", handleResize);
    }
  }, []);

  let handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth > 1200) setMaxRowValue(9);
    else if (window.innerWidth > 900) setMaxRowValue(7);
    else if (window.innerWidth > 600) setMaxRowValue(5);
    else setMaxRowValue(3);
  };

  /* Gets height and width of photos using the ids array
   * Calculates % width for best fit
   * Row Weights:
   *    [Horizontal / Lanscape] = 2
   *    [Vertical / Portraits] = 1
   *    Maximum row weight = MAX_ROW_VALUE
   * @return: Array<Array[id, widthRatio]>
   */
  let formattedPhotoCollection = (ids) => {
    let finalArray = [];
    let tempArray = [];
    let rowMaxHeight = 0;
    let counter = 0;
    ids.forEach((id) => {
      const height = photobase[id].height;
      const width = photobase[id].width;
      const counterIncrement = width > height ? 2 : 1;
      if (counter + counterIncrement > maxRowValue) {
        finalArray = [
          ...finalArray,
          ...calculateRowDimensions(tempArray, rowMaxHeight),
        ];
        tempArray = [];
        rowMaxHeight = 0;
        counter = 0;
      }
      tempArray.push([id, width/height]);
      rowMaxHeight = height > rowMaxHeight ? height : rowMaxHeight;
      counter += counterIncrement;
    });

    if (tempArray.length > 0) {
      finalArray = [
        ...finalArray,
        ...calculateRowDimensions(tempArray, rowMaxHeight),
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
    const totalMargins = 2 * schema.photo_margin * photos.length;
    const containerWidth = 0.9 * windowWidth;
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
      <GalleryWrapper>
        {
          formattedPhotoCollection(photobase.ids.portraits).map((photo) => (
            <Photo
              id={photo[0]}
              key={photo[0]}
              widthRatio={photo[1]}
              rowLength={photo[2]}
            />
          ))
        }
      </GalleryWrapper>
    </PageWrapper>
  )
}

const GalleryWrapper = styled.div`
  justify-content: space-between;
  width: 90vw;
  overflow: auto;
  margin: auto;
  padding: auto;
  // border: solid;
  transition: width 0.2s ease;
  // @media (max-width: 600px) {
  //   width: 100vw;
  //   margin: 0px;
  // }
`;

export default Photography;

