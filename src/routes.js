import React from 'react';

import {BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';

import {isAuthenticated} from './auth';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/', state: { from: props.location}}} />
        )
    )}/>
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Hello World ReactJS</h1>} />
            <PrivateRoute path="/app" component={() => <h1>L O G A D O !!</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;