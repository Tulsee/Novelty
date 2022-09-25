import * as Yup from "yup";

const validate = Yup.object({
  name: Yup.string().min(7, "Must be at least 7 character"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .required("Please enter Password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

const userUpdateValidate = Yup.object({
  name: Yup.string().min(7, "Must be at least 7 character"),
  email: Yup.string().email().required("Please enter your email"),
});

export { validate, userUpdateValidate };
