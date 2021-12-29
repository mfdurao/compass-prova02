import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_ERROR,
} from "../../types/postsTypes";

const INITIAL_STATE = {
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return { ...state };
    case ADD_POST_SUCCESS:
      return { ...state, error: null };
    case ADD_POST_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
