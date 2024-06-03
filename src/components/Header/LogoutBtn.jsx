import React from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/auth/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => dispatch(logout()))
      .catch((err) => {
        throw new Error("Error occured during logout", err);
      });
  };

  return (
    <div>
      <button className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full" onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default LogoutBtn;
