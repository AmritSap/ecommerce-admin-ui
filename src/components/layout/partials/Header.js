import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <i class="fas fa-bell text-success"></i>
        </Navbar.Text>
        <Navbar.Text>
          <i class="fas fa-user text-primary"></i> Log Out
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
