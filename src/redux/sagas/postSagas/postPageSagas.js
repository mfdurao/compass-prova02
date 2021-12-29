import { takeLatest, call, put } from "@redux-saga/core/effects";

import api from "../../../utils/api";

import { postPageError, postPageSuccess } from "../../actions/postActions/postPageActions";
import { POST_REQUEST } from "../../types/postsTypes";

function* onPostRequestListener() {
  yield takeLatest(POST_REQUEST, function* (action) {
    try {
      const response = yield call(api.get, `/posts/${action.id}`);
      yield put(postPageSuccess(response.data));
    } catch (error) {
      yield put(postPageError(error));
    }
  });
}

export function postPageSagas() {
  return [onPostRequestListener];
}
