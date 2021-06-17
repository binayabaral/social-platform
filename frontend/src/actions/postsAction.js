import axios from 'axios';
import { POST_UPLOAD_REQUEST, POST_UPLOAD_SUCCESS, POST_UPLOAD_FAIL, POST_FETCH_REQUEST, POST_FETCH_SUCCESS, POST_FETCH_FAIL, POST_EDIT_REQUEST, POST_EDIT_SUCCESS, POST_EDIT_FAIL, POST_DELETE_REQUEST, POST_DELETE_SUCCESS, POST_DELETE_FAIL } from '../constants/postsConstants';

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

    dispatch(getPosts());
  } catch (error) {
    dispatch({
      type: POST_UPLOAD_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getPosts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_FETCH_REQUEST,
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

    const { data } = await axios.get('http://localhost:5000/api/posts', config);

    dispatch({
      type: POST_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_FETCH_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const editPostAction = (id, new_post_text) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_EDIT_REQUEST,
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

    const { data } = await axios.put(`http://localhost:5000/api/posts/${id}`, { new_post_text }, config);

    dispatch({
      type: POST_EDIT_SUCCESS,
      payload: data,
    });
    dispatch(getPosts());
  } catch (error) {
    dispatch({
      type: POST_EDIT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const deletePostAction = id => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_DELETE_REQUEST,
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

    const { data } = await axios.delete(`http://localhost:5000/api/posts/${id}`, config);

    dispatch({
      type: POST_DELETE_SUCCESS,
      payload: data,
    });
    dispatch(getPosts());
  } catch (error) {
    dispatch({
      type: POST_DELETE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
