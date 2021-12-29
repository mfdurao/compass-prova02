import { Link } from "react-router-dom";
import styled from "styled-components";
import Switch from "react-switch";

export const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background: var(--black);
  color: var(--white);
  z-index: 2;
`;

export const Img = styled.img`
  position: relative;
  top: 0px;
  left: 0px;
  border-radius: 10px;
  height: 50px;
  padding: 0 5px 0 5px;
`;

export const ImgUol = styled(Img)`
  left: 0px;
`;

export const LinkLogo = styled(Link)`
  position: absolute;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 80px;
  height: 80px;
  width: 200px;

  transition: all 0.4s;

  :hover {
    border-bottom: 5px solid var(--orange);
    filter: drop-shadow(5px 2px 5px var(--grey-heavy));
  }
`;

export const NavCategories = styled.ul`
  display: flex;
  list-style: none;
`;

export const LinkItems = styled(Link)`
  align-items: center;
  justify-content: center;
`;

export const NavItems = styled.li`
  display: flex;
  height: 80px;
  width: 120px;
  padding: 0 25px 0 25px;
  color: var(--white);
  justify-content: center;
  align-items: center;

  transition: all 0.4s;

  :hover {
    background: var(--grey-heavy);
    border-bottom: 5px solid var(--orange);
    text-shadow: 0px 0px 2px var(--black);
  }
`;

export const GroupButtons = styled.div`
  width: 300px;
  position: absolute;
  right: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LinkNewPost = styled(Link)`
  width: 100px;
  height: 40px;
  border-style: none;
  cursor: pointer;
  border-radius: 25px;
`;

export const Btn = styled.button`
  width: 100px;
  color: var(--grey-heavy);
  height: 40px;
  background: var(--grey-light);
  left: 0px;
  top: 0px;
  border-style: none;
  border-radius: 20px;
  cursor: pointer;

  transition: all 0.4s;

  :hover {
    background: var(--blue-light);
    box-shadow: 0px 0px 1px var(--grey-heavy);
    transform: scale(1.05);
  }
`;

export const ReactSwitch = styled(Switch)``;

export const SelectFilter = styled.select`
  border-radius: 10px;
  height: 40px;
  width: 100px;
  outline: none;
  -webkit-appearance: none;
  text-indent: 5px;
  cursor: pointer;
`;

export const OptionFilter = styled.option`
`;

export const Sun = styled.span`
  position: relative;
  top: 1px;
  left: 1.5px;
`;

export const Moon = styled.span`
  position: relative;
  top: 1px;
  left: 1.5px;
`;
