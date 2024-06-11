import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import AllProducts from "../pages/AllProducts";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="fogot-password" element={<ForgotPassword />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="admin-panel" element={<AdminPanel />}>
          <Route path="all-users" element={<AllUsers />} />
          <Route path="all-product" element={<AllProducts />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
