import React from 'react';
import styled from 'styled-components';

// import schema from '../../schema.js';
import text from '../../text.js';

const LeadSection = () => {

  return (
      <LeadContainer>
        <LeadTextContainer>
          <LeadTitle>
            { text.title }
          </LeadTitle>
          <LeadText>
            { text.lorem_ipsum }
          </LeadText>
        </LeadTextContainer>
        <TempImg>
          { "" }
        </TempImg>
      </LeadContainer>
  )
}

const LeadContainer = styled.div`
  background: #FEFEFD;
  display: flex;
  padding-bottom: 32px;
  @media (max-width: 720px) {
    display: block;
  }
`;

const LeadTextContainer = styled.div`
  width: 40%;
  max-width: 640px;
  margin: 20px 10%;
  @media (max-width: 1280px) {
    width: 45%;
    margin: 20px 5%;
  }
  @media (max-width: 720px) {
    width: 90%;
    min-width: 272px;
  }
`;

const LeadTitle = styled.div`
  margin-top: 10%;
  font-size: 34px;
  text-align: center;
  @media (max-width: 1280px) {
    font-size: 32px;
  }
  @media (max-width: 1080px) {
    font-size: 28px;
  }
  @media (max-width: 720px) {
    margin-top: 5%;
    font-size: 24px;
  }
`;

const LeadText = styled.div`
  padding: 5px 20px;
  @media (max-width: 720px) {
    padding: 5px 10px;
  }
`;

const TempImg = styled.div`
  height: 500px;
  width: 32%;
  margin: 32px auto;
  border: 1px solid grey;
  border-radius: 8px;
  @media (max-width: 1280px) {
    width: 36%;
  }
  @media (max-width: 720px) {
    width: 80%;
    margin: 8px auto;
  }
`

export default LeadSection;