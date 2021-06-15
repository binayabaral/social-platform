import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';

const Register = ({ history }) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordMatch, setPasswordMatch] = useState(true);

  const dispatch = useDispatch();

  const userRegister = useSelector(state => state.userRegister);
  const { loading, error } = userRegister;

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) history.push('/');
  });

  const formSubmitHandler = e => {
    e.preventDefault();
    if (password !== confirmPassword) return;

    dispatch(register(fname, lname, email, password));
  };

  const handlePasswordFieldChange = e => {
    setPassword(e.target.value);
    if (confirmPassword === e.target.value) setPasswordMatch(true);
    else setPasswordMatch(false);
  };

  const handleConfirmPasswordFieldChange = e => {
    setConfirmPassword(e.target.value);
    if (password === e.target.value) setPasswordMatch(true);
    else setPasswordMatch(false);
  };

  return (
    <section className="login">
      <div className="posts-container">
        {error && <span>{error}</span>}
        {loading && <span>Loading</span>}
        <form onSubmit={formSubmitHandler}>
          <div className="form-grp">
            <label htmlFor="register__fname">First Name:</label>
            <input type="text" id="register__fname" value={fname} onChange={e => setFname(e.target.value)} required />
          </div>
          <div className="form-grp">
            <label htmlFor="register__lname">Last Name:</label>
            <input type="text" id="register__lname" value={lname} onChange={e => setLname(e.target.value)} required />
          </div>
          <div className="form-grp">
            <label htmlFor="register__email">Email:</label>
            <input type="email" id="register__email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="form-grp">
            <label htmlFor="register__password">Password:</label>
            <input type="password" id="register__password" value={password} onChange={handlePasswordFieldChange} required />
          </div>
          <div className="form-grp">
            <label htmlFor="register__confirm-password">Confirm Password:</label>
            <input type="password" id="register__confirm-password" value={confirmPassword} onChange={handleConfirmPasswordFieldChange} required />
          </div>
          {!passwordMatch && <p>Passwords do not match</p>}
          <button type="submit" className="btn">
            Sign Up
          </button>
        </form>
        <p>
          If you are already a member, <Link to="/login">Sign In here</Link>.
        </p>
      </div>
    </section>
  );
};

export default Register;
