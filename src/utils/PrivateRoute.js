import { Outlet, Navigate } from "react-router-dom";
import { Toast } from "../components/ToastNotification";
import { isAuthenticated } from "../auth/login";

const PrivateRoute = () => {
  const auth = isAuthenticated();
  return auth ? (
    <Outlet />
  ) : (
    (Toast("error", "You must login first"), (<Navigate to="/" />))
  );
};

export default PrivateRoute;
