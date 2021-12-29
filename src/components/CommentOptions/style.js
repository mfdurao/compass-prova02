import { Link } from "react-router-dom";
import styled from "styled-components";

export const CommentOptionsContainer = styled.div`
  position: relative;
  top: 6.1px;
  left: -10px;
  display: flex;
  width: 830px;
  height:55px;
  border-radius: 2px;
  border-top: 2px dashed ${props => props.theme.colors.optionsBorder};
  background: ${props => props.theme.colors.optionsBackground};
`;

export const CommentScore = styled.div`
  display: flex;
  position: relative;
  width: 40px;
  top: -180px;
  right: -810px;
  background: ${props => props.theme.colors.scoreBackground};
  height: 40px;
  color: ${props => props.theme.colors.scoreText};;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 1.5px ${props => props.theme.colors.commentBorder};
  z-index: 1;
`;

export const CommentPageOptions = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const CommentPageOption = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  justify-content: center;
  color: ${(props) => props.theme.colors.optionsIcons};
  height: 55px;
  border-style: none;
  padding: 20px 25px;
  cursor: pointer;

  transition: all 0.4s;

  :last-child {
    border-bottom-right-radius: 5px;
  }

  :hover {
    background: var(--blue-light);
  }
`;

export const LinkEditComment = styled(Link)`
  text-decoration: none;
  display: flex;
  color: #000000;
  width: 63px;
  height: 55px;
  align-items: center;
  justify-content: center;

  transition: all 0.4s;
  
  :hover {
    background: var(--blue-light);
  }
`;