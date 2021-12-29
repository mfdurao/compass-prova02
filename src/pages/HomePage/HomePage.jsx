import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Post } from "../../components";
import { allPostsRequest } from "../../redux/actions/postActions/allPostsActions";

import LogoCinza from "../../images/compasso-logo-cinza.png";
import { ReactComponent as Wave } from "../../utils/svgs/wave.svg";
import {
  ImgLogo,
  Info,
  InfoParagraph,
  InfoTitle,
  PostContainer,
} from "./style";
import { Container } from "../style";
import sortBy from "../../utils/sortBy";

const HomePage = () => {
  const dispatch = useDispatch();
  const [sortedPosts, setSortedPosts] = useState([]);
  const filter = useSelector((state) => state.sortPost.filter);
  const allPosts = useSelector((state) => state.allPosts.allPosts);

  useEffect(() => {
    dispatch(allPostsRequest());
  }, [dispatch, filter]);

  useEffect(() => {
    setSortedPosts(sortBy(filter, allPosts));
  }, [allPosts, filter]);

  return (
    <Container>
      <Info>
        <InfoTitle>Welcome to my Blog</InfoTitle>
        <InfoParagraph>
          Hi, my name is Matheus Durão. This blog was developed with React and
          Redux technologies. Here you can create, edit and delete your own
          posts. Below you can see all posts made by users and also interact
          indicating whether you liked the post or not. By clicking on a post,
          in addition to being able to see it better, you can also leave, edit,
          vote and delete a comment of your choice. Good luck !!! &#128516;
        </InfoParagraph>
        <ImgLogo src={LogoCinza} alt="Compasso Logo Cinza" />
      </Info>
      <PostContainer>
        {sortedPosts.map((post, index) => (
          <Post {...post} key={index} />
        ))}
      </PostContainer>
      <Wave />
    </Container>
  );
};

export default HomePage;
