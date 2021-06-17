import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { postsAddReducer, postsDeleteReducer, postsEditReducer, postsGetReducer } from './reducers/postsReducers';
import { commentAddReducer } from './reducers/commentsReducers';

const reducer = combineReducers({ userLogin: userLoginReducer, userRegister: userRegisterReducer, postsDetails: postsAddReducer, allPosts: postsGetReducer, editPost: postsEditReducer, deletePost: postsDeleteReducer, commentAdd: commentAddReducer });

const userInfoFromStorage = localStorage.getItem('userInformation') ? JSON.parse(localStorage.getItem('userInformation')) : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  postsDetails: { loading: false, success: false, error: '', posts: [] },
  allPosts: { loading: false, success: false, error: '', posts: [] },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
