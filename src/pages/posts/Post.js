import React from "react";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../context/CurrentUserContext";
import styles from "../../styles/Post.module.css";
import Profile from "../../components/Profile";
import { axiosRes } from "../../api/axiosDefaults";

const Post = (props) => {
  const {
    id,
    owner,
    accounts_id,
    profile_image,
    comments_count,
    likes_count,
    likes_id,
    caption,
    post_image,
    updated_date,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, likes_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${likes_id}`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, likes_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.PostContainer}>
      <div>
        <Media className={styles.PostUserContainer}>
          <Link to={`accounts/${accounts_id}`}>
            <span className={styles.ProfileImage}>
              <Profile src={profile_image} />
            </span>
            <span>{owner}</span>
          </Link>
        <span>{updated_date}</span>
        </Media>
        {is_owner && postPage && "..."}
      </div>
      <div>
        <Link to={`/posts/${id}`}>
          <Card.Img className={styles.PostImage} src={post_image} alt={caption} />
        </Link>
      </div>
      <div className={styles.PostUserLikesComments}>
        {caption}
    <div className={styles.PostCounts}>
        {is_owner ? (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>You cant like your own post</Tooltip>}
          >
            <i className="far fa-heart" />
          </OverlayTrigger>
        ) : likes_id ? (
          <span onClick={handleUnlike}>
            <i className={`${styles.LikedPost} ${styles.Like} fa-solid fa-heart`} />
          </span>
        ) : currentUser ? (
          <span onClick={handleLike}>
            <i className={`${styles.Like} far fa-heart`} />
          </span>
        ) : (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Log in to like post</Tooltip>}
          >
            <i className="far fa-heart" />
          </OverlayTrigger>
        )}{" "}
        {likes_count}
        </div>
        <div className={styles.PostCounts}>
        <Link to={`posts/${id}`}>
          <i className="fa-regular fa-comment" />
        </Link>
        {comments_count}
        </div>
      </div>
    </div>
  );
};

export default Post;
