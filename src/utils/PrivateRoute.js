import { Outlet, Navigate } from "react-router-dom";
import { Toast } from "../components/ToastNotification";

const PrivateRoute = () => {
  let auth = { token: true };
  return auth.token ? (
    <Outlet />
  ) : (
    (Toast("error", "You must login first"), (<Navigate to="/" />))
  );
};

export default PrivateRoute;
