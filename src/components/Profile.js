import React from "react";
import styles from "../styles/Profile.module.css";

const Profile = ({ src, height = 35, width = 35, text }) => {
  return (
    <span>
      <img className={styles.Profile} src={src} height={height} width={width} alt="profile" />
      {text}
    </span>
  );
};

export default Profile;
