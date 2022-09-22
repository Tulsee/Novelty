import axios from "axios";
import { Toast } from "../components/ToastNotification";
import { CustomMessage } from "../components/CustomMessage";

const baseUrl = "http://localhost:2000/api/v1/user/login";

export const login = (value) => {
  console.log(value);
  axios
    .post(baseUrl, value)
    .then((res) => {
      Toast("error", "Invalid Username or Password");
      if (res.data.token) {
        localStorage.setItem("authToken", JSON.stringify(res.data.token));
      }
      return res.data;
    })
    .catch((err) => {
      CustomMessage();
      Toast("error", "Invalid Username or Password");
      throw new Error();
    });
};
