import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import Profile from "../../components/Profile";
import { MoreDropdown } from "../../components/UserDropdown";
import { useCurrentUser } from "../../context/CurrentUserContext";
import styles from "../../styles/Comments.module.css";

const Comment = (props) => {
  const {
    accounts_id,
    profile_image,
    owner,
    updated_date,
    content,
    id,
    setPost,
    setComments,
  } = props;
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;



  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}`);
      setPost((prevPost) => ({
        results: [{
          ...prevPost.results[0],
          comments_count: prevPost.results[0].comments_count - 1,
        },
    ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {
     
    }
  };

  return (
    <div className={styles.CommentContainer}>
      <Media>
        <Link to={`/accounts/${accounts_id}`}>
          <Profile src={profile_image} />
        </Link>

        <Media.Body>
          <div>
            <span>{owner}</span>

            <span>{updated_date}</span>

            <span>{content}</span>
          </div>
        </Media.Body>
      {is_owner && (
        <MoreDropdown handleEdit={() => {}} handleDelete={handleDelete} />
      )}
      </Media>
    </div>
  );
};

export default Comment;
