import { takeLatest, call, put } from "redux-saga/effects";

import api from "../../../utils/api";

import { commentError, commentSuccess } from "../../actions/commentActions/commentsActions";

import { COMMENT_REQUEST } from "../../types/commentsTypes";

function* onCommentsRequestListener() {
  yield takeLatest(COMMENT_REQUEST, function* (action) {
    try {
      const response = yield call(api.get, `/posts/${action.id}/comments`);
      yield put(commentSuccess(response.data));
    } catch (error) {
      yield put(commentError(error));
    }
  });
}

export function commentsSagas() {
  return [onCommentsRequestListener];
}
