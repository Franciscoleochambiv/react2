import axios from 'axios';

import {
  ADD_POST,
  GET_POST,
  GET_POSTS,
  GET_ERRORS,
  CLEAR_ERRORS,
  DELETE_COMMENT,
  POST_LOADING,
  DELETE_POST,
} from './types';

//let unidad="https://localhost";
//let unidad="https://adryan2.sytes.net:5000";


let unidad="https://apisfsystem.herokuapp.com";


// Add Post
export const addPost = postData => dispatch => {
  dispatch(clearErrors());
  axios
    .post(unidad+'/api/posts', postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data,
      })
    ).catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Comment
export const addComment = (postId, commentData) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(unidad+`/api/posts/comment/${postId}`, commentData)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data,
      })
    ).catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Post
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(unidad+'/api/posts')
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      })
    ).catch(err => 
      dispatch({
        type: GET_POSTS,
        payload: null,
      })
    );
};

// Get Post
export const getPost = (id) => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(unidad+`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data,
      })
    ).catch(err => 
      dispatch({
        type: GET_POST,
        payload: null,
      })
    );
};

// Delete Post
export const deletePost = id => dispatch => {
  if(window.confirm('Are you sure? This can NOT be undone!')) {
    axios
      .delete(unidad+`/api/posts/${id}`)
      .then(res =>
        dispatch({
          type: DELETE_POST,
          payload: id
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// Delete Comment
export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(unidad+`/api/posts/comment/${postId}/${commentId}`)
    .then(res =>
      dispatch({
        type: DELETE_COMMENT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Like
export const addLike = id => dispatch => {
  axios
    .post(unidad+`/api/posts/like/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Remove Like
export const removeLike = id => dispatch => {
  axios
    .post(unidad+`/api/posts/unlike/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set Loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};