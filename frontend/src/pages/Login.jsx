import React, { useContext, useState } from "react";
import { loginIcon } from "../assest";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import Context from "../context";

const Login = () => {
  // create state email and password
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { fetchUserDetails } = useContext(Context);

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

  const hanldeSubmit = async (e) => {
    e.preventDefault();

    const dataResponse = await fetch(SummaryApi.SignIn.url, {
      method: SummaryApi.SignIn.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      toast.success(dataApi.message);
      navigate("/");
      await fetchUserDetails();
    }

    if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };

  console.log("data login", data);

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
          <form
            action=""
            className="flex flex-col gap-2 mt-6"
            onSubmit={hanldeSubmit}
          >
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
              {/*/> password text section */}

              {/* fogot password link  */}
              <Link
                to={"/fogot-password"}
                className="text-[14px] ml-auto block w-fit underline hover:text-red-600  "
              >
                Forgot Password ?
              </Link>
            </div>
            {/* /> fogot password link  */}

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

export default Login;
