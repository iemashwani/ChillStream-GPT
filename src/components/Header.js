import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="absolute px-5 py-2 bg-gradient-to-b from-black to-transparent top-0 w-full flex justify-between items-center">
      <img className=" w-21 h-10" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
