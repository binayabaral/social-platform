import { COMMENT_ADD_FAIL, COMMENT_ADD_REQUEST, COMMENT_ADD_SUCCESS, COMMENT_DELETE_FAIL, COMMENT_DELETE_REQUEST, COMMENT_DELETE_SUCCESS } from '../constants/commentsConstants';

export const commentAddReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMENT_ADD_REQUEST:
      return { success: false, loading: true };
    case COMMENT_ADD_SUCCESS:
      return { loading: false, success: true };
    case COMMENT_ADD_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const commentDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMENT_DELETE_REQUEST:
      return { success: false, loading: true };
    case COMMENT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case COMMENT_DELETE_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
