import { combineReducers } from "redux";

import {
  addPostReducer,
  allPostsReducer,
  deletePostReducer,
  editPostReducer,
  postPageReducer,
  postsByCategoryReducer,
  sortPostReducer,
  votePostReducer,
} from "./postReducers";

import {
  addCommentReducer,
  commentsReducer,
  deleteCommentReducer,
  editCommentReducer,
  singleCommentReducer,
  voteCommentReducer,
} from "./commentReducers";

import { categoryReducer } from "./categoryReducers";

const rootReducer = combineReducers({
  categories: categoryReducer,

  allPosts: allPostsReducer,
  posts: postsByCategoryReducer,
  post: postPageReducer,
  addPost: addPostReducer,
  deletePost: deletePostReducer,
  votePost: votePostReducer,
  editPost: editPostReducer,
  sortPost: sortPostReducer,

  comments: commentsReducer,
  addComment: addCommentReducer,
  deleteComment: deleteCommentReducer,
  voteComment: voteCommentReducer,
  singleComment: singleCommentReducer,
  editComment: editCommentReducer,
});

export default rootReducer;
