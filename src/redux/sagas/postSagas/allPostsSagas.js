import { takeLatest, call, put } from "redux-saga/effects";

import api from "../../../utils/api";
import { allPostsError, allPostsSuccess } from "../../actions/postActions/allPostsActions";

import { ALL_POSTS_REQUEST } from "../../types/postsTypes";

function* onAllPostsRequestListener() {
  yield takeLatest(ALL_POSTS_REQUEST, function* () {
    try {
      const response = yield call(api.get, "/posts");
      yield put(allPostsSuccess(response.data));
    } catch (error) {
      yield put(allPostsError(error));
    }
  });
}

export function allPostsSagas() {
  return [onAllPostsRequestListener];
}
