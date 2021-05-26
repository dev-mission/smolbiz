import { Switch, Route, useRouteMatch } from "react-router-dom";

import UserShopPhotosList from './UserShopPhotosList.js';
import UserShopPhotoForm from './UserShopPhotoForm';

function UserShopPhotos(){
    //from reactRouterDOM, nested Route to reference existing path
    //read, index
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route exact path = {path}>
                <UserShopPhotosList />
            </Route>
            <Route path = {`${path}/new`}>
                <UserShopPhotoForm />
            </Route>
            <Route path = {`${path}/:id/edit`}>
                <UserShopPhotoForm />
            </Route>  
        </Switch>
    );
}

export default UserShopPhotos;