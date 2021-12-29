import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { addPostRequest } from "../../redux/actions/postActions/addPostActions";

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
} from "./style";

const NewPost = () => {
  const dispatch = useDispatch();
  const [postTitle, setPostTitle] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [postBody, setPostBody] = useState("");
  const [postAuthor, setPostAuthor] = useState("");
  const [postCategory, setPostCategory] = useState("");
  const categories = useSelector((state) => state.categories.allCategories);

  const [newPost, setNewPost] = useState({
    id: "",
    title: "",
    body: "",
    author: "",
    category: "",
    timestamp: 0,
  });

  useEffect(() => {
    setNewPost({
      id: uuidv4(),
      title: postTitle,
      body: postBody,
      author: postAuthor,
      category: postCategory,
      timestamp: Date.now(),
    });
  }, [postTitle, postBody, postAuthor, postCategory]);

  const handleSubmit = async () => {
    await dispatch(addPostRequest(newPost));
    setRedirect(true);
  };

  return (
    <Container>
      {redirect ? (
        <Redirect to="/" />
      ) : (
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <FormTitle>New Post</FormTitle>
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
            placeholder="The content of you post..."
            onChange={(e) => {
              setPostBody(e.target.value);
            }}
          />
          <FormLabel>Author:</FormLabel>
          <InputText
            required
            type="text"
            maxLength="35"
            placeholder="Your name/username..."
            onChange={(e) => {
              setPostAuthor(e.target.value);
            }}
          />
          <FormLabel>Category:</FormLabel>
          <FormSelect
            name="select"
            required
            onChange={(e) => {
              setPostCategory(e.target.value);
            }}
          >
            <FormOptions value="">Select a category...</FormOptions>
            {categories.map((items, index) => (
              <FormOptions key={index} value={items.path}>
                {items.name}
              </FormOptions>
            ))}
          </FormSelect>
          <SubmitBtn type="submit">Submit</SubmitBtn>
        </FormContainer>
      )}

      <Wave />
    </Container>
  );
};

export default NewPost;
