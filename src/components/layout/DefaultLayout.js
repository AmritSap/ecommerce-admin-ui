import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import Footer from "./partials/Footer.js";
import Header from "./partials/Header.js";
import { SideBarNav } from "../sidebar/SideBarNav.js";
import "./defaultlayout.style.css";
const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <div className="left-bar">
        <div className="admin-logo p-2 mb-5">Admin Panel</div>
        <hr className="divider"></hr>
        <SideBarNav />
      </div>
      <div className="main">
        <Header />
        <Jumbotron>{children}</Jumbotron>

        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
