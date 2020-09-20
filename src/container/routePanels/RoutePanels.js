
import React from "react";
import {Switch, Route} from "react-router-dom";
import routes from '../../static/routes/routes';
import './RoutePanels.css';


export default function RoutePanels() {
    return (
        <Switch>
            {routes.map((route,i) => <Route exact path={route.path} >
                        {route.Component}
                </Route>
            )}
        </Switch>
    );
}