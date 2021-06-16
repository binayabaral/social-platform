import axios from 'axios';
import { POST_UPLOAD_REQUEST, POST_UPLOAD_SUCCESS, POST_UPLOAD_FAIL, POST_FETCH_REQUEST, POST_FETCH_SUCCESS, POST_FETCH_FAIL } from '../constants/postsConstants';

export const addPost = post_text => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_UPLOAD_REQUEST,
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

    const { data } = await axios.post('http://localhost:5000/api/posts', { post_text }, config);

    dispatch({
      type: POST_UPLOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_UPLOAD_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
