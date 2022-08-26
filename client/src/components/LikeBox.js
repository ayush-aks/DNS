import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { BiUpvote } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../helpers/authHelper";
//BiUpvote -> https://react-icons.github.io/react-icons/search?q=upvote
const LikeBox = (props) => {
  const { likeCount, onLike } = props;
  const theme = useTheme();
  const [liked, setLiked] = useState(props.liked);

  const navigate = useNavigate();

  const handleLike = (e) => {
    if (isLoggedIn()) {
      const newLikedValue = !liked;
      setLiked(newLikedValue);
      onLike(newLikedValue);
    } else {
      navigate("/login");
    }
  };

  return (
    <Stack alignItems="center">
      <IconButton sx={{ padding: 0.5 }} onClick={handleLike}>
        {liked ? (
          <IconContext.Provider value={{ color: theme.palette.primary.main }}>
            <BiUpvote />
          </IconContext.Provider>
        ) : (
          <BiUpvote />
        )}
      </IconButton>
      <Typography>{likeCount}</Typography>
    </Stack>
  );
};

export default LikeBox;
