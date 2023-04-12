import React from "react";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { Link, useHistory } from "react-router-dom";
import { useCurrentUser } from "../../context/CurrentUserContext";
import styles from "../../styles/Post.module.css";
import Profile from "../../components/Profile";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/UserDropdown";

const Contact = (props) => {
  const {
    id,
    owner,
    accounts_id,
    profile_image,
    title,
    content,
    updated_date,
  } = props;

  const currentUser = useCurrentUser();

  return (
    <div className={styles.PostContainer}>
      <Media className={styles.PostUserContainer}>
        <Link to={`/accounts/${accounts_id}`}>
          <span>
            <Profile className={styles.ProfileImage} src={profile_image} />
          </span>
          <span className={styles.Username}>{owner}</span>
        </Link>
        <div className={styles.DropdownContainer}>
          <span className={styles.Date}>{updated_date}</span>
        </div>
      </Media>

      <div className={styles.PostUserLikesComments}>
        <span className={styles.Caption}>{title} {content}</span>
        <div className={styles.PostCountContainer}>


          </div>
        </div>
    </div>
  );
};

export default Contact;
