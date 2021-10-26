import {
  Comment,
  Favorite,
  FavoriteBorder,
  Info,
  Share,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./Card.css";
const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false);
  const handleNotification = (type) => {
    setLiked(true);
    socket.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type,
    });
  };
  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interactions">
        {liked ? (
          <Favorite color="error" />
        ) : (
          <FavoriteBorder color="error" onClick={() => handleNotification(1)} />
        )}

        <Comment onClick={() => handleNotification(2)} />
        <Share onClick={() => handleNotification(3)} />
        <Info />
      </div>
    </div>
  );
};

export default Card;
