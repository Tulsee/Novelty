import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import PrivateRoute from "./utils/PrivateRoute";
import Header from "./layout/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import Landing from "./pages/landing";

function App() {
  return (
    <div>
      <Header />
      <div className="mt-3">
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user" element={<UserList />} />
          </Route>
          <Route exact path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
