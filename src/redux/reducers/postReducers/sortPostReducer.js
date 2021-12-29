import { SORT_POST_REQUEST, SORT_POST_SUCCESS } from "../../types/postsTypes";

const INITIAL_STATE = {
  filter:"",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SORT_POST_REQUEST:
      return { ...state };
    case SORT_POST_SUCCESS:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};
