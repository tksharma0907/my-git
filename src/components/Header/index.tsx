import React from "react";
import Avatar from "@mui/material/Avatar";
import GitHubIcon from "@mui/icons-material/GitHub";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Icon from "@mui/material/Icon";
import { grey } from "@mui/material/colors";
import { width } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";

const Header = () => {
    return (
        <div
            style={{
                padding: "16px 32px",
                height: "45px",
                backgroundColor: "rgb(22,27,34)",
                display: "flex",
                alignItems: "center",
                // width: "100%",
            }}
        >
            {/* <Avatar src="/public/icons/2.jpg" alt="git" /> */}
            <Avatar>
                <GitHubIcon />
            </Avatar>
            <li style={{ display: "flex", color: "white", fontWeight: "bold" }}>
                <ul>Pull request</ul>
                <ul>Issues</ul>
                <ul>Marketplaces</ul>
                <ul>Explore</ul>
            </li>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "920px",
                }}
            >
                <Icon sx={{ color: grey[50], p: 1 }}>
                    <NotificationsNoneIcon />
                </Icon>
                <Icon sx={{ color: grey[50], p: 1 }}>
                    <AddIcon />
                </Icon>
                <Avatar src="me" alt="T" />
            </div>
        </div>
    );
};

export default Header;
