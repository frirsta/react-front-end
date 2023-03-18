import React from "react";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../context/CurrentUserContext";
import styles from "../../styles/Post.module.css";
import Profile from "../../components/Profile";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    comments_count,
    likes_count,
    likes_id,
    caption,
    post_image,
    updated_date,
    postPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <div>
      <div>
        <Media className={styles.PostUserContainer}>
          <Link to={`accounts/${profile_id}`}>
            <span className={styles.ProfileImage}><Profile src={currentUser?.profile_image} /></span>
            <span>{currentUser?.username}</span>
          </Link>
        </Media>
        <span>{updated_date}</span>
        {is_owner && postPage && "..."}
      </div>
      <div>
        <Link to={`/posts/${id}`}>
          <Card.Img src={post_image} alt={caption} />
        </Link>
      </div>
      <div>
        {caption}
        {is_owner ? (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>You cant like your own post</Tooltip>}
          >
            <i className="far fa-heart" />
          </OverlayTrigger>
        ) : likes_id ? (
          <span onClick={() => {}}>
            <i className="far fa-heart" />
          </span>
        ) : currentUser ? (
          <span onClick={() => {}}>
            <i className="far fa-heart" />
          </span>
        ) : (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Log in to like post</Tooltip>}
          >
            <i className="far fa-heart" />
          </OverlayTrigger>
        )} {likes_count}
        <Link to={`posts/${id}`}>
        <i className="fa-regular fa-comment" />
        </Link>
        {comments_count}
      </div>
    </div>
  );
};

export default Post;
