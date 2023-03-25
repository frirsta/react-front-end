import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from '../styles/UserDropdown.module.css'

const UserDropdownMenu = React.forwardRef(({ onClick }, ref) => (
  <i
    className={`fa-solid fa-caret-down ${styles.DropdownMenu}`}
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const MoreDropdown= () => {
  return (
  <Dropdown drop='left'>
    <Dropdown.Toggle as={UserDropdownMenu} id="dropdown-custom-components" />

    <Dropdown.Menu
    popperConfig={{ strategy: "fixed" }}>
      <Dropdown.Item onClick={() => {}} 
      aria-label='edit' 
      className={styles.DropdownIcon} 
      >
        <i className="fa-solid fa-pen-to-square" />
      </Dropdown.Item>
      <Dropdown.Item onClick={() => {}} 
      aria-label='delete' 
      className={styles.DropdownIcon} 
      >
        <i className="fa-solid fa-trash" />
      </Dropdown.Item>
  
    </Dropdown.Menu>
  </Dropdown> 
  )
}
