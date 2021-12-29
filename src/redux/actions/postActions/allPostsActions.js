import {
  ALL_POSTS_REQUEST,
  ALL_POSTS_SUCCESS,
  ALL_POSTS_ERROR,
} from "../../types/postsTypes";

export const allPostsRequest = () => ({
  type: ALL_POSTS_REQUEST,
});

export const allPostsSuccess = (allPosts) => ({
  type: ALL_POSTS_SUCCESS,
  allPosts,
});

export const allPostsError = (error) => ({
  type: ALL_POSTS_ERROR,
  error,
});
