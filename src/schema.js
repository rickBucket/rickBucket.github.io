import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    scroll-behavior: smooth;
    font-family: Arial;
    ::-webkit-scrollbar { display: none }
    margin-left: 0px;
    background-color: white;
  }
`;

const PageWrapper = styled.div`
  padding-top: 64px;
  background: transparent;
  color: black;
`;

const schema = {
  GlobalStyle,
  PageWrapper,
  fullName: 'Ricky Zhao',
  menu: {
    'Photography': '/#/photography',
    'About Me': '/#/aboutme',
  },
  'photo_margin': 4,
};

export default schema;

