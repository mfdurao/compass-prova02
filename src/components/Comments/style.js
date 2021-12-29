import styled from "styled-components";


export const BoxComment = styled.div`
  margin-top: 20px;
  padding: 10px;
  background: ${props => props.theme.colors.postBackground};
  border-radius: 2px;
  box-shadow: 0px 0px 1.5px ${props => props.theme.colors.commentBorder};
  width: 830px;
  height: 218px;

  :last-child {
    margin-bottom: 20px;
  }
`;

export const CommentAuthor = styled.h3`
  font-size: 18px;
  padding-bottom: 10px;
`;
export const CommentBody = styled.p`
  display: -webkit-box;
  padding: 10px 5px 5px 5px;
  border-radius: 2px;
  background: ${props => props.theme.colors.commentBody};
  border: 0.5px solid ${props => props.theme.colors.commentBorder};
  font-size: 15px;
  height: 90px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;  
  overflow : hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
`;

export const CommentDate = styled.p`
  padding-top: 10px;
  font-size: 12px;
  text-align: right;
`;
