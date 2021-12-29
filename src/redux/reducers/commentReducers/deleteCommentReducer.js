import {
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_ERROR,
} from "../../types/commentsTypes";

const INITIAL_STATE = {
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETE_COMMENT_REQUEST:
      return { ...state };
    case DELETE_COMMENT_SUCCESS:
      return { ...state };
    case DELETE_COMMENT_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
