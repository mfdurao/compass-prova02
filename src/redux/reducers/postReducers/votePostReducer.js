import {
  VOTE_POST_REQUEST,
  VOTE_POST_SUCCESS,
  VOTE_POST_ERROR,
} from "../../types/postsTypes";

const INITIAL_STATE = {
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VOTE_POST_REQUEST:
      return { ...state };
    case VOTE_POST_SUCCESS:
      return { ...state };
    case VOTE_POST_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
