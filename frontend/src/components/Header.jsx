import React from "react";
import { logo } from "../assest";
import { HiOutlineSearch } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-16 shadow-md">
      <div className="container flex items-center justify-between h-full px-4 mx-auto">
        <div>
          <img src={logo} alt="Nav Logo" className="w-[135px] h-[90px]" />
        </div>

        <div className="hidden w-full max-w-sm pl-2 border rounded-full lg:flex justinfy-between items-starts-center focus-within:shadow">
          <input
            type="text"
            placeholder="search product here...."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 text-white bg-red-600 flex items-center justify-center rounded-full">
            <HiOutlineSearch />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="text-3xl cursor-pointer">
            <FaRegCircleUser />
          </div>

          <div className="relative text-2xl cursor-pointer">
            <span>
              <FaShoppingCart />
            </span>
            
            <p className="absolute flex items-center justify-center w-5 h-5 text-sm text-white bg-red-600 rounded-full bottom-3 left-4">0</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
