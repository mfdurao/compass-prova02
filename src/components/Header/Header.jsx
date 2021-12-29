import React, { useEffect, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ThemeContext } from "styled-components";

import { sortPostRequest } from "../../redux/actions/postActions/sortPostActions";
import { categoryRequest } from "../../redux/actions/categoryActions/categoryActions";

import {
  Btn,
  GroupButtons,
  HeaderStyle,
  Img,
  ImgUol,
  LinkItems,
  LinkLogo,
  LinkNewPost,
  Moon,
  NavCategories,
  NavItems,
  OptionFilter,
  ReactSwitch,
  SelectFilter,
  Sun,
} from "./style";
import UolLogo from "../../images/compasso-logo.png";
import EsferaColor from "../../images/compasso-logo-color.png";

const Header = ({ toggleTheme }) => {
  const [filter, setFilter] = useState("");
  const { colors, title } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.allCategories);

  useEffect(() => {
    dispatch(categoryRequest());
    dispatch(sortPostRequest(filter));
  }, [dispatch, filter]);

  const checkedIcon = <Moon>&#127770;</Moon>;

  const uncheckedIcon = <Sun>&#127774;</Sun>;

  return (
    <HeaderStyle>
      <LinkLogo to="/">
        <Img src={EsferaColor} alt="Compasso Logo" />
        <ImgUol src={UolLogo} alt="Uol Logo" />
      </LinkLogo>

      <NavCategories>
        {categories.map((item, index) => (
          <LinkItems to={`/${item.path}`} key={index}>
            <NavItems>{item.name.toUpperCase()}</NavItems>
          </LinkItems>
        ))}
      </NavCategories>
      <GroupButtons>
        <SelectFilter
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <OptionFilter value=""> Oldest first</OptionFilter>
          <OptionFilter value="timestamp"> Newest first </OptionFilter>
          <OptionFilter value="mostVoted"> Most voted </OptionFilter>
          <OptionFilter value="leastVoted"> Least voted </OptionFilter>
        </SelectFilter>
        <LinkNewPost to="/newPost">
          <Btn>New Post</Btn>
        </LinkNewPost>
        <ReactSwitch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          offHandleColor={colors.grey}
          onHandleColor={colors.orange}
          checkedHandleIcon={checkedIcon}
          uncheckedHandleIcon={uncheckedIcon}
          width={50}
          height={15}
          handleDiameter={25}
          offColor={colors.grey}
          onColor={colors.orange}
        />
      </GroupButtons>
    </HeaderStyle>
  );
};

export default Header;
