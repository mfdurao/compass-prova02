import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostOptionsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  background-color: ${(props) => props.theme.colors.optionsBackground};
  height: 54px;
  border-top: 2px dashed ${(props) => props.theme.colors.optionsBorder};
  width: 400px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 1;
`;

export const LikeScore = styled.div`
  display: flex;
  position: relative;
  width: 45px;
  top: -275px;
  left: -25px;
  background: ${(props) => props.theme.colors.scoreBackground};
  height: 40px;
  color: ${props => props.theme.colors.scoreText};
  text-shadow: 0px 0px 0px ${(props) => props.theme.colors.breadcrumbShadow};
  border-radius: 50%;
  justify-content: center;
  align-self: center;
  align-items: center;
  box-shadow: 0px 0px 1px var(--grey-medium);
`;

export const Options = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const Option = styled.button`
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

export const LinkEdit = styled(Link)`
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

export const CommentCount = styled.p`
  padding-left: 10px;
`;
