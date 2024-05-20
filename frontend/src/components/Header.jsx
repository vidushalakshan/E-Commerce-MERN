import React from "react";
import { logo } from "../assest";
import { HiOutlineSearch } from "react-icons/hi";

const Header = () => {
  return (
    <header className="h-16 shadow-md">
      <div className="container flex items-center justify-between h-full px-4 mx-auto">
        <div>
          <img src={logo} alt="Nav Logo" className="w-[135px] h-[90px]" />
        </div>

        <div className="hidden w-full max-w-sm pl-2 border rounded-full lg:flex justinfy-between items-starts-center focus-within:shadow">
          <input type="text" placeholder="search product here...."  className="w-full outline-none"/>
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-full">
            <HiOutlineSearch />
          </div>
        </div>

        <div>user icons and card</div>
      </div>
    </header>
  );
};

export default Header;
