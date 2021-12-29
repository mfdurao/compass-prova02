import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";

import { postPageRequest } from "../../redux/actions/postActions/postPageActions";
import { editPostRequest } from "../../redux/actions/postActions/editPostActions";

import { ReactComponent as Wave } from "../../utils/svgs/wave.svg";
import { Container } from "../style";
import {
  FormContainer,
  FormLabel,
  FormOptions,
  FormSelect,
  FormTextArea,
  FormTitle,
  InputText,
  SubmitBtn,
} from "../NewPost/style";

const EditPost = () => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const { id } = useParams();
  const post = useSelector((state) => state.post.post);

  useEffect(() => {
    dispatch(postPageRequest(id));
  }, [dispatch, id]);

  const [editedPost, setEditedPost] = useState({
    id: post.id,
    title: "",
    body: "",
    author: post.author,
    category: post.category,
    timestamp: post.timestamp,
  });

  useEffect(() => {
    setEditedPost({
      id: post.id,
      title: postTitle,
      body: postBody,
      author: post.author,
      category: post.category,
      timestamp: Date.now(),
    });
  }, [postTitle, postBody, post.author, post.category, post.id]);

  const handleSubmit = async () => {
    await dispatch(editPostRequest(editedPost));
    setRedirect(true);
  };

  return (
    <Container>
      {redirect ? (
        <Redirect to={`/${post.category}/${post.id}`} />
      ) : (
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <FormTitle>Edit Post</FormTitle>
          <FormLabel>Author:</FormLabel>
          <InputText placeholder={`${post.author}`} disabled />
          <FormLabel>Title:</FormLabel>
          <InputText
            type="text"
            required
            maxLength="50"
            placeholder="Your title here..."
            onChange={(e) => {
              setPostTitle(e.target.value);
            }}
          />
          <FormLabel>Body:</FormLabel>
          <FormTextArea
            required
            maxLength="1500"
            placeholder="The content of you post..."
            onChange={(e) => {
              setPostBody(e.target.value);
            }}
          />
          <FormLabel>Category:</FormLabel>
          <FormSelect disabled>
            <FormOptions value="">{post.category}</FormOptions>
          </FormSelect>

          <SubmitBtn type="submit"> Submit</SubmitBtn>
        </FormContainer>
      )}

      <Wave />
    </Container>
  );
};

export default EditPost;
