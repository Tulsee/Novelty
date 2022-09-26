import axios from "axios";
import { Toast } from "../components/ToastNotification";

const baseUrl = "http://localhost:2000/api/v1/user/";

const userRegister = async (value) => {
  return await axios
    .post(`${baseUrl}register`, value)
    .then((res) => {
      if (res.data) {
        Toast("success", "user register successfully");
        return res;
      }
    })
    .catch((err) => {
      let error = err.response.data.error;
      Toast("error", error);
    });
};

const getUserList = async (search) => {
  console.log("search", search);
  return await axios
    .get(baseUrl, {
      params: {
        search,
      },
    })
    .then((res) => {
      console.log(res);
      return res.data;
    });
};

const userDelete = async (id) => {
  return await axios.delete(`${baseUrl}${id}`).then((res) => {
    return res;
  });
};

const updateUser = async (id, params) => {
  const data = await axios.patch(`${baseUrl}${id}`, { params });
  if (data) {
    return data;
  } else {
    Toast("error", "something went wrong");
    throw new Error("Something went wrong");
  }
};

export { getUserList, updateUser, userDelete, userRegister };
