import React from "react";
import "animate.css";
import { FaGithub, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

function Footer() {
  return (
    <div className="h-40 absolute bg-purple-400 min-w-full w-full left-0 flex justify-around items-center p-6 animate__animated animate__fadeInUp">
      <div className="">
        <Link to={"/"} >
          <img className="w-20" src="./src/assets/Flying.png" alt=""/>
        </Link>
      </div>

      <div className=" text-black text-lg">
        <ul className="space-y-2 flex justify-start flex-col">
          <li className="hover:text-gray-300 transition duration-300">
            Marketing
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            Software Development
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            Data Analytics
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            Finance
          </li>
        </ul>
      </div>

      <div className="text-black text-lg">
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 hover:text-gray-300 transition duration-300">
            <FaGithub /> <Link to={"https://github.com/Flyingmonk01"}>Github</Link>
          </li>
          <li className="flex items-center space-x-2 hover:text-gray-300 transition duration-300">
            <FaInstagram /> <Link>Instagram</Link>
          </li>
          <li className="flex items-center space-x-2 hover:text-gray-300 transition duration-300">
            <FaTwitter /> <Link>Twitter</Link>
          </li>
          <li className="flex items-center space-x-2 hover:text-gray-300 transition duration-300">
            <FaPinterest /> <Link>Pinterest</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
