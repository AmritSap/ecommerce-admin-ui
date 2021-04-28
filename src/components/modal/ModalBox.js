import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const ModalBox = ({ show, toggleModal, children }) => {
  return (
    <>
      <Modal show={show} onHide={toggleModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
