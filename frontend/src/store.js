import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { postsAddReducer } from './reducers/postsReducers';

const reducer = combineReducers({ userLogin: userLoginReducer, userRegister: userRegisterReducer, postsDetails: postsAddReducer });

const userInfoFromStorage = localStorage.getItem('userInformation') ? JSON.parse(localStorage.getItem('userInformation')) : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  postsDetails: { loading: false, success: false, error: '', posts: [] },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
