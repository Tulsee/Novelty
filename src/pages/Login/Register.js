import React from "react";
import { Formik, Form } from "formik";

import { validate } from "../../utils/formValidation";
import TextInput from "../../components/forms/TextInput";

const Register = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(value) => {
        localStorage.setItem("user", value);
      }}
    >
      {(formik) => (
        <div className="card">
          <h1 className="font-weight-bold-display-4 card-header text-center">
            Register
          </h1>
          <div>
            <Form className="card-body">
              <TextInput label="Name" name="name" type="text" />
              <TextInput label="E-mail" name="email" type="email" />
              <TextInput label="Password" name="password" type="password" />
              <button className="btn btn-dark mt-3" type="submit">
                Register
              </button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Register;
