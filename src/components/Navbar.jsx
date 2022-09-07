import React, { useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import Resume from "../assets/AdamChoi_Resume.pdf";

const Navbar = (props) => {
  // const [nav, setNav] = useState(false);

  const handleClick = () => {
    props.navHandler();
  };

  return (
    <div className=" fixed w-full h-[80px] flex justify-between md:justify-evenly items-center px-4 bg-[#E0E1E4]">
      <div>
        <Link
          className="cursor-pointer flex font-giaza text-[#020313] text-5xl"
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
        >
          ac
        </Link>
      </div>

      <ul className="hidden md:flex text-[#020313] text-xl">
        <li>
          <Link
            className="hover:border-b-4 hover:border-slate-600 duration-300 font-bold font-poppins"
            to="about"
            offset={-80}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b-4 hover:border-slate-600 duration-300 font-bold font-poppins"
            offset={-80}
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b-4 hover:border-slate-600 duration-300 font-bold font-poppins"
            offset={-80}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!props.nav ? (
          <FaBars size={26} color={"#020313"} />
        ) : (
          <FaTimes size={26} color={"#020313"} />
        )}
      </div>
      <ul
        className={
          !props.nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#E0E1E4] flex flex-col justify-center items-center "
        }
      >
        <li className="py-6 text-4xl text-[#020313] font-poppins">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl text-[#020313] font-poppins">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl text-[#020313] font-poppins">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 text-gray-300 bg-blue-800 ">
            <a
              href="https://www.linkedin.com/in/adamtchoi/"
              className="flex justify-between items-center w-full font-poppins pl-2"
            >
              LinkedIn <FaLinkedin size={25} />
            </a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 text-gray-300 bg-[#333333] ">
            <a
              href="https://github.com/AdamTChoi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex pl-2 justify-between items-center font-poppins w-full"
            >
              GitHub <FaGithub size={25} />
            </a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 text-gray-300 bg-[#468849] ">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex pl-2 justify-between items-center w-full"
            >
              <Link to="contact" smooth={true} duration={500}>
                Email
              </Link>
              <HiOutlineMail size={25} />
            </a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 text-gray-300 bg-[#454f69] ">
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex pl-2 justify-between items-center w-full"
            >
              Resume <BsFillPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
