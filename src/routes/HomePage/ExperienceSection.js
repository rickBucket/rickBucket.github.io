import React from 'react';
import styled from 'styled-components';

// import schema from '../../schema.js';

const ExperienceSection = () => {

  return (
    <ExpContainer>
      <Experience>
        <LogoWrapper>
          <LogoImg src="./UCSD.png" alt="UC San Diego logo" />
        </LogoWrapper>
        <ExpTitle>{ "University of California, San Diego" }</ExpTitle>
        <ExpSubTitle>{ "Computer Engineering (Bachelor of Science)" }</ExpSubTitle>
        <ExpBody>{ "2014 - 2019" }</ExpBody>
      </Experience>
      <Experience>
        <LogoWrapper>
          <LogoImg src="./HackReactor.png" alt="Hack Reactor logo" />
        </LogoWrapper>
        <ExpTitle>{ "Hack Reactor" }</ExpTitle>
        <ExpSubTitle>{ "Advanced Software Engineering Immersive" }</ExpSubTitle>
        <ExpBody>{ "2021" }</ExpBody>
      </Experience>
      <Experience>
        <LogoWrapper>
          <LogoImg src="./ZOOM.png" alt="Zoom logo" />
        </LogoWrapper>
        <ExpTitle>{ "Zoom Video Communications, Inc." }</ExpTitle>
        <ExpSubTitle>{ "Software Development Engineer" }</ExpSubTitle>
        <ExpBody>{ "2021 - 2023" }</ExpBody>
      </Experience>
    </ExpContainer>
  )
}

const ExpContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 40px 2%;
  background: lightgrey;
  @media (max-width: 720px) {
    display: block;
    padding: 20px 8%;
  }
`;

const Experience = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(25% + 32px);
  height: 264px;
  min-width: 180px;
  padding-bottom: 4px;
  border-radius: 8px;
  background: #FBFBFA;
  filter: drop-shadow(4px 4px 4px grey);
  @media (max-width: 720px) {
    height: 100%;
    width: 86%;
    margin: 14px 7%;
  }
`;

const ExpTitle = styled.div`
  margin: 2px 8px 2px 8px;
  padding: 2px 8px 2px 8px;
  font-size: 20px;
`;

const ExpSubTitle = styled.div`
  margin: 2px 8px 4px 8px;
  padding: 2px 8px 4px 8px;
  font-size: 14px;
`;

const ExpBody = styled.div`
  width: 84px;
  margin: auto 14px 8px auto;
  text-align: right;
  font-size: 14px;
  color: grey;
`;

const LogoWrapper = styled.div`
  align-content: center;
  height: 120px;
  width: 100%;
  margin-top: 8px;
  @media (max-width: 720px) {
    width: 100px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const LogoImg = styled.img`
  max-height: 100px;
  max-width: 150px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 720px) {
    max-height: 120px;
    max-width: 100px;
  }
`;

export default ExperienceSection;