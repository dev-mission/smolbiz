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
import Shops from './Shops/Shops';
import Shoutouts from './Shoutouts/Shoutouts';
import Badges from './Badges/Badges';

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
          <Route path= "/items">
            <Items />
          </Route>
          <Route path= "/shops">
            <Shops />
          </Route>
          <Route path= "/shoutouts">
            <Shoutouts />
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
