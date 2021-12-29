import styled from "styled-components";
import {
  CommentCount,
  LikeScore,
  LinkEdit,
  Option,
  Options,
  PostOptionsContainer,
} from "../PostOptions/style";

export const PostPageOptionsContainer = styled(PostOptionsContainer)`
  width: 848px;
  height: 56px;
  border-radius: 0px;
  position: absolute;
  left: -1px;
`;

export const PostPageLikeScore = styled(LikeScore)`
  top: 0px;
  left: 20px;
  border-radius: 0px;
  width: 100px;
  box-shadow: none;
  border: none;
`;

export const PostPageBodyOptions = styled(Options)``;

export const PostPageBodyOption = styled(Option)``;

export const PostPageLinkEdit = styled(LinkEdit)``;

export const PostPageCommentCount = styled(CommentCount)``;
