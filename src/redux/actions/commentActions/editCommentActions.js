import {
  EDIT_COMMENT_REQUEST,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_ERROR,
} from "../../types/commentsTypes";

export const editCommentRequest = (comment) => ({
  type: EDIT_COMMENT_REQUEST,
  body: {
    comment,
  },
});

export const editCommentSuccess = () => ({
  type: EDIT_COMMENT_SUCCESS,
});

export const editCommentError = (error) => ({
  type: EDIT_COMMENT_ERROR,
  error,
});
