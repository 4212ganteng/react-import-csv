import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Modalcard({ tampil, settampil }) {
  return (
    <>
      <Modal show={tampil}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal content goes here</Modal.Body>
        <Button onClick={() => settampil(false)}>tutp</Button>
      </Modal>
    </>
  );
}

export default Modalcard;
