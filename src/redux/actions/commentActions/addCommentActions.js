import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR,
} from "../../types/commentsTypes";

export const addCommentRequest = (newComment) => ({
  type: ADD_COMMENT_REQUEST,
  newComment,
});

export const addCommentSuccess = () => ({
  type: ADD_COMMENT_SUCCESS,
});

export const addCommentError = (error) => ({
  type: ADD_COMMENT_ERROR,
  error,
});
