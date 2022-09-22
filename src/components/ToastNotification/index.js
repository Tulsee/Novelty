import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const Toast = (status, message) => {
  if (status === "error") {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  if (status === "success") {
    return toast.success(message);
  }
};
