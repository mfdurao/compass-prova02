import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../utils/api";

import {
  deletePostError,
  deletePostSuccess,
} from "../../actions/postActions/deletePostActions";
import { allPostsRequest } from "../../actions/postActions/allPostsActions";
import { postsByCategoryRequest } from "../../actions/postActions/postsByCategoryActions";

import { DELETE_POST_REQUEST } from "../../types/postsTypes";

function* deletePostRequestListener() {
  yield takeLatest(DELETE_POST_REQUEST, function* (action) {
    try {
      yield call(api.delete, `/posts/${action.id}`);
      yield put(deletePostSuccess());
      if (action.path === undefined) yield put(allPostsRequest());
      else yield put(postsByCategoryRequest(action.path));
    } catch (error) {
      yield put(deletePostError(error));
    }
  });
}

export function deletePostSagas() {
  return [deletePostRequestListener];
}
