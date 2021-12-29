import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../utils/api";
import { allPostsRequest } from "../../actions/postActions/allPostsActions";
import { postPageRequest } from "../../actions/postActions/postPageActions";
import { postsByCategoryRequest } from "../../actions/postActions/postsByCategoryActions";

import {
  votePostError,
  votePostSuccess,
} from "../../actions/postActions/votePostActions";

import { VOTE_POST_REQUEST } from "../../types/postsTypes";

function* votePostRequestListener() {
  yield takeLatest(VOTE_POST_REQUEST, function* (action) {
    try {
      const { id, option, pathCategory } = action.body;

      yield call(api.post, `/posts/${id}`, { option });
      yield put(votePostSuccess());
      if (pathCategory === undefined) yield put(allPostsRequest());
      else if (pathCategory !== undefined) {
        yield put(postPageRequest(id));
        yield put(postsByCategoryRequest(pathCategory));
      }
    } catch (error) {
      yield call(votePostError(error));
    }
  });
}

export function votePostSagas() {
  return [votePostRequestListener];
}
