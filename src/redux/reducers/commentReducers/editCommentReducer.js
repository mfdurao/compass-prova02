import {
  EDIT_COMMENT_REQUEST,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_ERROR,
} from "../../types/commentsTypes";

const INITIAL_STATE = {
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_COMMENT_REQUEST:
      return { ...state };
    case EDIT_COMMENT_SUCCESS:
      return { ...state };
    case EDIT_COMMENT_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
