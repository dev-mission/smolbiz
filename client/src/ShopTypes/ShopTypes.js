import { Switch, Route, useRouteMatch } from "react-router-dom";

import ShopTypesList from './ShopTypesList';
import ShopTypeForm from './ShopTypeForm';

function ShopTypes(){
    //from reactRouterDOM, nested Route to reference existing path
    //read, index
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route exact path = {path}>
                <ShopTypesList />
            </Route>
            <Route path = {`${path}/new`}>
                <ShopTypeForm />
            </Route>
            <Route path = {`${path}/:id/edit`}>
                <ShopTypeForm />
            </Route>  
        </Switch>
    );
}

export default ShopTypes; 