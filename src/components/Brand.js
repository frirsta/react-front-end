import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Camera from '../assets/icons/camera.png';
import styles from '../App.module.css';


const Brand = () => {
  return (
    <div className={styles.LogoContainer}>
    <NavLink to="/">
     <img className={styles.Logo} src={Camera} alt="The website logo, a camera" />
     <p className={styles.SnapIt}>Snap it</p>
    </NavLink>
    </div>
  );
};
export default Brand;
