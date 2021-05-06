import { Switch, Route, useRouteMatch } from "react-router-dom";

import OwnerShopPhotosList from './OwnerShopPhotosList';
import OwnerShopPhotoForm from './OwnerShopPhotoForm';

function OwnerShopPhotos(){
    //from reactRouterDOM, nested Route to reference existing path
    //read, index
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route exact path = {path}>
                <OwnerShopPhotosList />
            </Route>
            <Route path = {`${path}/new`}>
                <OwnerShopPhotoForm />
            </Route>
            <Route path = {`${path}/:id/edit`}>
                <OwnerShopPhotoForm />
            </Route>  
        </Switch>
    );
}

export default OwnerShopPhotos;