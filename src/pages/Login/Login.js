import React from "react";
import { Formik, Form } from "formik";

import { validate } from "../../utils/formValidation";
import TextInput from "../../components/forms/TextInput";
import { login } from "../../auth/login";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(value) => {
        console.log(value);
        login(value);
        // console.log(value);
      }}
    >
      {(formik) => (
        <div className="card">
          <h1 className="font-weight-bold-display-4 card-header text-center">
            Login
          </h1>
          <div>
            <Form className="card-body">
              <TextInput label="E-mail" name="email" type="email" />
              <TextInput label="Password" name="password" type="password" />
              <button className="btn btn-dark mt-3" type="submit">
                Login
              </button>
              <p className="mt-3">
                New User?{" "}
                <Link to="/register" className="text-danger">
                  Click Here
                </Link>{" "}
              </p>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
