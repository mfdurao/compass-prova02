import {
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  COMMENT_ERROR,
} from "../../types/commentsTypes";

const INITIAL_STATE = {
  comments: [],
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMMENT_REQUEST:
      return { ...state };
    case COMMENT_SUCCESS:
      return { ...state, comments: action.comments };
    case COMMENT_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
