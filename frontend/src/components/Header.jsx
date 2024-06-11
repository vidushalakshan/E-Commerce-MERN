import React, { useState } from "react";
import { logo } from "../assest";
import { HiOutlineSearch } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { clearUserDetails } from "../store/userSlice";

const Header = () => {
  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await fetch(SummaryApi.logout_user.url, {
        method: SummaryApi.logout_user.method,
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        dispatch(clearUserDetails());
        toast.success(data.message);
      } else if (data.error) {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Failed to logout:", error);
      toast.error("Logout failed");
    }
  };

  return (
    <header className="h-16 bg-white shadow-md">
      <div className="container flex items-center justify-between h-full px-4 mx-auto">
        <Link to="/">
          <img src={logo} alt="Nav Logo" className="w-[135px] h-[90px]" />
        </Link>

        <div className="items-center justify-between hidden w-full max-w-sm pl-2 border rounded-full lg:flex focus-within:shadow">
          <input
            type="text"
            placeholder="search product here...."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 text-white bg-red-600 flex items-center justify-center rounded-full">
            <HiOutlineSearch />
          </div>
        </div>

        <div className="flex items-center justify-center gap-7">
          <div className="relative flex justify-center ">
            <div className="text-3xl cursor-pointer" onClick={() => setMenuDisplay(preve => !preve)}>
              {user?.profilepic ? (
                <img
                  src={user.profilepic}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <FaRegCircleUser />
              )}
            </div>

            {menuDisplay && (
              <div className="absolute bottom-0 p-2 bg-white rounded shadow-lg top-11 h-fit ">
                <nav>
                  <Link
                    to={"admin-panel"}
                    className="p-2 whitespace-nowrap hover:bg-slate-100" onClick={() => setMenuDisplay(preve => !preve)}
                  >
                    Admin Panel
                  </Link>
                </nav>
              </div>
            )}
          </div>

          <div className="relative text-2xl cursor-pointer">
            <span>
              <FaShoppingCart />
            </span>

            <p className="absolute flex items-center justify-center w-5 h-5 text-sm text-white bg-red-600 rounded-full bottom-3 left-4">
              0
            </p>
          </div>

          <div>
            {user?._id ? (
              <button
                onClick={handleLogout}
                className="px-3 py-1 text-white bg-red-600 rounded-full hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-3 py-1 text-white bg-red-600 rounded-full hover:bg-red-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
