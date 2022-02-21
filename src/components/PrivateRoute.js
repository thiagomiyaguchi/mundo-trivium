import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useGoogleAuth } from "./googleAuth";

const PrivateRoute = ({component: Component, ...rest}) => {

    const { isSignedIn } = useGoogleAuth();

    return (
        <div>
            <Route {...rest} render={props => (
                isSignedIn ?
                <Component {...props} />: 
                <Redirect exact from="/dashboard" to="/" />
            )} />
        </div>
    );
};

export default PrivateRoute;