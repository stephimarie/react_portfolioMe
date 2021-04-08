import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Contact from './contact';
import Home from './home';
import Portfolio from './portfolio';


const Footer = () => (
    <Footer size="mega">
    <FooterSection type="middle">
      <FooterLinkList>
        <p>Stephanie Marie&copy;</p>
      </FooterLinkList>
    </FooterSection>
  </Footer>
);

export default Footer;
