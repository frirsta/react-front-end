import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Camera from '../assets/icons/camera.png';
import styles from '../styles/Brand.module.css';


const BrandMobile = () => {
  return (
    <div className={styles.LogoContainerMobile}>
    <NavLink to="/">
     <img className={styles.LogoMobile} src={Camera} alt="The website logo, a camera" />
     <p className={styles.SnapItMobile}>Snap it</p>
    </NavLink>
    </div>
  );
};
export default BrandMobile;