import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

import schema from '../schema.js';
import text from '../text.js';

const { hashLinkScroll } = schema;
const { footer_sections, trademark } = text;

const Footer = () => {

  return (
    <FooterWrapper>
      {
        footer_sections.map((section) => (
          <SectionWrapper key={section.title}>
            <SectionTitle>{ section.title }</SectionTitle>
            {
              section.items.map((item) => (
                item.href
                ? <FooterLink
                    key={item.name}
                    to={item.href}
                    scroll={hashLinkScroll}
                  >{ item.name }</FooterLink>
                : <FooterItem key={item.name}>{ item.name }</FooterItem>
              ))
            }
          </SectionWrapper>
        ))
      }
      <Trademark>{ trademark }</Trademark>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  position: fixed:
  display: flex;
  text-align: right;
  bottom: 0px;
  height: 100%;
  margin-top: 32px;
  padding: 20px 6%;
  color: white;
  background: rgba(36,36,36);
`;

const SectionWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  text-align: left;
  height: 180px;
  width: 120px;
  margin: 8px 20px;
  padding: 12px;
  @media (max-width: 640px) {
    display: block;
  }
`;

const SectionTitle = styled.p`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const FooterItem = styled.p`
  color: lightgrey;
  font-size: 14px;
`;

const FooterLink = styled(HashLink)`
  display: block;
  margin: 14px auto;
  color: white;
  text-decoration: unset;
  font-size: 14px;
`;

const Trademark = styled.p`
  text-align: left;
  margin-top: 28px;
  font-size: 12px;
`;

export default Footer;