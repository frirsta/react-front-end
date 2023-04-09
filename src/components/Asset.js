import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styles from "../styles/Asset.module.css";

const Asset = ({ spinner, src, message }) => {
  return (
    <div className={styles.Asset}>
      {spinner && <Spinner animation="border" />}
      {src && <img className={styles.AssetImage} src={src} alt={message} />}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Asset;
