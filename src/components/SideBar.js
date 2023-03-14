import { React } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "../styles/SideBar.module.css";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../context/CurrentUserContext";
import Profile from "./Profile";

const SideBar = () => {
  const currentUser = useCurrentUser();
  const addPost = (
    <>
      <NavLink className={styles.NavLink} to="/posts/add">
        <i className={`${styles.icons} fa-solid fa-square-plus`}></i> Add post
      </NavLink>
    </>
  );
  const loggedInIcons = (
    <>
      <NavLink className={styles.NavLink} to="/notification">
        <i className={`${styles.icons} fa-solid fa-heart`}></i> Notification
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={() => {}}>
        <i className={`${styles.icons} fa-solid fa-right-from-bracket`}></i>{" "}
        Sign out
      </NavLink>

      <NavLink
        className={styles.NavLink}
        to={`/accounts/${currentUser?.profile_id}`}
      >
        <Profile
          className={styles.icons}
          src={currentUser?.profile_image}
          text="Profile"
          height={40}
          width={40}
        />
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink className={styles.NavLink} to="/signin">
        <i className={`${styles.icons} fa-solid fa-right-to-bracket`}></i> Sign
        in
      </NavLink>
      <NavLink className={styles.NavLink} to="/signup">
        <i className={`${styles.icons} fa-solid fa-user-plus`}></i> Sign up
      </NavLink>
    </>
  );
  return (
    <Card className={"position-fixed top-0 start-0"}>
      <ListGroup
        className={`${styles.SideBar} position-fixed top-0 start-0`}
        variant="flush"
      >
        <Navbar.Brand href="#home">{currentUser?.username}</Navbar.Brand>
        {currentUser && addPost}
        <NavLink className={styles.NavLink} to="/">
          <i className={`${styles.icons} fa-solid fa-house`}></i> Home
        </NavLink>
        {currentUser ? loggedInIcons : loggedOutIcons}
      </ListGroup>
    </Card>
  );
};

export default SideBar;
