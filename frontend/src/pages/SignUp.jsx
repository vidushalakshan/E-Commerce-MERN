import React, { useState } from "react";
import { loginIcon } from "../assest";
import { Link } from "react-router-dom";

const SignUp = () => {
  // create state email and password
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword:"",
  });

  // handle on change email and password
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="login">
      <div className="container p-4 mx-auto">
        <div className="max-w-sm p-4 mx-auto bg-white">
          {/* login image icon  */}
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcon} alt="login-icon" />
          </div>
          {/* />login image icon  */}

          {/* start form section */}
          <form action="" className="mt-6" onSubmit={hanldeSubmit}>
            {/* name text section */}
            <div className="">
              <label htmlFor="">Name :</label>
              <div className="p-2 bg-slate-100">
                <input
                  onChange={handleOnChange}
                  value={data.email}
                  name="name"
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full h-full bg-transparent outline-none"
                />
              </div>
            </div>
            {/* /> name text section */}

            {/* email text section */}
            <div className="">
              <label htmlFor="">Email :</label>
              <div className="p-2 bg-slate-100">
                <input
                  onChange={handleOnChange}
                  value={data.email}
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  className="w-full h-full bg-transparent outline-none"
                />
              </div>
            </div>
            {/* /> email text section */}

            {/* password text section */}
            <div>
              <label htmlFor="">Password :</label>
              <div className="flex p-2 bg-slate-100">
                <input
                  onChange={handleOnChange}
                  name="password"
                  value={data.password}
                  type="password"
                  placeholder="Enter Password"
                  className="w-full h-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/*confirm password text section */}
            <div>
              <label htmlFor="">Confirm Password :</label>
              <div className="flex p-2 bg-slate-100">
                <input
                  onChange={handleOnChange}
                  name="confirmPassword"
                  value={data.confirmPassword}
                  type="password"
                  placeholder="Enter Password"
                  className="w-full h-full bg-transparent outline-none"
                />
              </div>
            </div>
            {/* /> confirm password text section */}

            {/* login button */}
            <button className="block px-6 py-2 mx-auto mt-4 text-white transition-all bg-red-500 rounded hover:scale-110">
              Login
            </button>
            {/* /> login button */}
          </form>
          {/* />start form section */}

          {/* singup link */}
          <p className="my-5">
            Don't have account ?{" "}
            <Link
              to={"/sign-up"}
              className="text-red-500 hover:text-red-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
          {/* /> singup link */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
