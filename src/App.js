import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.css";
import Header from "./layout/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
