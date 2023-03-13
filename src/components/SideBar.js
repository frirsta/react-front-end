import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "../styles/SideBar.module.css";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";

const SideBar = () => {
  const currentUser = useContext(CurrentUserContext);
  const loggedInIcons = <>{currentUser?.username}</>;
  const loggedOutIcons = (
    <>
      <NavLink to="/signin">
        <i className="fa-solid fa-right-to-bracket"></i> Sign in
      </NavLink>
      <NavLink to="/signup">
        <i className="fa-solid fa-user-plus"></i> Sign up
      </NavLink>
    </>
  );
  return (
    <Card>
      <ListGroup
        className={`${styles.SideBar} position-fixed top-0 start-0`}
        variant="flush"
      >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <NavLink to="/">
          <i className="fa-solid fa-house"></i> Home
        </NavLink>
        {currentUser ? loggedInIcons : loggedOutIcons}
      </ListGroup>
    </Card>
  );
};

export default SideBar;
