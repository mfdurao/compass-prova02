import { createSaga } from "./createSaga";

import { categorySagas } from "./categorySagas/categorySagas";

import { commentsSagas } from "./commentSagas/commentsSagas";
import { addCommentSagas } from "./commentSagas/addCommentSagas";
import { deleteCommentSagas } from "./commentSagas/deleteCommentSagas";
import { voteCommentSagas } from "./commentSagas/voteCommentSagas";
import { singleCommentSagas } from "./commentSagas/singleCommentSagas";
import { editCommentSagas } from "./commentSagas/editCommentSagas";

import { allPostsSagas } from "./postSagas/allPostsSagas";
import { postsByCategorySagas } from "./postSagas/postByCategorySagas";
import { postPageSagas } from "./postSagas/postPageSagas";
import { addPostSagas } from "./postSagas/addPostSagas";
import { deletePostSagas } from "./postSagas/deletePostSagas";
import { votePostSagas } from "./postSagas/votePostSagas";
import { editPostSagas } from "./postSagas/editPostSagas";
import { sortPostSagas } from "./postSagas/sortPostSagas";

export default createSaga(
  ...categorySagas(),
  ...allPostsSagas(),
  ...postsByCategorySagas(),
  ...postPageSagas(),
  ...addPostSagas(),
  ...deletePostSagas(),
  ...votePostSagas(),
  ...editPostSagas(),
  ...sortPostSagas(),
  ...commentsSagas(),
  ...addCommentSagas(),
  ...deleteCommentSagas(),
  ...voteCommentSagas(),
  ...singleCommentSagas(),
  ...editCommentSagas()
);
