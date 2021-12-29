import { takeLatest, put} from "@redux-saga/core/effects";

import { sortPostSuccess } from "../../actions/postActions/sortPostActions";

import { SORT_POST_REQUEST } from "../../types/postsTypes";

function* sortPostRequestListener() {
  yield takeLatest(SORT_POST_REQUEST, function* (action) {
    const response = action.sortType;
    yield put(sortPostSuccess(response));
  });
}

export function sortPostSagas() {
  return [sortPostRequestListener];
}
