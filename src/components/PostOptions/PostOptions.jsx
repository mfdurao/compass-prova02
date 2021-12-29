import React from "react";

import {
  CommentCount,
  LikeScore,
  LinkEdit,
  Option,
  Options,
  PostOptionsContainer,
} from "./style";
import {
  AiOutlineComment,
  AiOutlineDelete,
  AiOutlineDislike,
  AiOutlineEdit,
  AiOutlineLike,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deletePostRequest } from "../../redux/actions/postActions/deletePostActions";
import { useParams } from "react-router";
import { votePostRequest } from "../../redux/actions/postActions/votePostActions";

const PostOptions = ({ ...props }) => {
  const dispatch = useDispatch();
  const { category } = useParams();

  return (
    <PostOptionsContainer>
      <LikeScore>{props.voteScore}</LikeScore>
      <Options>
        <Option
          onClick={() => {
            dispatch(votePostRequest(props.id, "upVote", category));
          }}
        >
          <AiOutlineLike />
        </Option>
        <Option
          onClick={() => {
            dispatch(votePostRequest(props.id, "downVote", category));
          }}
        >
          <AiOutlineDislike />
        </Option>
        <Option>
          <AiOutlineComment />
          <CommentCount>{props.commentCount}</CommentCount>
        </Option>
        <LinkEdit to={`/editPost/${props.id}`}>
          <AiOutlineEdit />
        </LinkEdit>
        <Option
          onClick={() => {
            dispatch(deletePostRequest(props.id, category));
          }}
        >
          <AiOutlineDelete />
        </Option>
      </Options>
    </PostOptionsContainer>
  );
};

export default PostOptions;
