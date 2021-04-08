import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './About';
import App from './App';

const Routes = () => {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route exact path="/about" component={About} /> 
                <Route exact path="/" component={App} />
            </Switch>
        </BrowserRouter>
     );
}
 
export default Routes;