import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/UserDropdown.module.css";
import { useHistory } from "react-router";
import Menu from "../assets/icons/dropdown.png";

const UserDropdownMenu = React.forwardRef(({ onClick }, ref) => (
  <img
    src={Menu}
    alt="dropdown menu"
    className={`fa-solid fa-caret-down ${styles.DropdownMenu}`}
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const MoreDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown drop="left">
      <Dropdown.Toggle as={UserDropdownMenu} />

      <Dropdown.Menu popperConfig={{ strategy: "fixed" }}>
        <Dropdown.Item
          onClick={handleEdit}
          aria-label="edit"
          className={styles.DropdownIcon}
        >
          <i className="fa-solid fa-pen-to-square" />
        </Dropdown.Item>
        <Dropdown.Item
          onClick={handleDelete}
          aria-label="delete"
          className={styles.DropdownIcon}
        >
          <i className="fa-solid fa-trash" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export function AccountUpdateDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown drop="left">
      <Dropdown.Toggle as={UserDropdownMenu} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/accounts/${id}/update`)}
          aria-label="update-account"
        >
          <i className="fa-solid fa-pen-to-square" />
          update profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/accounts/${id}/update/username`)}
          aria-label="update-username"
        >
          <i className="fa-solid fa-pen-to-square" />
          update username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/accounts/${id}/update/password`)}
          aria-label="update-username"
        >
          <i className="fa-solid fa-key" />
          change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
