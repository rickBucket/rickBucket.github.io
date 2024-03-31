import React from 'react';
import styled from 'styled-components';

import schema from '../../schema.js';


const LeadSection = () => {

  return (
      <LeadContainer>
        <LeadTextContainer>
          <LeadTitle>
            { "Software Development Engineer" }
          </LeadTitle>
          <LeadText>
            { schema.lorem_ipsum }
          </LeadText>
        </LeadTextContainer>
        <TempImg>
          { "Image here"}
        </TempImg>
      </LeadContainer>
  )
}

const LeadContainer = styled.div`
  background: lightgrey;
  border: 1px solid blue;
  display: flex;
  @media (max-width: 720px) {
    display: block;
  }
`;

const LeadTextContainer = styled.div`
  background: navy;
  width: 45%;
  max-width: 640px;
  margin: 20px 5%;
  @media (max-width: 720px) {
    width: 90%;
    min-width: 272px;
  }
`;

const LeadTitle = styled.div`
  background: grey;
  border: 1px solid red;
  font-size: 34px;
  text-align: center;
  margin-top: 10%;
  @media (max-width: 1280px) {
    font-size: 32px;
  }
  @media (max-width: 1080px) {
    font-size: 28px;
  }
  @media (max-width: 720px) {
    font-size: 24px;
    margin-top: 5%;
  }
`;

const LeadText = styled.div`
  background: cyan;
  border: 1px solid red;
  padding: 5px 20px;
  @media (max-width: 720px) {
    padding: 5px 10px;
  }
`;

const TempImg = styled.div`
  background: green;
  border: 1px solid red;
  width: 40%;
  height: 500px;
  margin: 32px auto;
  @media (max-width: 720px) {
    width: 90%;
    margin: 8px auto;
  }
`

export default LeadSection;