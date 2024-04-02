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
  background: transparent;
  color: black;
`;

const hashLinkScroll = (el) => el.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});

const schema = {
  GlobalStyle,
  PageWrapper,
  hashLinkScroll,
  fullName: 'Ricky Zhao',
  menu: {
    'Home': '/#/home',
    'Photography': '/#/photography',
  },
  'navBarHeight': 56,
  'photo_margin': 4,
  'primary_breakpoint': 640,
  'secondary_breakpoint': 960,
  'tertiary_breakpoint': 1280,
};

export default schema;

