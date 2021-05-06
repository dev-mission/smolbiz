import { Switch, Route, useRouteMatch } from "react-router-dom";

import ShopsList from './ShopsList';
import ShopForm from './ShopForm';

function Shops(){
    //from reactRouterDOM, nested Route to reference existing path
    //read, index
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route exact path = {path}>
                <ShopsList />
            </Route>
            <Route path = {`${path}/new`}>
                <ShopForm />
            </Route>
            <Route path = {`${path}/:id/edit`}>
                <ShopForm />
            </Route>  
        </Switch>
    );
}

export default Shops;