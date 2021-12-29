import {
  ALL_POSTS_REQUEST,
  ALL_POSTS_SUCCESS,
  ALL_POSTS_ERROR,
} from "../../types/postsTypes";

const INITIAL_STATE = {
  allPosts: [],
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALL_POSTS_REQUEST:
      return { ...state };
    case ALL_POSTS_SUCCESS:
      return { ...state, allPosts: action.allPosts };
    case ALL_POSTS_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
