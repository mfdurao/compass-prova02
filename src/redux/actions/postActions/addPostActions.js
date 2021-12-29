import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_ERROR,
} from "../../types/postsTypes";

export const addPostRequest = (newPost) => ({
  type: ADD_POST_REQUEST,
  newPost,
});

export const addPostSuccess = () => ({
  type: ADD_POST_SUCCESS,
});

export const addPostError = (error) => ({
  type: ADD_POST_ERROR,
  error,
});
