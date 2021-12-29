import { takeLatest, call, put } from "redux-saga/effects";

import {
  addCommentError,
  addCommentSuccess,
} from "../../actions/commentActions/addCommentActions";
import { commentRequest } from "../../actions/commentActions/commentsActions";

import api from "../../../utils/api";

import { ADD_COMMENT_REQUEST } from "../../types/commentsTypes";

function* addCommentRequestListener() {
  yield takeLatest(ADD_COMMENT_REQUEST, function* (action) {
    try {
      yield call(api.post, "/comments", action.newComment);
      yield put(addCommentSuccess());
      yield put(commentRequest(action.newComment.parentId));
    } catch (error) {
      yield put(addCommentError(error));
    }
  });
}

export function addCommentSagas() {
  return [addCommentRequestListener];
}
