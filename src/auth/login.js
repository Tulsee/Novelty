import axios from "axios";
import { Toast } from "../components/ToastNotification";

const baseUrl = "http://localhost:2000/api/v1/user/login";

const login = (value) => {
  axios
    .post(baseUrl, value)
    .then((res) => {
      if (res.data.token) {
        Toast("success", "Successfully Login");
        localStorage.setItem("authToken", JSON.stringify(res.data.token));
      }
      return res.data;
    })
    .catch((err) => {
      Toast("error", "Invalid Username or Password");
      throw new Error();
    });
};

const logout = () => {
  console.log("hello");
  Toast("success", "LogOut successfully");
  localStorage.removeItem("authToken");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("authToken"));
};

export { login, logout, getCurrentUser };
