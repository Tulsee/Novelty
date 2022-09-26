import React from "react";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";

import { validate } from "../../utils/formValidation";
import TextInput from "../../components/forms/TextInput";
import { userRegister } from "../../api/user";

const Register = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(value) => {
        userRegister(value).then((res) => {
          if (res.data) navigate("/login");
        });
      }}
    >
      {(formik) => (
        <div className="container">
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
                <p className="mt-3">
                  Already have an account?{" "}
                  <Link to="/login" className="text-danger">
                    Click Here
                  </Link>{" "}
                </p>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Register;
