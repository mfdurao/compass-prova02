import {
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_ERROR,
} from "../../types/commentsTypes";

export const deleteCommentRequest = (id, parentId) => ({
  type: DELETE_COMMENT_REQUEST,
  body: {
    id,
    parentId,
  },
});

export const deleteCommentSuccess = () => ({
  type: DELETE_COMMENT_SUCCESS,
});

export const deleteCommentError = (error) => ({
  type: DELETE_COMMENT_ERROR,
  error,
});
