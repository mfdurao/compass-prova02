import {
  POSTS_CATEGORY_REQUEST,
  POSTS_CATEGORY_SUCCESS,
  POSTS_CATEGORY_ERROR,
} from "../../types/postsTypes";

export const postsByCategoryRequest = (category) => ({
  type: POSTS_CATEGORY_REQUEST,
  category,
});

export const postsByCategorySuccess = (posts) => ({
  type: POSTS_CATEGORY_SUCCESS,
  posts,
});

export const postsByCategoryError = (error) => ({
  type: POSTS_CATEGORY_ERROR,
  error,
});
