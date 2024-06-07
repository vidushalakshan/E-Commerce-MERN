import React, { useState } from "react";
import { loginIcon } from "../assest";
import { Link } from "react-router-dom";
import imageTobase64 from "../helpers/image Tobase64";
import SummaryApi from "../../common";

const SignUp = () => {
  // create state email and password
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilepic: "",
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

  const hadnleUploadPic = async (e) => {
    const file = e.target.files[0]

    const imagePic = await imageTobase64(file)
    setData((preve)=> {
     return {
      ...preve,
      profilepic : imagePic 
     }
    })
  }

  const hanldeSubmit = async (e) => {
    e.preventDefault();

    if(data.password === data.confirmPassword){
      const dataResponse = await fetch(SummaryApi.SignUp.url,{
        method : SummaryApi.SignUp.method,
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    
    const dataApi = await dataResponse.json()

    console.log("data", dataApi);
    }else {
      console.log("Please check password and confirm password..")
    }
  };

  return (
    <div id="login">
      <div className="container p-4 mx-auto">
        <div className="max-w-sm p-4 mx-auto bg-white">
          {/* sign-up image icon  */}
          <div className="relative w-20 h-20 mx-auto overflow-hidden rounded-full">
            <div>
              <img src={data.profilepic  || loginIcon} alt="login-icon" />
            </div>
            <form>
              <label>
                <div className="absolute bottom-0 w-full pt-2 pb-4 text-xs text-center cursor-pointer bg-slate-200 bg-opacity-80">
                  Upload Photo
                </div>
                <input type="file" className="hidden" onChange={hadnleUploadPic}/>
              </label>
            </form>
          </div>
          {/* />sign-up image icon  */}

          {/* start form section */}
          <form
            action=""
            className="flex flex-col gap-2 mt-6"
            onSubmit={hanldeSubmit}
          >
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
                  required
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
                  required
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
                  required
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
                  required
                  className="w-full h-full bg-transparent outline-none"
                />
              </div>
            </div>
            {/* /> confirm password text section */}

            {/* login button */}
            <button className="block px-6 py-2 mx-auto mt-4 text-white transition-all bg-red-500 rounded hover:scale-110">
              Sign Up
            </button>
            {/* /> login button */}
          </form>
          {/* />start form section */}

          {/* singup link */}
          <p className="my-5">
            Already have account ?{" "}
            <Link
              to={"/login"}
              className="text-red-500 hover:text-red-600 hover:underline"
            >
              Login
            </Link>
          </p>
          {/* /> singup link */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
