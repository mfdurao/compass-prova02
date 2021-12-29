import { SORT_POST_REQUEST, SORT_POST_SUCCESS } from "../../types/postsTypes";

export const sortPostRequest = (sortType) => ({
  type: SORT_POST_REQUEST,
  sortType,
});

export const sortPostSuccess = (filter) => ({
  type: SORT_POST_SUCCESS,
  filter,
});
