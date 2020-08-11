import React from "react";
import "./Sidebar.css";
import { Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOptions active Icon={HomeIcon} text="Home" />
      <SidebarOptions Icon={SearchIcon} text="Search" />
      <SidebarOptions Icon={NotificationsNoneIcon} text="Notficacitions" />
      <SidebarOptions Icon={MailOutlineIcon} text="MailOutline" />
      <SidebarOptions Icon={BookmarBorderIcon} text="BookmarBorder" />
      <SidebarOptions Icon={ListAltIcon} text="ListAlt" />
      <SidebarOptions Icon={PermIdentityIcon} text="PermIdentity" />
      <SidebarOptions Icon={MoreHorizIcon} text="MoreHoriz" />

      <SidebarOptions Icon={HomeIcon} text="Home" />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
