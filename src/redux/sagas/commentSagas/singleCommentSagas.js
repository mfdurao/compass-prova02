import { takeLatest, call, put } from "@redux-saga/core/effects";

import api from "../../../utils/api";
import {
  singleCommentSuccess,
  singleCommentError,
} from "../../actions/commentActions/singleCommentActions";

import { SINGLE_COMMENT_REQUEST } from "../../types/commentsTypes";

function* singleCommentListener() {
  yield takeLatest(SINGLE_COMMENT_REQUEST, function* (action) {
    try {
      const response = yield call(api.get, `/comments/${action.id}`);
      yield put(singleCommentSuccess(response.data));
    } catch (error) {
      yield put(singleCommentError(error));
    }
  });
}

export function singleCommentSagas() {
  return [singleCommentListener];
}
