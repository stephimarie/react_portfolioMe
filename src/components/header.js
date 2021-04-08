//import {Nav, Form, FormControl, Button} from 'react-bootstrap';
import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Main from '../pages/main';
import { Link } from 'react-router-dom';


class Navbar extends Component{
    render() {
        return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header" title="SM" scroll>
           <Navigation>
             <Link to="/">Home</Link >
             <Link to="/contact">Contact</Link >
             <Link to="/project">Project</Link>
           </Navigation>
          </Header>
          <Drawer title="Menu">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/project">Project</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
          <Footer size="mega">
            <FooterSection type="middle">
              <FooterLinkList>
                <p>Stephanie Marie&copy;</p>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    );
  };
}

export default Navbar; 
