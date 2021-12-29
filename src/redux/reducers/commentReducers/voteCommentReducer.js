import {
  VOTE_COMMENT_REQUEST,
  VOTE_COMMENT_SUCCESS,
  VOTE_COMMENT_ERROR,
} from "../../types/commentsTypes";

const INITIAL_STATE = {
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VOTE_COMMENT_REQUEST:
      return { ...state };
    case VOTE_COMMENT_SUCCESS:
      return { ...state };
    case VOTE_COMMENT_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
