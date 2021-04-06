import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./partials/Footer.js";
import Header from "./partials/Header.js";

import "./defaultlayout.css";
const DefaultLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col xs={4}>
          <div className="left-bar">I am from the left menu</div>
        </Col>
        <Col xs={8}>
          <div className="main">
            <Header />
            {children}
            <Footer />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultLayout;