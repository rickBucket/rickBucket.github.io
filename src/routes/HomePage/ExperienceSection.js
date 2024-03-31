import React from 'react';
import styled from 'styled-components';

// import schema from '../../schema.js';

const ExperienceSection = () => {

  return (
    <ExpContainer>
      <AcademicExperience>
        <ExpTitle>{ "University of California, San Diego" }</ExpTitle>
        <ExpSubTitle>{ "Computer Engineering (Bachelor of Science)" }</ExpSubTitle>
        <ExpBody></ExpBody>
      </AcademicExperience>
      <AcademicExperience>
        <ExpTitle>{ "Hack Reactor" }</ExpTitle>
        <ExpSubTitle>{ "Advanced Software Engineering Immersive" }</ExpSubTitle>
        <ExpBody></ExpBody>
      </AcademicExperience>
      <WorkExperience>
        <ExpTitle>{ "Zoom Video Communications, Inc." }</ExpTitle>
        <ExpSubTitle>{ "Software Development Engineer" }</ExpSubTitle>
        <ExpBody></ExpBody>
      </WorkExperience>
    </ExpContainer>
  )
}

const ExpContainer = styled.div`
  background: green;
  border: 1px solid red;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 4%;
  @media (max-width: 720px) {
    padding: 20px 8px 280px 8px;
  }
`;

const AcademicExperience = styled.div`
  background: grey;
  border: 1px solid blue;
  width: 28%;
  min-width: 180px;
  height: 240px;
  @media (max-width: 720px) {
    width: 45%;
    min-width: 160px;
  }
`;

const WorkExperience = styled(AcademicExperience)`
  @media (max-width: 720px) {
    position: absolute;
    width: calc(84%);
    min-width: 320px;
    margin-top: 260px;
  }
`;

const ExpTitle = styled.div`
  margin: 8px 8px 2px 8px;
  padding: 8px 8px 2px 8px;
  font-size: 20px;
`;

const ExpSubTitle = styled.div`
  margin: 2px 8px 2px 8px;
  padding: 2px 8px 2px 8px;
`;

const ExpBody = styled.div`

`;

const LogoImg = styled.img`

`;

export default ExperienceSection;