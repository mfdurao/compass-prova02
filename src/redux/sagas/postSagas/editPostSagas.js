import { put, call, takeLatest } from "@redux-saga/core/effects";
import api from "../../../utils/api";
import { allPostsRequest } from "../../actions/postActions/allPostsActions";
import {
  editPostError,
  editPostSuccess,
} from "../../actions/postActions/editPostActions";
import { postsByCategoryRequest } from "../../actions/postActions/postsByCategoryActions";

import { EDIT_POST_REQUEST } from "../../types/postsTypes";

function* editPostRequestListener() {
  yield takeLatest(EDIT_POST_REQUEST, function* (action) {
    try {
      const { id, title, body, category } = action.body.post;
      yield call(api.put, `/posts/${id}`, {
        body,
        title,
      });
      yield put(editPostSuccess());
      yield put(postsByCategoryRequest(category));
      yield put(allPostsRequest());
    } catch (error) {
      yield put(editPostError(error));
    }
  });
}

export function editPostSagas() {
  return [editPostRequestListener];
}
