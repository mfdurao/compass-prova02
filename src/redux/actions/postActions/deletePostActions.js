import {
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
} from "../../types/postsTypes";

export const deletePostRequest = (id, path) => ({
  type: DELETE_POST_REQUEST,
  id,
  path,
});

export const deletePostSuccess = () => ({
  type: DELETE_POST_SUCCESS,
});

export const deletePostError = (error) => ({
  type: DELETE_POST_ERROR,
  error,
})