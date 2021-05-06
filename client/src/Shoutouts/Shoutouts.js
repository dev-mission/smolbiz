import { Switch, Route, useRouteMatch } from "react-router-dom";

import ShoutoutsList from './ShoutoutsList';
import ShoutoutForm from './ShoutoutForm';

function Shoutouts(){
    //from reactRouterDOM, nested Route to reference existing path
    //read, index
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route exact path = {path}>
                <ShoutoutsList />
            </Route>
            <Route path = {`${path}/new`}>
                <ShoutoutForm />
            </Route>
            <Route path = {`${path}/:id/edit`}>
                <ShoutoutForm />
            </Route>  
        </Switch>
    );
}

export default Shoutouts;