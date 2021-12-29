import React from "react";
import propTypes from "prop-types";
import { Card, Description, Paragraph, List, ListItem, ListItemStats } from "./User.styled";

export default function User({ username, tag, location, avatar, stats }) {
    return (<Card>
        <Description>
            <img
                src={avatar}
                alt="User avatar"
            />
            <Paragraph>{username}</Paragraph>
            <Paragraph>{tag}</Paragraph>
            <Paragraph>{location}</Paragraph>
        </Description>

        <List>
            <ListItem>
                <ListItemStats>Followers: </ListItemStats>
                <span>{stats.followers}</span>
            </ListItem>
            <ListItem>
                <ListItemStats>Views: </ListItemStats>
                <span>{stats.views}</span>
            </ListItem>
            <ListItem>
                <ListItemStats>Likes: </ListItemStats>
                <span>{stats.likes}</span>
            </ListItem>
        </List>
    </Card>);
}

User.propTypes = {
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.shape({
        followers: propTypes.number.isRequired,
        views: propTypes.number.isRequired,
        likes: propTypes.number.isRequired,
    }),
};