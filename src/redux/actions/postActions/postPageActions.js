import { POST_REQUEST, POST_SUCCESS, POST_ERROR } from "../../types/postsTypes";

export const postPageRequest = (id) => ({
  type: POST_REQUEST,
  id,
});

export const postPageSuccess = (post) => ({
  type: POST_SUCCESS,
  post,
});

export const postPageError = (error) => ({
  type: POST_ERROR,
  error,
});
