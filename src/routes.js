import React from 'react';

import {BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';

import {isAuthenticated} from './auth';
import Leitura from './leitura';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated(props) ? (
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
            <Route exact path="/read" component={() => <h1>Leitura Dinâmica!!</h1>} />
            <PrivateRoute path="/app" component={(props) => logado(props)} />
            <PrivateRoute path="/leitura" teste="TESTADP" component={(props) => Leitura(props)}/>
        </Switch>
    </BrowserRouter>
);

const logado = (props) => {
    console.log(props)
    return (
        <h1>L O G A D O !!</h1>
    )
}

export default Routes;