import React from "react";
import {
  AiOutlineComment,
  AiOutlineDelete,
  AiOutlineDislike,
  AiOutlineEdit,
  AiOutlineLike,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { deletePostRequest } from "../../redux/actions/postActions/deletePostActions";
import { votePostRequest } from "../../redux/actions/postActions/votePostActions";

import {
  PostPageBodyOption,
  PostPageBodyOptions,
  PostPageCommentCount,
  PostPageLikeScore,
  PostPageLinkEdit,
  PostPageOptionsContainer,
} from "./style";

const PostPageOptions = ({ ...props }) => {
  const dispatch = useDispatch();
  const { category } = useParams();

  return (
    <PostPageOptionsContainer>
      <PostPageLikeScore>{props.voteScore} Votes</PostPageLikeScore>
      <PostPageBodyOptions>
        <PostPageBodyOption
          onClick={async() => {
            await dispatch(votePostRequest(props.id, "upVote", category));
          }}
        >
          <AiOutlineLike />
        </PostPageBodyOption>
        <PostPageBodyOption
          onClick={() => {
            dispatch(votePostRequest(props.id, "downVote", category));
          }}
        >
          <AiOutlineDislike />
        </PostPageBodyOption>
        <PostPageBodyOption>
          <AiOutlineComment />
          <PostPageCommentCount>{props.commentCount}</PostPageCommentCount>
        </PostPageBodyOption>
        <PostPageLinkEdit to={`/editPost/${props.id}`}>
          <AiOutlineEdit />
        </PostPageLinkEdit>
        <PostPageBodyOption
          onClick={() => {
            dispatch(deletePostRequest(props.id, category));
          }}
        >
          <AiOutlineDelete />
        </PostPageBodyOption>
      </PostPageBodyOptions>
    </PostPageOptionsContainer>
  );
};

export default PostPageOptions;
