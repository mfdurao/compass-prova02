import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import { Page404 } from "..";
import { PostPageOptions } from "../../components";
import Comments from "../../components/Comments";
import { PostTime } from "../../components/Post/style";
import { commentRequest } from "../../redux/actions/commentActions/commentsActions";
import { allPostsRequest } from "../../redux/actions/postActions/allPostsActions";
import { postPageRequest } from "../../redux/actions/postActions/postPageActions";
import { PostDate } from "../../utils/PostDate";

import { ReactComponent as Wave } from "../../utils/svgs/wave.svg";
import { Container } from "../style";
import {
  Body,
  BodyContent,
  CommentSection,
  CommentTitle,
  NewCommentBtn,
  NewCommentLink,
  PostPageContent,
  PostPageTitle,
} from "./style";

const PostPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector((state) => state.post.post);
  const allPosts = useSelector((state) => state.allPosts.allPosts);
  const comments = useSelector((state) => state.comments.comments);

  useEffect(() => {
    dispatch(postPageRequest(id));
    dispatch(allPostsRequest());
    dispatch(commentRequest(id));
  }, [dispatch, id, comments]);

  const getPostPath = () => {
    const verifyPaths = allPosts.map((item) => {
      if (item.id === id) return true;
      else return false;
    });
    const pathEqualsCategory = verifyPaths.find((item) => item === true);
    return pathEqualsCategory;
  };

  const verify = getPostPath();

  return (
    <Container>
      {verify ? (
        <PostPageContent>
          <PostPageTitle>{post.title}</PostPageTitle>
          <Body>
            <BodyContent>{post.body}</BodyContent>
            <PostTime>
              Posted on {PostDate(post.timestamp)} by{" "}
              <strong>{post.author}</strong>{" "}
            </PostTime>
            <PostPageOptions {...post} />
          </Body>

          <CommentTitle>COMMENTS</CommentTitle>
          <CommentSection>
            {comments.map((comment, index) => (
              <Comments {...comment} key={index} />
            ))}
          </CommentSection>

          <NewCommentLink to={`newComment/${post.id}`}>
            <NewCommentBtn>New Comment</NewCommentBtn>
          </NewCommentLink>
        </PostPageContent>
      ) : (
        <Page404 />
      )}

      <Wave />
    </Container>
  );
};

export default PostPage;
