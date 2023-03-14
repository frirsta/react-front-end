import { React } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "../styles/SideBar.module.css";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../context/CurrentUserContext";
import style from '../styles/Profile.module.css'
import Profile from "./Profile";



const SideBar = () => {
  const currentUser = useCurrentUser();
  const addPost = <>
      <NavLink to="/posts/add">
        <i className="fa-solid fa-square-plus"></i> Add post
      </NavLink>
  </>
  const loggedInIcons = (
    <>

      <NavLink to={`/accounts/${currentUser?.profile_id}`}>
        <Profile src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>

      <NavLink to="/notification">
        <i className="fa-solid fa-heart"></i> Notification
      </NavLink>
      <NavLink to="/"
      onClick={() => {}}>
        <i className="fa-solid fa-right-from-bracket"></i> Sign out
      </NavLink>
      
      {currentUser?.username}
    </>
  );

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
    <Card className={"position-fixed top-0 start-0"}>
      <ListGroup
        className={`${styles.SideBar} position-fixed top-0 start-0`}
        variant="flush"
      >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        {currentUser && addPost}
        <NavLink to="/">
          <i className="fa-solid fa-house"></i> Home
        </NavLink>
        {currentUser ? loggedInIcons : loggedOutIcons}
      </ListGroup>
    </Card>
  );
};

export default SideBar;
