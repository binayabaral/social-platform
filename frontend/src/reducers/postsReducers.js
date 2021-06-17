import { POST_UPLOAD_REQUEST, POST_UPLOAD_SUCCESS, POST_UPLOAD_FAIL, POST_FETCH_REQUEST, POST_FETCH_SUCCESS, POST_FETCH_FAIL, POST_EDIT_REQUEST, POST_EDIT_SUCCESS, POST_EDIT_FAIL, POST_DELETE_REQUEST, POST_DELETE_SUCCESS, POST_DELETE_FAIL } from '../constants/postsConstants';

export const postsAddReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_UPLOAD_REQUEST:
      return { ...state, error: '', success: false, loading: true };
    case POST_UPLOAD_SUCCESS:
      return { ...state, error: '', loading: false, success: true, posts: [...state.posts, action.payload] };
    case POST_UPLOAD_FAIL:
      return { ...state, loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const postsGetReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_FETCH_REQUEST:
      return { ...state, error: '', success: false, loading: true };
    case POST_FETCH_SUCCESS:
      return { ...state, error: '', loading: false, success: true, posts: [...action.payload] };
    case POST_FETCH_FAIL:
      return { ...state, loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const postsEditReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_EDIT_REQUEST:
      return { success: false, loading: true };
    case POST_EDIT_SUCCESS:
      return { loading: false, success: true };
    case POST_EDIT_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const postsDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_DELETE_REQUEST:
      return { success: false, loading: true };
    case POST_DELETE_SUCCESS:
      return { loading: false, success: true };
    case POST_DELETE_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
