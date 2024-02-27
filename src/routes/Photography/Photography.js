import React from 'react';
import styled from 'styled-components';

import Photo from './Photo.js';
import photobase from './photobase.js';
import schema from '../../schema.js';

const PageWrapper = schema.PageWrapper;

const MAX_ROW_VALUE = 7;

const Photography = () => {

  /* Gets height and width of photos using the ids array
   * Calculates dimensions for best fit (row height, % width)
   * Row Weights:
   *    [Horizontal / Lanscape] = 2
   *    [Vertical / Portraits] = 1
   *    Maximum row weight = MAX_ROW_VALUE
   * @return: Array<Array[id, widthRatio, rowLength]>
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
      if (counter + counterIncrement > MAX_ROW_VALUE) {
        finalArray = [
          ...finalArray,
          ...calculateRowDimensions(tempArray, rowMaxHeight),
        ];
        tempArray = [];
        rowMaxHeight = 0;
        counter = 0;
      }
      tempArray.push([id, height, width]);
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
   * @param: Array<Array[id, height, width]> // original dimensions
   * @return: Array<Array[id, widthRatio, rowLength]> // formatted dimensions
   */
  let calculateRowDimensions = (photos, maxHeight) => {
    let result = [];
    // Compensate for margins affecting different aspect ratios differently
    const marginScaleFactor = 2 * schema.photo_margin * MAX_ROW_VALUE;
    let totalWidth = marginScaleFactor * photos.length;

    // Unify height then divide the width into the photos
    photos.forEach((photo) => {
      totalWidth += photo[2] * maxHeight / photo[1];
    });
    photos.forEach((photo) => {
      result.push([
        photo[0],
        (photo[2] * maxHeight / photo[1] + marginScaleFactor) / totalWidth,
        photos.length
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
  width: 85vw;
  overflow: auto;
  margin: auto;
  padding: auto;
  // border: solid;
  transition: width 0.25s ease;
  @media (max-width: 600px) {
    width: 100vw;
    margin: 0px;
  }
`;

export default Photography;

