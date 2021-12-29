import {
  POSTS_CATEGORY_REQUEST,
  POSTS_CATEGORY_SUCCESS,
  POSTS_CATEGORY_ERROR,
} from "../../types/postsTypes";

const INITIAL_STATE = {
  posts: [],
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_CATEGORY_REQUEST:
      return { ...state };
    case POSTS_CATEGORY_SUCCESS:
      return { ...state, posts: action.posts };
    case POSTS_CATEGORY_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
