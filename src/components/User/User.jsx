import propTypes from "prop-types";
import { Card, Description, Paragraph, List } from "./User.styled";

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
            <li>
                <span>Followers </span>
                <span>{stats.followers}</span>
            </li>
            <li>
                <span>Views </span>
                <span>{stats.views}</span>
            </li>
            <li>
                <span>Likes </span>
                <span>{stats.likes}</span>
            </li>
        </List>
    </Card>);
}

User.propTypes = {
    username: propTypes.string,
    tag: propTypes.string,
    location: propTypes.string,
    avatar: propTypes.string,
    stats: propTypes.object,
}

