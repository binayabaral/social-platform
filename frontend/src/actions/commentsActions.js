import axios from 'axios';
import { COMMENT_ADD_FAIL, COMMENT_ADD_REQUEST, COMMENT_ADD_SUCCESS } from '../constants/commentsConstants';
import { getPosts } from './postsAction';

export const addCommentAction = (post_id, comment_txt) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COMMENT_ADD_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post('http://localhost:5000/api/comments', { post_id, comment_txt }, config);

    dispatch({
      type: COMMENT_ADD_SUCCESS,
      payload: data,
    });
    dispatch(getPosts());
  } catch (error) {
    dispatch({
      type: COMMENT_ADD_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
