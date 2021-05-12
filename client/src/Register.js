import {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import classNames from 'classnames';
import {StatusCodes} from 'http-status-codes'

import Api from './Api';
import UnexpectedError from './UnexpectedError';
import ValidationError from './ValidationError';

function Register() {
  const history = useHistory();

  const [userType, setUserType] = useState(null);

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);

  const onChange = function(event) {
    const newUser = {...user};
    newUser[event.target.name] = event.target.value;
    setUser(newUser);
    setUserType(userType);
  };

  const onSubmit = async function(event) {
    event.preventDefault();
    setError(null);
    try {
      await Api.auth.register(user);
        if(userType == "BusinessOwner"){
          //replace / with where Business Owners are to be directed
          history.push('/login', {flash: 'Your account has been created!'});
        }
        else if(userType == "Shopper"){
          //replace / with where Shoppers are to be directed
          history.push('/', {flash: 'Your account has been created!'});
        }
        else{
          //idk if this is right
          setError(new ValidationError(error.response.data));
        }
    } catch (error) {
      if (error.response?.status === StatusCodes.UNPROCESSABLE_ENTITY) {
        setError(new ValidationError(error.response.data));
      } else {
        setError(new UnexpectedError());
      }
    };
  }

  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Register</h2>
              <form onSubmit={onSubmit}>
                {error && error.message && (
                  <div className="alert alert-danger">{error.message}</div>
                )}
                <div className="mb-3">
                  <label className="form-label" htmlFor="firstName">First name</label>
                  <input type="text" class={classNames('form-control', {'is-invalid': error?.errorsFor?.('firstName')})} id="firstName" name="firstName" onChange={onChange} value={user.firstName} />
                  {error?.errorMessagesHTMLFor?.('firstName')}
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="lastName">Last name</label>
                  <input type="text" class={classNames('form-control', {'is-invalid': error?.errorsFor?.('lastName')})} id="lastName" name="lastName" onChange={onChange} value={user.lastName} />
                  {error?.errorMessagesHTMLFor?.('lastName')}
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="username">Username</label>
                  <input type="text" class={classNames('form-control', {'is-invalid': error?.errorsFor?.('username')})} id="username" name="username" onChange={onChange} value={user.username} />
                  {error?.errorMessagesHTMLFor?.('username')}
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input type="text" class={classNames('form-control', {'is-invalid': error?.errorsFor?.('email')})} id="email" name="email" onChange={onChange} value={user.email} />
                  {error?.errorMessagesHTMLFor?.('email')}
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">Password</label>
                  <input type="password" class={classNames('form-control', {'is-invalid': error?.errorsFor?.('password')})} id="password" name="password" onChange={onChange} value={user.password} />
                  {error?.errorMessagesHTMLFor?.('password')}
                </div>
                <div className = "mb-3">
                  <label className="form-label" htmlFor="userType">Select one of the following:</label>
                  <select class="form-select" aria-label="Default select example" onChange={onChange} value={userType}>
                    <option value="BusinessOwner">Business Owner</option>
                    <option value="Shopper">Shopper</option>
                  </select>
                </div>
                <div className="mb-3 d-grid">
                  <button className="btn btn-primary" type="submit">Submit</button>
                </div>
                <div className="mb-3 text-center">
                  <Link to="/login">Already have an account?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>  
    </main>
  );
}

export default Register;
