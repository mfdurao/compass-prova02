import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Lexend', sans-serif;
  text-decoration: none;
}
body{
  color: ${(props) => props.theme.colors.text};
}
:root{
  --black: rgba(20,20,20);
  --white: rgba(255,255,255);

  --grey-extra-lighter: rgba(245,245,245);
  --grey-lighter: rgba(230,230,230);
  --grey-light: rgba(200,200,200);
  --grey-medium: rgba(100,100,100);
  --grey-heavy: rgba(50,50,50);

  --dark-background: rgba(60,60,60);

  --orange: #FF8100;

  --blue: #007EFF;
  --blue-light: #ABE6FF;
}
`;

export default GlobalStyle;
