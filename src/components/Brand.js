import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Camera from '../assets/icons/camera.png'


const Brand = ({className}) => {
  return (
    <NavLink to="/" className={className}>
     <img className={className} src={Camera} alt="The website logo, a camera" />
    </NavLink>
  );
};
export default Brand;
