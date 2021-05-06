import { Switch, Route, useRouteMatch } from "react-router-dom";

import ItemsList from './ItemsList';
import ItemForm from './ItemForm';

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
                <ItemForm />
            </Route>
            <Route path = {`${path}/:id/edit`}>
                <ItemForm />
            </Route>  
        </Switch>
    );
}

export default Items;