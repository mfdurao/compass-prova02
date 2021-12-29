import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";

import {
  FormLabel,
  FormTextArea,
  FormTitle,
  InputText,
  SubmitBtn,
} from "../NewPost/style";
import { Container } from "../style";
import { ReactComponent as Wave } from "../../utils/svgs/wave.svg";
import { CommentFormContainer } from "./style";
import { addCommentRequest } from "../../redux/actions/commentActions/addCommentActions";

const NewComment = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { category } = useParams();
  const [redirect, setRedirect] = useState(false);
  const [commentBody, setCommentBody] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");

  const [newComment, setNewComment] = useState({
    id: "",
    body: "",
    author: "",
    parentId: "",
    timestamp: 0,
  });

  useEffect(() => {
    setNewComment({
      id: uuidv4(),
      body: commentBody,
      author: commentAuthor,
      parentId: id,
      timestamp: Date.now(),
    });
  }, [commentBody, commentAuthor, id]);

  const handleSubmit = async () => {
    await dispatch(addCommentRequest(newComment));
    setRedirect(true);
  };

  return (
    <Container>
      {redirect ? (
        <Redirect to={`/${category}/${id}`} />
      ) : (
        <CommentFormContainer
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <FormTitle>New Comment</FormTitle>
          <FormLabel>Author:</FormLabel>
          <InputText
            required
            type="text"
            maxLength="35"
            placeholder="Your name/username..."
            onChange={(e) => {
              setCommentAuthor(e.target.value);
            }}
          />
          <FormLabel>Body:</FormLabel>
          <FormTextArea
            required
            maxLength="1500"
            placeholder="The content of you post..."
            onChange={(e) => {
              setCommentBody(e.target.value);
            }}
          />
          <SubmitBtn type="submit">Comment</SubmitBtn>
        </CommentFormContainer>
      )}

      <Wave />
    </Container>
  );
};

export default NewComment;
