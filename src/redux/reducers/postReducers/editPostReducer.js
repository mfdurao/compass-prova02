import {
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_ERROR,
} from "../../types/postsTypes";

const INITIAL_STATE = {
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_POST_REQUEST:
      return { ...state };
    case EDIT_POST_SUCCESS:
      return { ...state };
    case EDIT_POST_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
