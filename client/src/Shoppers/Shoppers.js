import { Switch, Route, useRouteMatch } from "react-router-dom";

import ShoppersList from './ShoppersList';
import ShopperForm from './ShopperForm';

function Shoppers(){
    //from reactRouterDOM, nested Route to reference existing path
    //read, index
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route exact path = {path}>
                <ShoppersList />
            </Route>
            <Route path = {`${path}/new`}>
                <ShopperForm />
            </Route>
            <Route path = {`${path}/:id/edit`}>
                <ShopperForm />
            </Route>  
        </Switch>
    );
}

export default Shoppers;