import {
  SINGLE_COMMENT_REQUEST,
  SINGLE_COMMENT_SUCCESS,
  SINGLE_COMMENT_ERROR,
} from "../../types/commentsTypes";

const INITIAL_STATE = {
  singleComment: [],
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SINGLE_COMMENT_REQUEST:
      return { ...state };
    case SINGLE_COMMENT_SUCCESS:
      return { ...state, singleComment: action.singleComment };
    case SINGLE_COMMENT_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
