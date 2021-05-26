import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';

import {AuthContextProvider, AuthProtectedRoute} from './AuthContext';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Passwords from './Passwords';
import Register from './Register';
import Items from './Items/Items';
import ShopTypes from './ShopTypes/ShopTypes';
import CommunityIdentities from './CommunityIdentities/CommunityIdentities';
import OwnerShopPhotos from './OwnerShopPhotos/OwnerShopPhotos';
import Shops from './Shops/Shops';
import Shoutouts from './Shoutouts/Shoutouts';
import Badges from './Badges/Badges';
import Kudos from './Kudos/Kudos';
import Shoppers from './Shoppers/Shoppers';
import UserShopPhotos from './UserShopPhotos/UserShopPhotos';
import BusinessOwnerSignUp from './BusinessOwnerSignUp/Welcome';
import SignUpShopper from './SignUpShopper';
import ShopperProfile from './ShopperProfile';
import ShopProfile from './ShopProfile';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path= "/badges">
            <Badges />
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
          <AuthProtectedRoute path= "/items">
            <Items />
          </AuthProtectedRoute>
          <AuthProtectedRoute path= "/shoptypes">
            <ShopTypes />
          </AuthProtectedRoute>
          <AuthProtectedRoute path= "/communityidentities">
            <CommunityIdentities />
          </AuthProtectedRoute>
          <AuthProtectedRoute path= "/ownershopphotos">
            <OwnerShopPhotos />
          </AuthProtectedRoute>
          <AuthProtectedRoute path= "/shops">
            <Shops />
          </AuthProtectedRoute>
          <AuthProtectedRoute path= "/shoppers">
            <Shoppers />
          </AuthProtectedRoute>
          <AuthProtectedRoute path= "/kudos">
            <Kudos />
          </AuthProtectedRoute>
          <AuthProtectedRoute path= "/badges">
            <Badges />
          </AuthProtectedRoute>
          <AuthProtectedRoute path= "/shoutouts">
            <Shoutouts />
          </AuthProtectedRoute>
          <AuthProtectedRoute path= "/usershopphotos">
            <UserShopPhotos />
          </AuthProtectedRoute>
          <AuthProtectedRoute path= "/welcome">
            <BusinessOwnerSignUp />
          </AuthProtectedRoute>
          <AuthProtectedRoute path= "/signupshopper">
            <SignUpShopper />
          </AuthProtectedRoute>
          <AuthProtectedRoute path= "/usershopphotos">
            <UserShopPhotos />
          </AuthProtectedRoute>
          <AuthProtectedRoute path= "/shopperprofile">
            <ShopperProfile />
          </AuthProtectedRoute>
          <AuthProtectedRoute path= "/shopprofile">
            <ShopProfile />
          </AuthProtectedRoute>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
