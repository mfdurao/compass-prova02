import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../utils/api";
import { commentRequest } from "../../actions/commentActions/commentsActions";

import {
  deleteCommentError,
  deleteCommentSuccess,
} from "../../actions/commentActions/deleteCommentActions";
import { DELETE_COMMENT_REQUEST } from "../../types/commentsTypes";

function* deleteCommentRequestListener() {
  yield takeLatest(DELETE_COMMENT_REQUEST, function* (action) {
    try {
      const { id, parentId } = action.body;
      yield call(api.delete, `/comments/${id}`);
      yield put(commentRequest(parentId))
      yield put(deleteCommentSuccess());
    } catch (error) {
      yield put(deleteCommentError(error));
    }
  });
}

export function deleteCommentSagas() {
  return [deleteCommentRequestListener];
}
