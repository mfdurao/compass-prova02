import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";

import { editCommentRequest } from "../../redux/actions/commentActions/editCommentActions";
import { singleCommentRequest } from "../../redux/actions/commentActions/singleCommentActions";

import { ReactComponent as Wave } from "../../utils/svgs/wave.svg";
import { Container } from "../style";
import {
  FormLabel,
  FormTextArea,
  FormTitle,
  InputText,
  SubmitBtn,
} from "../NewPost/style";
import { CommentFormContainer } from "../NewComment/style";

const EditComment = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {category} = useParams();
  const [ redirect, setRedirect ] = useState(false);
  const [commentBody, setCommentBody] = useState("");
  const comment = useSelector((state) => state.singleComment.singleComment);

  useEffect(() => {
    dispatch(singleCommentRequest(id));
  }, [dispatch, id]);

  const [editedComment, setEditedComment] = useState({
    id: comment.id,
    body: "",
    author: comment.author,
    timestamp: comment.timestamp,
  });

  useEffect(() => {
    setEditedComment({
      id: comment.id,
      body: commentBody,
      author: comment.author,
      timestamp: Date.now(),
    });
  }, [comment.id, commentBody, comment.author]);

  const handleSubmit = async () => {
    await dispatch(editCommentRequest(editedComment));
    setRedirect(true);
  };

  return (
    <Container>
      {redirect ? (
        <Redirect to={`/${category}/${comment.parentId}`}/>
      ) : (
        <CommentFormContainer
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <FormTitle>Edit Comment</FormTitle>
        <FormLabel>Author:</FormLabel>
        <InputText placeholder={`${comment.author}`} disabled />
        <FormLabel>Body:</FormLabel>
        <FormTextArea
          required
          placeholder="The content of you comment..."
          onChange={(e) => {
            setCommentBody(e.target.value);
          }}
        />
        <SubmitBtn type="submit">Edit comment</SubmitBtn>
      </CommentFormContainer>
      ) }
      
      <Wave />
    </Container>
  );
};

export default EditComment;
