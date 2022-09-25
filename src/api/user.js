import axios from "axios";
import { Toast } from "../components/ToastNotification";

const baseUrl = "http://localhost:2000/api/v1/user/";

// const getUserList = async () => {
//   return await axios
//     .get(baseUrl)
//     .then((data) => {
//       if (data) return Promise.resolve(data);
//     })
//     .catch((err) => {
//       return Promise.reject();
//     });
// };

const getUserList = async () => {
  return await axios.get(baseUrl).then((res) => {
    return res;
  });
};

// const getUserList = async () => {
//   const data = await axios.get(baseUrl);
//   if (data) return data;
//   else {
//     Toast("error", "Something went wrong");
//   }
// };

const updateUser = async (id, params) => {
  const data = await axios.put(`${baseUrl}${id}`, { body: params });
  if (data) {
    Toast("succeess", "Successfully updated");
    return data;
  } else {
    Toast("error", "something went wrong");
    throw new Error("Something went wrong");
  }
};

export { getUserList, updateUser };
