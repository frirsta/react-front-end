import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../App.module.css";

const Brand = () => {
  return (
    <NavLink to="/" className={styles.Brand}>
     Brand
    </NavLink>
  );
};
export default Brand;
