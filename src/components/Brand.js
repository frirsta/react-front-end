import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from '../App.module.css'

const Brand = () => {

    return(
        <Navbar.Brand className={styles.Brand}>
        <NavLink to="/">
          Brand
        </NavLink>
        </Navbar.Brand>
    )
}
export default Brand;