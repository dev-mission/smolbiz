import { Switch, Route, useRouteMatch } from "react-router-dom";

import ItemsList from './ItemsList';
import ItemsForm from './ItemsForm';

function Items(){
    //from reactRouterDOM, nested Route to reference existing path
    //read, index
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route exact path = {path}>
                <ItemsList />
            </Route>
            <Route path = {`${path}/new`}>
                <ItemsForm />
            </Route>
            <Route path = {`${path}/:id/edit`}>
                <ItemsForm />
            </Route>  
        </Switch>
    );
}

export default Items;