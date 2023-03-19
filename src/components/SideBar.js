import { React } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "../styles/SideBar.module.css";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../context/CurrentUserContext";
import Profile from "./Profile";
import axios from "axios";


const SideBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();


  const handleSignOut = async () => {
    try {
      await axios.post("/dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };
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
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className={`${styles.icons} fa-solid fa-right-from-bracket`}></i> Sign out
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
    <Card>
      <ListGroup
        className={styles.SideBar}
        variant="flush"
      >
        <Navbar.Brand>
          <NavLink to="/">
          {currentUser?.username}
            Brand
          </NavLink>
          </Navbar.Brand>
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
