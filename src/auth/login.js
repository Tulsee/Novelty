import axios from "axios";
import { Toast } from "../components/ToastNotification";

const baseUrl = "http://localhost:2000/api/v1/user/login";

const login = async (value) => {
  return await axios
    .post(baseUrl, value)
    .then((res) => {
      if (res.data.token) {
        Toast("success", "Successfully Login");
        localStorage.setItem("authToken", JSON.stringify(res.data.token));
        localStorage.setItem("isAuthenticated", true);
      }
      return res;
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
  localStorage.removeItem("isAuthenticated");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("authToken"));
};
const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated");
};

export { login, logout, getCurrentUser, isAuthenticated };
