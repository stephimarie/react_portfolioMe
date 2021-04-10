import React from 'react';
import Navbar from '../src/components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import About from './components/pages/About';
import Portfolio  from './components/pages/Portfolio';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/portfolio' exact component={Portfolio}/>
        </Switch>
      </Router>
      
    </>
  );
}
export default App;
