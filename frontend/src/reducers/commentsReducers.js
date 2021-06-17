import { COMMENT_ADD_FAIL, COMMENT_ADD_REQUEST, COMMENT_ADD_SUCCESS } from '../constants/commentsConstants';

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
