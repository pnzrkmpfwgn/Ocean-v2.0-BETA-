import api from '../utils/api';
import {setAlert} from './alert';
import {
  GET_POSTS,
  POST_ERROR,
  ADD_POST,
  DELETE_POST,
} from '../actions/actionTypes';

//Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await api.get('/post');

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

//Delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.delete(`/post/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id,
    });
    dispatch(setAlert('Post Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

//Add post
export const addPost = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/post', formData);
    dispatch({
      type: ADD_POST,
      payload: res.data,
    });

    dispatch(setAlert('Post Created', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};
