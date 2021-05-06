import { Switch, Route, useRouteMatch } from "react-router-dom";

import BadgesList from './BadgesList';
import BadgeForm from './BadgeForm';

function Badges(){
    //from reactRouterDOM, nested Route to reference existing path
    //read, index
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route exact path = {path}>
                <BadgesList />
            </Route>
            <Route path = {`${path}/new`}>
                <BadgeForm />
            </Route>
            <Route path = {`${path}/:id/edit`}>
                <BadgeForm />
            </Route>  
        </Switch>
    );
}

export default Badges;