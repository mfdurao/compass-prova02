import {
  SINGLE_COMMENT_REQUEST,
  SINGLE_COMMENT_SUCCESS,
  SINGLE_COMMENT_ERROR,
} from "../../types/commentsTypes";

export const singleCommentRequest = (id) => ({
  type: SINGLE_COMMENT_REQUEST,
  id,
});

export const singleCommentSuccess = (singleComment) => ({
  type: SINGLE_COMMENT_SUCCESS,
  singleComment,
});

export const singleCommentError = (error) => ({
  type: SINGLE_COMMENT_ERROR,
  error,
});
