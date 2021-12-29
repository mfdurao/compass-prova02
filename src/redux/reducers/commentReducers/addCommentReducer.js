import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR,
} from "../../types/commentsTypes";

const INITIAL_STATE = {
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COMMENT_REQUEST:
      return { ...state };
    case ADD_COMMENT_SUCCESS:
      return { ...state };
    case ADD_COMMENT_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};