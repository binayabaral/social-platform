import axios from 'axios';
import { POST_REMOVE } from '../constants/postsConstants';
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT } from '../constants/userConstants';

/**
 * User Login Action
 * @param {String} email
 * @param {String} password
 */
export const login = (email, password) => async dispatch => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password }, config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInformation', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

/**
 * Register new user action
 * @param {String} fname
 * @param {String} lname
 * @param {String} email
 * @param {String} password
 */
export const register = (fname, lname, email, password) => async dispatch => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('http://localhost:5000/api/users/register', { fname, lname, email, password }, config);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInformation', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

/**
 * User Logout Action
 */
export const logout = () => dispatch => {
  localStorage.removeItem('userInformation');
  dispatch({ type: POST_REMOVE });
  dispatch({ type: USER_LOGOUT });
  document.location.href = '/';
};
