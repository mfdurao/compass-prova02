import { POST_REQUEST, POST_SUCCESS, POST_ERROR } from "../../types/postsTypes";

const INITIAL_STATE = {
  post: [],
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return { ...state };
    case POST_SUCCESS:
      return { ...state, post: action.post };
    case POST_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
