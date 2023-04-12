import { React } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "../styles/SideBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../context/CurrentUserContext";
import Profile from "./Profile";
import axios from "axios";
import { removeTokenTimestamp } from "../utils/utils";

const SideBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("/dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      console.log(err);
    }
  };

  const contact = (
    <>
    <NavLink className={styles.NavLink}  to="/contactform/">
    <i className={`${styles.icons} fa-solid fa-envelope`} />Contact
      </NavLink></>
  )
  const addPost = (
    <>
      <NavLink className={styles.NavLink} to="/posts/add">
        <i className={`${styles.icons} fa-solid fa-square-plus`}></i>{" "}
        <span className={styles.SideBarLink}>Add post</span>
      </NavLink>
    </>
  );
  const loggedInIcons = (
    <>
    {contact}
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className={`${styles.icons} fa-solid fa-right-from-bracket`}></i>{" "}
        <span className={styles.SideBarLink}>Sign out</span>
      </NavLink>
      {addPost}
      <NavLink className={styles.NavLink} to="/saved">
        <i className={`${styles.icons} fa-solid fa-bookmark`}></i>{" "}
        <span className={styles.SideBarLink}>Saved posts</span>
      </NavLink>
     

      <NavLink
        className={styles.NavLink}
        to={`/accounts/${currentUser?.profile_id}`}
      >
        <Profile
          className={`${styles.icons} ${styles.Profile}`}
          src={currentUser?.profile_image}
        />{" "}
        <span className={styles.SideBarLink}>Profile</span>
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink className={styles.NavLink} to="/signin">
        <i className={`${styles.icons} fa-solid fa-right-to-bracket`}></i>{" "}
        <span className={styles.SideBarLink}>Sign in</span>
        
      </NavLink>
      <NavLink className={styles.NavLink} to="/signup">
        <i className={`${styles.icons} fa-solid fa-user-plus`}></i>{" "}
        <span className={styles.SideBarLink}>Sign up</span>
      </NavLink>
    </>
  );
  return (
    <Card className={styles.SideBarContainer}>
      <ListGroup className={styles.SideBar} variant="flush">
        <NavLink className={styles.NavLink} to="/">
          <i className={`${styles.icons} fa-solid fa-house`}></i>{" "}
          <span className={styles.SideBarLink}>Home</span>
        </NavLink>
        {currentUser ? loggedInIcons : loggedOutIcons}
      </ListGroup>
    </Card>
  );
};

export default SideBar;
