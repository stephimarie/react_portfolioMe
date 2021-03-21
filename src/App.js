import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header" title="SM" scroll>
           <Navigation>
             <Link to="/">Home</Link >
             <Link to="/contact">Contact</Link >
             <Link to="/portfolio">Portfolio</Link>
           </Navigation>
          </Header>
          <Drawer title="Menu">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/portfolio">Portfolio</Link>
            </Navigation>

          </Drawer>
        </Layout>
      </div>
    );
  };
}

export default App;
