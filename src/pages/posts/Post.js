import React from "react";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link, useHistory } from "react-router-dom";
import { useCurrentUser } from "../../context/CurrentUserContext";
import styles from "../../styles/Post.module.css";
import Profile from "../../components/Profile";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/UserDropdown";

const Post = (props) => {
  const {
    id,
    owner,
    accounts_id,
    profile_image,
    comments_count,
    likes_count,
    likes_id,
    saved_count,
    saved_id,
    caption,
    post_image,
    updated_date,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

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

  const handleSave = async () => {
    try {
      const { data } = await axiosRes.post("/saved/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, saved_count: post.saved_count + 1, saved_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveSave = async () => {
    try {
      await axiosRes.delete(`/saved/${saved_id}`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, saved_count: post.saved_count - 1, saved_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.PostContainer}>
      <Media className={styles.PostUserContainer}>
        <Link to={`/accounts/${accounts_id}`}>
          <span >
            <Profile className={styles.ProfileImage} src={profile_image} />
          </span>
          <span className={styles.Username}>{owner}</span>
        </Link>
        <div className={styles.DropdownContainer}>
          <span className={styles.Date}>{updated_date}</span>
          {is_owner && postPage && (
            <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
          )}
        </div>
      </Media>

      <div className={styles.PostImageContainer}>
        <Link to={`/posts/${id}`}>
          <Card.Img
            className={styles.PostImage}
            src={post_image}
            alt={caption}
          />
        </Link>
      </div>
      <div className={styles.PostUserLikesComments}>
        <span className={styles.Caption}>{caption}</span>
        <div className={styles.PostCountContainer}>
          <div className={styles.LikeComment}>
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
                  <i
                    className={`${styles.LikedPost} ${styles.Icon} fa-solid fa-heart`}
                  />
                </span>
              ) : currentUser ? (
                <span onClick={handleLike}>
                  <i className={`${styles.Icon} far fa-heart`} />
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
              <Link to={`/posts/${id}`}>
                <i className="fa-regular fa-comment" />
              </Link>
              {comments_count}
            </div>
          </div>
          <div className={`${styles.PostCounts} ${styles.SavedPostIcon}`}>
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You cant save your own post</Tooltip>}
              >
                <i className="fa-regular fa-bookmark" />
              </OverlayTrigger>
            ) : saved_id ? (
              <span onClick={handleRemoveSave}>
                <i
                  className={`${styles.SavedPost} ${styles.Icon} fa-solid fa-bookmark`}
                />
              </span>
            ) : currentUser ? (
              <span onClick={handleSave}>
                <i className={`${styles.Icon} fa-regular fa-bookmark`} />
              </span>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to save post</Tooltip>}
              >
                <i className="fa-regular fa-bookmark" />
              </OverlayTrigger>
            )}{" "}
            {saved_count}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
