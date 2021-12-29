import { takeLatest, call, put } from "redux-saga/effects";

import { addPostError, addPostSuccess } from "../../actions/postActions/addPostActions";

import api from "../../../utils/api";

import {
  ADD_POST_REQUEST,
} from "../../types/postsTypes";

function* addPostRequestListener() {
  yield takeLatest(ADD_POST_REQUEST, function* (action) {
    try {
      const response = yield call(api.post, '/posts', action.newPost);
      console.log(response.data);
      yield put(addPostSuccess());
    } catch (error) {
      yield put(addPostError(error));
    }
  });
}

export function addPostSagas() {
  return [addPostRequestListener];
}
