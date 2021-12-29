import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Page404 } from "..";

import { Post } from "../../components";
import { categoryRequest } from "../../redux/actions/categoryActions/categoryActions";
import { postsByCategoryRequest } from "../../redux/actions/postActions/postsByCategoryActions";
import sortBy from "../../utils/sortBy";

import { ReactComponent as Wave } from "../../utils/svgs/wave.svg";
import { PostContainer } from "../HomePage/style";
import { Container } from "../style";
import { BreadCrumb } from "./style";

const CategoryPosts = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const [sortedPosts, setSortedPosts] = useState([]);
  const filter = useSelector((state) => state.sortPost.filter);
  const posts = useSelector((state) => state.posts.posts);
  const categoryData = useSelector((state) => state.categories.allCategories);

  useEffect(() => {
    dispatch(categoryRequest());
    dispatch(postsByCategoryRequest(category));
  }, [dispatch, category, filter]);

  useEffect(() => {
    setSortedPosts(sortBy(filter, posts));
  }, [posts, filter]);

  const getCategoriesPath = () => {
    const verifyPaths = categoryData.map((item) => {
      if (item.path === category) return true;
      else return false;
    });
    const pathEqualsCategory = verifyPaths.find((item) => item === true);
    return pathEqualsCategory;
  };
  const verify = getCategoriesPath();

  return (
    <Container>
      {verify ? (
        <>
          <BreadCrumb> Home &gt; {category.toUpperCase()}</BreadCrumb>
          <PostContainer>
            {sortedPosts.map((post, index) => (
              <Post {...post} key={index} />
            ))}
          </PostContainer>
        </>
      ) : (
        <Page404 />
      )}
      <Wave />
    </Container>
  );
};
export default CategoryPosts;
