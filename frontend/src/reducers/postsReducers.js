import { POST_UPLOAD_REQUEST, POST_UPLOAD_SUCCESS, POST_UPLOAD_FAIL } from '../constants/postsConstants';

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
