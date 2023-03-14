import React from "react";
import styles from "../styles/Profile.module.css";

const Profile = ({ src, height = 45, text }) => {
  return (
    <span>
      <img className={styles.Profile} src={src} height={height} alt="profile" />
      {text}
    </span>
  );
};

export default Profile;
