import { takeLatest, call, put } from "redux-saga/effects";

import api from "../../../utils/api";
import { categoryError, categorySuccess } from "../../actions/categoryActions/categoryActions";
import { CATEGORY_REQUEST } from "../../types/categoryTypes";

function* onCategoryRequestListener() {
  yield takeLatest(CATEGORY_REQUEST, function* () {
    try {
      const response = yield call(api.get, "/categories");
      yield put(categorySuccess(response.data.categories));
    } catch (error) {
      yield put(categoryError(error));
    }
  });
}

export function categorySagas() {
  return [onCategoryRequestListener];
}
