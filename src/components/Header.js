import React from "react";
import logo from "../assets/logo3.png";
import userIcon from "../assets/userIcon.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-5 py-2 w-screen bg-gradient-to-b from-gray-950 to-transparent top-0 h-20 flex justify-between items-center">
      <img className="h-40 w-auto" src={logo} alt="logo" />
      {user && (
        <div className="flex items-center space-x-2">
          <img className="h-8 w-auto" alt="usericon" src={userIcon} />
          <button
            onClick={handleSignOut}
            className="text-white bg-red-500 hover:bg-red-700 px-3 py-1 rounded-2xl text-center font-bold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
