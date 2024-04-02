import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

import schema from '../../schema.js';
import text from '../../text.js';

const { hashLinkScroll } = schema;
const { academic_experience, work_experience } = text;

const ExperienceSection = () => {
  const experiences = [...academic_experience, ...work_experience];

  return (
    <ExpContainer>
      {
        experiences.map((exp) => (
          <Experience
            key={exp.name}
            to="#top"
            scroll={hashLinkScroll}
          >
            <LogoWrapper>
              <LogoImg src={exp.logo_src} alt={exp.name + "logo"} />
            </LogoWrapper>
            <ExpTitle>{ exp.name }</ExpTitle>
            <ExpSubTitle>{ exp.title }</ExpSubTitle>
            <ExpTime>{ exp.time }</ExpTime>
          </Experience>
        ))
      }
    </ExpContainer>
  )
}

const ExpContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 64px 2%;
  background: #2d8cff;
  background: linear-gradient(
    150deg,
    hsl(172, 75%, 55%),
    hsl(212, 75%, 55%)
  );
  @media (max-width: 720px) {
    display: block;
    padding: 20px 8%;
  }
`;

const Experience = styled(HashLink)`
  display: flex;
  flex-direction: column;
  width: calc(25% + 32px);
  height: 220px;
  min-width: 180px;
  padding-bottom: 4px;
  color: black;
  text-decoration: unset;
  border-radius: 8px;
  background: #FBFBFA;
  user-select: none;
  filter: drop-shadow(4px 4px 4px rgba(0,0,0, 50%));
  &:hover {
    filter: drop-shadow(5px 5px 5px rgba(0,0,0, 55%));
  }
  &:active {
    filter: none;
  }
  @media (max-width: 1280px) {
    height: 244px;
  }
  @media (max-width: 1080px) {
    height: 264px;
  }
  @media (max-width: 720px) {
    height: 100%;
    width: 86%;
    margin: 14px 7%;
  }
`;

const ExpTitle = styled.div`
  margin: 2px 8px 2px 14px;
  padding: 2px 8px 2px 14px;
  font-size: 20px;
`;

const ExpSubTitle = styled.div`
  margin: 2px 8px 4px 14px;
  padding: 2px 8px 4px 14px;
  font-size: 14px;
`;

const ExpTime = styled.div`
  width: 84px;
  margin: auto 18px 10px auto;
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