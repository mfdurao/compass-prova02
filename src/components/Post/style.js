import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkPost = styled(Link)`
  z-index: 1;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 1.5px ${props => props.theme.colors.postShadow};
  border-radius: 5px;
  padding: 20px 20px 0 20px;
  margin: 20px 10px;
  height: 300px;
  width: 400px;
  background: ${props => props.theme.colors.postBackground};
  z-index: 1;
  cursor: pointer;

  transition: all 0.4s;

  :hover {
    transform: scale(1.02);
  }
`;

export const PostTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  width: 355px;
  max-width: 355px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 2px dashed ${props => props.theme.colors.postBorder};
`;

export const Description = styled.p`
  padding: 20px 0;
  display: -webkit-box;
  overflow : hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;  
  height: 145px;
  width: 355px;
  text-align: justify;
  color: ${props => props.theme.colors.postDescription};
`;

export const PostTime = styled.p`
  font-size: 13px;
  padding: 5px;
  text-align: right;
  color: ${props => props.theme.colors.text};
`;
