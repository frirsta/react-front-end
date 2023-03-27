import React from "react";
import styles from "../styles/Profile.module.css";

const Profile = ({ src, height = 35, width = 35, text, className }) => {
  return (
    <span className={styles.ProfileContainer}>
      <img className={className} src={src} height={height} width={width} alt="profile" />
      {text}
    </span>
  );
};

export default Profile;
