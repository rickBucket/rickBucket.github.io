import React from 'react';
// import styled from 'styled-components';

import LeadSection from './LeadSection.js';
import ExperienceSection from './ExperienceSection.js';

import schema from '../../schema.js';

const PageWrapper = schema.PageWrapper;

const HomePage = () => {

  return (
    <PageWrapper>
      <LeadSection />
      <ExperienceSection />
    </PageWrapper>
  )
}


export default HomePage;