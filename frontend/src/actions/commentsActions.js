import axios from 'axios';
import { COMMENT_ADD_FAIL, COMMENT_ADD_REQUEST, COMMENT_ADD_SUCCESS, COMMENT_DELETE_FAIL, COMMENT_DELETE_REQUEST, COMMENT_DELETE_SUCCESS } from '../constants/commentsConstants';
import { getPosts } from './postsAction';

/**
 * Add comment action
 * @param {Number} post_id
 * @param {String} comment_txt
 */
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

    const { data } = await axios.post('https://lf-react-node-psql.herokuapp.com/api/comments', { post_id, comment_txt }, config);

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

/**
 * Delete Comment Action
 * @param {Number} comment_id
 */
export const deleteCommentAction = comment_id => async (dispatch, getState) => {
  try {
    dispatch({
      type: COMMENT_DELETE_REQUEST,
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

    const { data } = await axios.delete(`https://lf-react-node-psql.herokuapp.com/api/comments/${comment_id}`, config);

    dispatch({
      type: COMMENT_DELETE_SUCCESS,
      payload: data,
    });
    dispatch(getPosts());
  } catch (error) {
    dispatch({
      type: COMMENT_DELETE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
