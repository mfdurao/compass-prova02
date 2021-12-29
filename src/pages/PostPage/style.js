import { Link } from "react-router-dom";
import styled from "styled-components";
import { SubmitBtn } from "../NewPost/style";

export const PostPageContent = styled.div`
  display: flex;
  padding-bottom: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  height: 900px;
  width: 1000px;
  border-radius: 5px;
  z-index: 1;
  margin-bottom:20px;
  background: ${props => props.theme.colors.postBackground};
  backdrop-filter: blur(10px);
  box-shadow: 1px 0px 20px var(--grey-heavy);
`;

export const PostPageTitle = styled.h1`
  padding: 25px;
  max-width: 850px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
  color: ${props => props.theme.colors.text};
  text-shadow: 1px 0px 1px var(--grey-medium);
  height: 90px;
  align-self: center;
  text-align: center;
  width: 850px;
  border-bottom: 4px dashed ${props => props.theme.colors.postBorder};
`;

export const Body = styled.div`
  position: relative;
  padding: 5px 5px 200px 5px;
  background: ${props => props.theme.colors.postBackground};
  height: 240px;
  width: 850px;
  border: 2px dotted ${props => props.theme.colors.postBorderSecondary};
  margin: 0 auto;
  word-wrap: break-word;
`;

export const BodyContent = styled.p`
  text-align: justify;
  max-width: 850px;
  padding: 5px;
  overflow-y: scroll;
  font-size: 18px;
  height: 140px;
  max-height: 150px;

  ::-webkit-scrollbar{
    appearance: none;
    width: 8px;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 4px;
    background-color: var(--orange);
  }
`;

export const CommentTitle = styled(PostPageTitle)`
  align-self: flex-start;
  padding: 0px;
  height: 60px;
`;

export const CommentSection = styled.div`
  margin: 0 auto;
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  background: ${props => props.theme.colors.postBackground};
  overflow-y: scroll;
  overflow-x: hidden;
  justify-content: center;
  align-items: flex-start;
  width: 1000px;
  height: 350px;
  border-radius: 10px;

  ::-webkit-scrollbar {
    appearance: none;
    width: 7px;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: var(--orange);
  }
`;


export const NewCommentLink = styled(Link)`
  width: 150px;
  height: 50px;
  background: red;
  align-self: center;
  margin:0 auto;
  border-radius: 10px;
`;

export const NewCommentBtn = styled(SubmitBtn)`
  width:100%;
  height:100%;
  cursor:pointer;
  border-radius: 10px;
  border: none;
  margin: 0;
  padding:0;
`;