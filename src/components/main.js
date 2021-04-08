import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Contact from './contact';
import Home from './home';
import Portfolio from './portfolio';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
    </Switch>
);

export default Main;
