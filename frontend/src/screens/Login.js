import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';

const Login = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <section className="login">
      <div className="posts-container">
        {error && <span>{error}</span>}
        {loading && <span>Loading</span>}
        <form onSubmit={submitHandler}>
          <div className="form-grp">
            <label htmlFor="login__email">Email:</label>
            <input type="email" id="login__email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-grp">
            <label htmlFor="login__password">Password:</label>
            <input type="password" id="login__password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn">
            Sign In
          </button>
        </form>
        <p>
          If you are not a member yet, <Link to="/register">Sign Up here</Link>.
        </p>
      </div>
    </section>
  );
};

export default Login;
