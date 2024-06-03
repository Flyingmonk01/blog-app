import React from "react";
import "animate.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Posts",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <div className="bg-yellow-400 absolute left-0 top-0 min-w-full shadow-lg animate__animated animate__fadeInDown">
      <div className="container mx-auto flex justify-between items-center">
        <div className="m-2 pl-8">
        <Link to={"/"} >
          <img className="w-20" src="./src/assets/Flying.png" alt=""/>
        </Link>
        </div>
        <ul>
          <nav className="flex">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                  <LogoutBtn />
              </li>
            )}
          </nav>
        </ul>
      </div>
    </div>
  );
}

export default Header;
