import React from "react";
import { useDispatch } from "react-redux";
import {
  AiOutlineDelete,
  AiOutlineDislike,
  AiOutlineEdit,
  AiOutlineLike,
} from "react-icons/ai";

import {
  CommentPageOption,
  CommentPageOptions,
  CommentOptionsContainer,
  CommentScore,
  LinkEditComment,
} from "./style";
import { deleteCommentRequest } from "../../redux/actions/commentActions/deleteCommentActions";
import { voteCommentRequest } from "../../redux/actions/commentActions/voteCommentActions";

const CommentOptions = ({ ...props }) => {
  const dispatch = useDispatch();

  return (
    <CommentOptionsContainer>
      <CommentScore>{props.voteScore}</CommentScore>
      <CommentPageOptions>
        <CommentPageOption
          onClick={() => {
            dispatch(voteCommentRequest(props.id, "upVote", props.parentId));
          }}
        >
          <AiOutlineLike />
        </CommentPageOption>
        <CommentPageOption
          onClick={() => {
            dispatch(voteCommentRequest(props.id, "downVote", props.parentId));
          }}
        >
          <AiOutlineDislike />
        </CommentPageOption>
        <LinkEditComment to={`editComment/${props.id}`}>
          <AiOutlineEdit />
        </LinkEditComment>
        <CommentPageOption
          onClick={() => {
            dispatch(deleteCommentRequest(props.id, props.parentId));
          }}
        >
          <AiOutlineDelete />
        </CommentPageOption>
      </CommentPageOptions>
    </CommentOptionsContainer>
  );
};

export default CommentOptions;
