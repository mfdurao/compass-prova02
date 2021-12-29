import React from "react";

import { PostDate } from "../../utils/PostDate";
import CommentOptions from "../CommentOptions/CommentOptions";

import {
  BoxComment,
  CommentAuthor,
  CommentBody,
  CommentDate,
} from "./style";

const Comments = ({ ...props }) => {

  return (
    <BoxComment>
      <CommentAuthor>{props.author} said:</CommentAuthor>
      <CommentBody>{props.body}</CommentBody>
      <CommentDate>Commented on {PostDate(props.timestamp)}</CommentDate>
      <CommentOptions {...props} />
    </BoxComment>
  );
};

export default Comments;
