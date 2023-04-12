import React from "react";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../context/CurrentUserContext";
import styles from "../../styles/Contact.module.css";
import Profile from "../../components/Profile";

const Contact = (props) => {
  const {
    id,
    owner,
    title,
    content,
    updated_date,
  } = props;

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;

  return (
    <div className={styles.ContactContainer}>
      <Media className={styles.ContactUserContainer}>
        <Link to={`/accounts/${id}`}>
          <span>
            <Profile className={styles.ProfileImage} src={profile_image} />
          </span>
          <span className={styles.Username}>{owner}</span>
        </Link>
      
          <span className={styles.Date}>{updated_date}</span>
     
      </Media>
        <span className={styles.Caption}>{title} {content}</span>
    </div>
  );
};

export default Contact;
