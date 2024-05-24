import React from "react";
import { loginIcon } from "../assest";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="login">
      <div className="container p-4 mx-auto">
        <div className="max-w-md p-2 py-5 mx-auto bg-white">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcon} alt="login-icon" />
          </div>

          <form action="">
            <div className="">
              <label htmlFor="">Email :</label>
              <div className="p-2 bg-slate-100">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full h-full bg-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="">Password :</label>
              <div className="flex p-2 bg-slate-100">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full h-full bg-transparent outline-none"
                />
              </div>

              <Link to={'/fogot-password'} className="text-[14px] ml-auto block w-fit underline hover:text-red-600  ">
                Forgot Password
              </Link>
            </div>

            <button
              className="block px-6 py-2 mx-auto mt-4 text-white transition-all bg-red-500 rounded hover:scale-110"           
            >Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
