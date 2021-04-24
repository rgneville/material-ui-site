import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import About from './About';
import App from './App';
import Projects from './Projects';
import Contact from './Contact';

const Routes = () => {
    return ( 
        <HashRouter basename="/">
            <Switch>
                <Route exact path="/contact" component={Contact} />       
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={App} />
            </Switch>
        </HashRouter>
     );
}
 
export default Routes;