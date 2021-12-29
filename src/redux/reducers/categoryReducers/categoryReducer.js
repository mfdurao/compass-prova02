import {
  CATEGORY_REQUEST,
  CATEGORY_ERROR,
  CATEGORY_SUCCESS,
} from "../../types/categoryTypes";

const INITIAL_STATE = {
  allCategories: [],
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
     case CATEGORY_REQUEST:
      return { ...state };
    case CATEGORY_SUCCESS:
      return {...state, allCategories: action.allCategories}
    case CATEGORY_ERROR:
      return { ...state, error: action.error }
    default:
      return state;
  }
};
