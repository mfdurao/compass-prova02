import { takeLatest, call, put } from "redux-saga/effects";

import api from "../../../utils/api";

import {
  postsByCategoryError,
  postsByCategorySuccess,
} from "../../actions/postActions/postsByCategoryActions";
import { POSTS_CATEGORY_REQUEST } from "../../types/postsTypes";

function* onPostsByCategoryRequestListener() {
  yield takeLatest(POSTS_CATEGORY_REQUEST, function* (action) {
    try {
      const response = yield call(api.get, `${action.category}/posts`);
      yield put(postsByCategorySuccess(response.data));
    } catch (error) {
      yield put(postsByCategoryError(error));
    }
  });
}

export function postsByCategorySagas() {
  return [onPostsByCategoryRequestListener];
}
