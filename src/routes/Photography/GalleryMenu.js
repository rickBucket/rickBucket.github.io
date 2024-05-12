import React, { useContext } from 'react';
import styled from 'styled-components';
import LoopIcon from '@mui/icons-material/Loop';

import schema from '../../schema.js';
import AppContext from '../../contexts/AppContext.js';

// const categories = ['All', ...schema.photoCategories];
const categories = [... schema.photoCategories];

const GalleryMenu = ({ activeCategory, setActiveCategory, handleShuffleIDs }) => {

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
      <ShuffleButton
        onClick={handleShuffleIDs}
        aria-label="Shuffle photo gallery"
      >
        <LoopIcon style={{ height: '20px'}} />
      </ShuffleButton>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  min-width: 270px;
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
  user-select: none;
`;

const SelectWrapper = styled.div`
  position: relative;
  font-size: 14px;
`;

const Select = styled.button`
  height: 26px;
  width: 120px;
  background: white;
  padding: 4px 10px 4px 0;
  border: 1px solid grey;
  border-radius: ${props => props.$menuOpen ? '4px 4px 0 0' : '4px'};
  user-select: none;
  cursor: pointer;
  z-index: 2;
  &:hover {
    background: ${schema.light_button_hover_bg};
  }
  &:active {
    background: ${schema.light_button_active_bg};
  }
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
  width: 118px;
  padding: 0;
  border: 1px solid grey;
  background: rgba(255,255,255, 0.7);
  backdrop-filter: blur(14px) saturate(250%);
  -webkit-backdrop-filter: blur(14px) saturate(250%);
  overflow: scroll;
  z-index: 1;
  border-radius: 0 0 8px 8px ;
`;

const SelectItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 8px;
  color: #111;
  cursor: pointer;
  user-select: none;
  &:hover, :focus, :focus:hover {
    background: transparent;
    backdrop-filter: saturate(50%);
  }
`;

const ShuffleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  margin-left: 8px;
  padding: 4px;
  color: #444;
  background: white;
  border: 1px solid grey;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${schema.light_button_hover_bg};
  }
  &:active {
    background: ${schema.light_button_active_bg};
  }
`;

export default GalleryMenu;