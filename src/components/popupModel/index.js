import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Form } from "formik";

import TextInput from "../forms/TextInput";
import { userUpdateValidate } from "../../utils/formValidation";
import { updateUser } from "../../api/user";
import { Toast } from "../ToastNotification";

const PopupModel = ({ user, isUpdated }) => {
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
            validationSchema={userUpdateValidate}
            onSubmit={(value) => {
              updateUser(user._id, value).then((res) => {
                Toast("success", "user has been updated");
                setShow(false);
                isUpdated(true);
              });
              console.log(value);
            }}
          >
            {(formik) => (
              <div>
                <Form className="card-body">
                  <TextInput label="E-mail" name="email" type="email" />
                  <TextInput label="name" name="name" type="text" />
                  <button className="btn btn-dark mt-3" type="submit">
                    Login
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PopupModel;
