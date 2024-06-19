import React from 'react'
import logo from "../assets/Logo.png";
import {FaLinkedin} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-5 text-2xl hover:cursor-pointer ">
        <a
          href="https://www.linkedin.com/in/priyansh-arora-38a1b42b1/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/LOSTSOUL2104" target="_blank">
          <FaGithub />
        </a>
        <a href="" target="_blank">
          <FaInstagram />
        </a>
        <a href="" target="_blank">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

