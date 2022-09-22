import * as Yup from "yup";

const validate = Yup.object({
  name: Yup.string().min(7, "Must be at least & character"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

export { validate };
