import { Switch, Route, useRouteMatch } from "react-router-dom";

import CommunityIdentitiesList from './CommunityIdentitiesList';
import CommunityIdentityForm from './CommunityIdentityForm';

function CommunityIdentities(){
    //from reactRouterDOM, nested Route to reference existing path
    //read, index
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route exact path = {path}>
                <CommunityIdentitiesList />
            </Route>
            <Route path = {`${path}/new`}>
                <CommunityIdentityForm />
            </Route>
            <Route path = {`${path}/:id/edit`}>
                <CommunityIdentityForm />
            </Route>  
        </Switch>
    );
}

export default CommunityIdentities; 