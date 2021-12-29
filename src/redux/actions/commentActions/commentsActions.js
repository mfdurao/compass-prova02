import {
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  COMMENT_ERROR,
} from "../../types/commentsTypes";

export const commentRequest = (id) => ({
  type: COMMENT_REQUEST,
  id,
});

export const commentSuccess = (comments) => ({
  type: COMMENT_SUCCESS,
  comments,
});

export const commentError = (error) => ({
  type: COMMENT_ERROR,
  error,
});
