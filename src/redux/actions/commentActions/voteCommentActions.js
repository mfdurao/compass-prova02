import {
  VOTE_COMMENT_REQUEST,
  VOTE_COMMENT_SUCCESS,
  VOTE_COMMENT_ERROR,
} from "../../types/commentsTypes";

export const voteCommentRequest = (id, option, parentId) => ({
  type: VOTE_COMMENT_REQUEST,
  body: {
    id,
    option,
    parentId,
  },
});

export const voteCommentSuccess = () => ({
  type: VOTE_COMMENT_SUCCESS,
});

export const voteCommentError = (error) => ({
  type: VOTE_COMMENT_ERROR,
  error,
});
