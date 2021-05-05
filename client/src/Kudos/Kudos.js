import { Switch, Route, useRouteMatch } from "react-router-dom";

import KudosList from './KudosList';
import KudoForm from './KudoForm';

function Kudos(){
    //from reactRouterDOM, nested Route to reference existing path
    //read, index
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route exact path = {path}>
                <KudosList />
            </Route>
            <Route path = {`${path}/new`}>
                <KudoForm />
            </Route>
            <Route path = {`${path}/:id/edit`}>
                <KudoForm />
            </Route>  
        </Switch>
    );
}

export default Kudos;