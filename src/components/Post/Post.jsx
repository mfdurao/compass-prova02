import React from "react";

import { PostOptions } from "..";
import { PostDate } from "../../utils/PostDate";

import { Box, Description, LinkPost, PostTime, PostTitle } from "./style";

const Post = ({ ...props }) => {

  return (
    <Box>
      <LinkPost to={`${props.category}/${props.id}`}>
        <PostTitle>{props.title}</PostTitle>
        <Description>{props.body}</Description>
        <PostTime>
          Posted on {PostDate(props.timestamp)} by{" "}
          <strong>{props.author}</strong>
        </PostTime>
      </LinkPost>
      <PostOptions {...props} />
    </Box>
  );
};

export default Post;
