import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';

import {AuthContextProvider} from './AuthContext';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Passwords from './Passwords';
import Register from './Register';
import Items from './Items/Items';
import ShopTypes from './ShopTypes/ShopTypes';
import CommunityIdentities from './CommunityIdentities/CommunityIdentities';
import OwnerShopPhotos from './OwnerShopPhotos/OwnerShopPhotos';



function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/passwords">
            <Passwords />
          </Route>
          {process.env.REACT_APP_FEATURE_REGISTRATION === 'true' && (
            <Route path="/register">
              <Register />
            </Route>
          )}
          <Route path= "/items">
            <Items />
          </Route>
          <Route path= "/shoptypes">
            <ShopTypes />
          </Route>
          <Route path= "/communityidentities">
            <CommunityIdentities />
          </Route>
          <Route path= "/ownershopphotos">
            <OwnerShopPhotos />
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
