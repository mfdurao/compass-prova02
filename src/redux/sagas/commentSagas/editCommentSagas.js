import { put, call, takeLatest } from "@redux-saga/core/effects";

import api from "../../../utils/api";
import { commentRequest } from "../../actions/commentActions/commentsActions";

import {
  editCommentError,
  editCommentSuccess,
} from "../../actions/commentActions/editCommentActions";

import { EDIT_COMMENT_REQUEST } from "../../types/commentsTypes";

function* editCommentRequestListener() {
  yield takeLatest(EDIT_COMMENT_REQUEST, function* (action) {
    try {
      const { id, body, parentId } = action.body.comment;
      yield call(api.put, `/comments/${id}`, {
        body,
      });
      yield put(editCommentSuccess());
      yield put(commentRequest(parentId));
    } catch (error) {
      yield put(editCommentError(error));
    }
  });
}

export function editCommentSagas() {
  return [editCommentRequestListener];
}
