import React, { useContext } from 'react';
import styled from 'styled-components';

import schema from '../../schema.js';
import AppContext from '../../contexts/AppContext.js';

const categories = ['All', ...schema.photoCategories];

const GalleryMenu = ({ activeCategory, setActiveCategory }) => {

  const { isPhotoMenuOpen, setIsPhotoMenuOpen } = useContext(AppContext);

  const toggleCategoryMenu = () => {
    setIsPhotoMenuOpen(!isPhotoMenuOpen);
  }

  const handleSelectCategory = (input) => {
    setActiveCategory(input);
    setIsPhotoMenuOpen(false);
  }

  return (
    <Wrapper>
      <SelectTitle>{ "Select Category: " }</SelectTitle>
      <SelectWrapper>
        <Select
          onClick={toggleCategoryMenu}
          $menuOpen={isPhotoMenuOpen}
        >
          { activeCategory }
        </Select>
        { isPhotoMenuOpen &&
          <ItemWrapper>
          {
            categories.map((category) => (
              <SelectItem
                key={category}
                onClick={() => handleSelectCategory(category)}
              >
                { category }
              </SelectItem>
            ))
          }
          </ItemWrapper>
        }
      </SelectWrapper>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  min-width: 200px;
  margin-bottom: 8px;
  padding: 2px 8px;
`;

const SelectTitle = styled.div`
  text-align: center;
  font-size: 12px;
  width: 104px;
  padding: 6px 0;
  margin: auto 0;
  cursor: default;
`;

const SelectWrapper = styled.div`
  position: relative;
  font-size: 14px;
`;

const Select = styled.div`
  width: 120px;
  background: white;
  padding: 4px 0 4px 8px;
  border: 1px solid grey;
  border-radius: ${props => props.$menuOpen ? '4px 4px 0 0' : '4px'};
  user-select: none;
  cursor: pointer;
  z-index: 2;
  &:after {
    position: absolute;
    top: 4px;
    right: 8px;
    color: #111;
    content: ' ▾';
    text-align: right;
  }
`;

const ItemWrapper = styled.div`
  position: absolute;
  top: 25px;
  right: 0;
  display: flex;
  flex-direction: column;
  max-height: 400px;
  width: 128px;
  padding: 0;
  border: 1px solid grey;
  background: rgba(255,255,255, 0.7);
  backdrop-filter: blur(18px) saturate(250%);
  -webkit-backdrop-filter: blur(18px);
  overflow: scroll;
  z-index: 1;
  border-radius: 0 0 8px 8px ;
`;

const SelectItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 8px 8px;
  color: #111;
  cursor: pointer;
  user-select: none;
  &:hover, :focus, :focus:hover {
    background: transparent;
    backdrop-filter: saturate(40%);
  }
`;


export default GalleryMenu;