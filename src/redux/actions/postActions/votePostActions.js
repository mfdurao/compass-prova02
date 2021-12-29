import {
  VOTE_POST_REQUEST,
  VOTE_POST_SUCCESS,
  VOTE_POST_ERROR,
} from "../../types/postsTypes";

export const votePostRequest = (id, option, pathCategory) => ({
  type: VOTE_POST_REQUEST,
  body: {
    id,
    option,
    pathCategory,
  },
});

export const votePostSuccess = () => ({
  type: VOTE_POST_SUCCESS,
});

export const votePostError = (error) => ({
  type: VOTE_POST_ERROR,
  error,
});
