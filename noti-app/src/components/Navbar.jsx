import { Badge } from "@material-ui/core";
import { Message, Notifications, Settings } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
const Navbar = ({ socket }) => {
  const [notification, setNotification] = useStateate([]);
  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotification((prev) => [...prev, data]);
    });
  }, [socket]);
  return (
    <div className="navbar">
      <span className="logo">Noti</span>
      <div className="icons">
        <div className="icon">
          <Badge badgeContent={4} color="primary">
            <Notifications />
          </Badge>
        </div>
        <div className="icon">
          <Badge badgeContent={4} color="primary">
            <Message />
          </Badge>
        </div>
        <div className="icon">
          <Badge badgeContent={4} color="primary">
            <Settings />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
