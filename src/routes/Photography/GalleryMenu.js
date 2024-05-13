import React, { useContext } from 'react';
import styled from 'styled-components';
import LoopIcon from '@mui/icons-material/Loop';
import Slider from '@mui/material/Slider';

import schema from '../../schema.js';
import AppContext from '../../contexts/AppContext.js';

// const categories = ['All', ...schema.photoCategories];
const categories = [... schema.photoCategories];

const GalleryMenu = ({
  activeCategory,
  setActiveCategory,
  handleShuffleIDs,
  maxRowValue,
  setMaxRowValue,
  resetResize,
}) => {

  const { isPhotoMenuOpen, setIsPhotoMenuOpen } = useContext(AppContext);

  const toggleCategoryMenu = () => {
    setIsPhotoMenuOpen(!isPhotoMenuOpen);
  }

  const handleSliderChange = (event, newValue) => {
    setMaxRowValue(newValue);
  }

  const handleSelectCategory = (input) => {
    setActiveCategory(input);
    setIsPhotoMenuOpen(false);
  }

  return (
    <Wrapper>
      <MenuRow>
        <RowTitle>{ "Row Density: " }</RowTitle>
        <SliderWrapper>
          <Slider
            size="small"
            aria-label="Gallery row density"
            value={maxRowValue}
            onChange={handleSliderChange}
            shiftStep={1}
            step={1}
            marks
            min={3}
            max={11}
          />
        </SliderWrapper>
        <ResetButton onClick={resetResize}>{ "Reset" }</ResetButton>
      </MenuRow>
      <MenuRow>
        <RowTitle>{ "Select Category: " }</RowTitle>
        <SelectWrapper>
          <Select
            onClick={toggleCategoryMenu}
            aria-label="Select photo gallery category"
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
      </MenuRow>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
`;

const MenuRow = styled.div`
  display: flex;
  justify-content: right;
  min-width: 270px;
  margin-bottom: 4px;
  padding-right: 8px;
`;

const RowTitle = styled.div`
  text-align: center;
  font-size: 12px;
  padding-right: 8px;
  margin: auto 0;
  cursor: default;
  user-select: none;
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 138px;
  padding-left: 4px;
  padding-right: 12px;
`;

const SelectWrapper = styled.div`
  position: relative;
  font-size: 14px;
  width: 128px;
  margin: 0 4px;
`;

const Select = styled.button`
  font-family: Arial;
  font-size: 14px;
  height: 26px;
  width: 128px;
  color: black;
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
  width: 126px;
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

const ResetButton = styled.button`
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 36px;
  margin-left: 8px;
  padding: 4px;
  color: #222;
  background: white;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
`;

const ShuffleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 36px;
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