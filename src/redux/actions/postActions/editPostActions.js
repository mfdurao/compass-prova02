import {
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_ERROR,
} from "../../types/postsTypes";

export const editPostRequest = (post, path) => ({
  type: EDIT_POST_REQUEST,
  body: {
    post,
    path,
  },
});

export const editPostSuccess = () => ({
  type: EDIT_POST_SUCCESS,
});

export const editPostError = (error) => ({
  type: EDIT_POST_ERROR,
  error,
});
