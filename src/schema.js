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
  photoCategories: [
    'Portraits',
    'Events',
    'Pets',
    'Wildlife',
    'Miscellaneous',
  ],
  'navBarHeight': 56,
  'photo_margin': 4,
  'photo_gallery_sides': 24,
  'primary_breakpoint': 640,
  'secondary_breakpoint': 960,
  'tertiary_breakpoint': 1280,
  'light_button_hover_bg': '#F4F4F4',
  'light_button_active_bg': '#E4E4E4',
};

export default schema;

