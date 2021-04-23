import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './About';
import App from './App';
import Projects from './Projects';
import Contact from './Contact';

const Routes = () => {
    return ( 
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/contact" component={Contact} />       
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={App} />
            </Switch>
        </BrowserRouter>
     );
}
 
export default Routes;