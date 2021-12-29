import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Footer, Header } from "./components";
import { usePersistedState } from "./hooks";
import {
  EditComment,
  EditPost,
  HomePage,
  NewComment,
  NewPost,
  PostsByCategory,
} from "./pages";

import GlobalStyle from "./styles/GlobalStyle";
import Dark from "./styles/themes/dark";
import Light from "./styles/themes/light";

const App = () => {
  const [theme, setTheme] = usePersistedState("theme", Light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? Dark : Light);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/newPost" component={NewPost} />
          <Route exact path="/editPost/:id" component={EditPost} />
          <Route path="/:category/newComment/:id" component={NewComment} />
          <Route path="/:category/editComment/:id" component={EditComment} />
          <Route path="/:category" component={PostsByCategory} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
