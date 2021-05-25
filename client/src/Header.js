import { use } from 'passport';
import {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';

import Api from './Api';
import {useAuthContext} from './AuthContext';

function Header() {
  const history = useHistory();
  const {user, setUser} = useAuthContext();

  useEffect(function() {
    Api.users.me()
      .then(response => {
        if (response.status === 204) {
          setUser(null);
        } else {
          setUser(response.data);
        }
      });
  }, [setUser]);

  const onLogout = async function(event) {
    event.preventDefault();
    await Api.auth.logout();
    setUser(null);
    history.push('/');
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand mb-0 h1" to="/">SmolBiz</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>    
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav flex-grow-1 mb-2 mb-md-0">
            <li className="nav-item active">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" aria-current="page" to="/FriendsFeed">Friends' Feed</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" aria-current="page" to="/Leaderboard">Leaderboard</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" aria-current="page" to="/AboutUs">About Us</Link>
            </li>
            <div className="flex-grow-1 d-flex justify-content-end">
              {user && (
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {user.firstName}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    {user.isAdmin && (
                      <>
                        <li><Link className="dropdown-item" to="/shoptypes">Shop Types</Link></li>
                        <li><Link className="dropdown-item" to="/communityidentities">Community Identities</Link></li>
                        <li><Link className="dropdown-item" to="/basicinfo">Test /basicinfo</Link></li>
                        <li><Link className="dropdown-item" to="/businessinfo">Test /businessinfo</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                      </>
                    )}
                    <li><a className="dropdown-item" href="/logout" onClick={onLogout}>Log out</a></li>
                  </ul>
                </li>
                )}
              {!user && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Sign Up or Log in</Link>
                </li>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
