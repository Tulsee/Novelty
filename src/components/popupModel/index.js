import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form } from "formik";

import TextInput from "../forms/TextInput";
import { validate } from "../../utils/formValidation";
import { updateUser } from "../../api/user";

const PopupModel = ({ user }) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              email: user.email,
              name: user.name,
            }}
            validationSchema={validate}
            onSubmit={(value) => {
              updateUser(user.id, value).then((res) => {
                if (res) {
                  console.log(res);
                  handleClose();
                }
              });
              console.log(value);
            }}
          >
            {({ onSubmit }) => (
              <Form onSubmit={onSubmit}>
                <TextInput label="E-mail" name="email" type="email" />
                <TextInput label="name" name="name" type="text" />
                <hr />
                <Button variant="dark" type="submit">
                  Update
                </Button>
                <button className="btn btn-dark mt-3" type="submit">
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PopupModel;
