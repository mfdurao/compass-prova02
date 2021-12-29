import {
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
} from "../../types/postsTypes";

const INITIAL_STATE = {
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETE_POST_REQUEST:
      return { ...state };
    case DELETE_POST_SUCCESS:
      return { ...state };
    case DELETE_POST_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
