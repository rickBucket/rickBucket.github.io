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
    'Home': '/#/home',
    'Photography': '/#/photography',
  },
  'navBarHeight': 56,
  'photo_margin': 4,
  'primary_breakpoint': 720,
  'secondary_breakpoint': 960,
  'tertiary_breakpoint': 1280,
  'lorem_ipsum': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis egestas eros, maximus hendrerit ipsum aliquet ac. Suspendisse ut augue consequat, egestas ante at, molestie justo. Mauris suscipit, nisi sed porta rutrum, leo libero congue urna, a eleifend nibh orci non nibh. Praesent porttitor nec libero quis dignissim. In a ex metus. Curabitur ut neque vestibulum, mattis nibh et, faucibus nibh. Quisque eget nulla pretium, elementum purus non, elementum lectus. Sed ut scelerisque massa. Maecenas pretium erat id tortor mattis iaculis. Etiam rutrum maximus malesuada. Phasellus porta interdum velit, eget rutrum neque consequat a. Fusce eu turpis porttitor augue facilisis feugiat. Donec in molestie ligula. Curabitur ornare et odio ut accumsan."
};

export default schema;

