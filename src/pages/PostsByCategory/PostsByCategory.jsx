import React from "react";
import { Route, Switch } from "react-router";

import { CategoryPosts, PostPage } from "..";

const PostsByCategory = () => (
  <Switch>
    <Route exact path="/:category" component={CategoryPosts}/>
    <Route exact path="/:category/:id" component={PostPage}/>
  </Switch>
)

export default PostsByCategory;