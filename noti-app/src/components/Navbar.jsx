import { Badge } from "@material-ui/core";
import { Message, Notifications, Settings } from "@material-ui/icons";
import React from "react";
import "./Navbar.css";
const Navbar = () => {
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
