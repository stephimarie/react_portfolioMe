import React from 'react'
import { Route, Switch } from 'react-router-dom';
import About from './contact';
import Home from './home';
import Portfolio from './portfolio';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
    </Switch>
);

export default Main;
