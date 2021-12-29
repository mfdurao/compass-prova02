import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../utils/api";

import { commentRequest } from "../../actions/commentActions/commentsActions";
import {
  voteCommentError,
  voteCommentSuccess,
} from "../../actions/commentActions/voteCommentActions";

import { VOTE_COMMENT_REQUEST } from "../../types/commentsTypes";

function* voteCommentRequestListener() {
  yield takeLatest(VOTE_COMMENT_REQUEST, function* (action) {
    try {
      const { id, option, parentId } = action.body;

      yield call(api.post, `comments/${id}`, { option });
      yield put(voteCommentSuccess());
      yield put(commentRequest(parentId));
    } catch (error) {
      yield call(voteCommentError(error));
    }
  });
}

export function voteCommentSagas() {
  return [voteCommentRequestListener];
}
