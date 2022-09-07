import React from "react";
import CSS from "../assets/css.png";
import Figma from "../assets/figma.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import NextJs from "../assets/nextjs.webp";
import ReactImg from "../assets/react.png";
import TWIcon from "../assets/tailwind.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto md:h-screen bg-[#E0E1E4] text-[#020313]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4">
            <p className="text-4xl md:text-6xl font-bold inline font-giaza border-b-4 border-slate-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="md:mt-4 pl-4 max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="text-2xl md:text-4xl font-bold font-poppins">
            <p>
              Hi! I'm Adam, nice to meet you. Feel free to take a look around.
            </p>
          </div>
          <div className="pr-4 md:text-lg font-poppins">
            <p>
              I am passionate about building software that improves the lives of
              those around me. I specialize in Front-End development where I
              excel in producing pixel-perfect user interfaces for better public
              accessibility and engagement.
            </p>
          </div>
        </div>
        <div className="mt-10 mx-4 py-5 rounded max-w-[1000px] w-full flex flex-col justify-center items-center gap-8 bg-gray-400">
          <div className="text-lg md:text-2xl px-4 font-bold font-poppins">
            <p>These are the technologies that I've worked with.</p>
          </div>
          <div className="mt-[-15px] md:pr-4 flex flex-row justify-center  items-center">
            <div className="flex flex-col">
              <ul className="flex flex-row flex-wrap justify-center items-center">
                <li className="pt-3 flex flex-col justify-center items-center">
                  <img className="max-w-[40px]" src={HTML} />
                  <p className="pt-1 font-poppins font-bold text-center text-[#020313]">
                    HTML
                  </p>
                </li>
                <li className="pt-3 flex flex-col justify-center items-center">
                  <img className="max-w-[40px]" src={CSS} />
                  <p className="pt-1 font-poppins font-bold text-center text-[#020313]">
                    CSS
                  </p>
                </li>
                <li className="pt-3 flex flex-col justify-center items-center">
                  <img className="max-w-[40px]" src={JavaScript} />
                  <p className="pt-1 font-poppins font-bold text-center text-[#020313]">
                    JavaScript
                  </p>
                </li>
                <li className="pt-3 flex flex-col justify-center items-center">
                  <img className="max-w-[40px]" src={ReactImg} />
                  <p className="pt-1 font-poppins text-center font-bold text-[#020313]">
                    React
                  </p>
                </li>
                <li className="pt-3 flex flex-col justify-center items-center">
                  <img className="max-w-[40px]" src={NextJs} />
                  <p className="pt-1 font-poppins text-center font-bold text-[#020313]">
                    Next.js
                  </p>
                </li>
                <li className="pt-3 flex flex-col justify-center items-center">
                  <img className="max-w-[40px]" src={TWIcon} />
                  <p className="pt-1 font-poppins font-bold text-center whitespace-nowrap text-[#020313]">
                    Tailwind
                  </p>
                </li>
                <li className="pt-3 flex flex-col justify-center items-center">
                  <img className="max-w-[40px]" src={GitHub} />
                  <p className="pt-1 font-poppins font-bold text-center whitespace-nowrap text-[#020313]">
                    Github
                  </p>
                </li>
                <li className="pt-3 flex flex-col justify-center items-center">
                  <img className="max-w-[40px]" src={FireBase} />
                  <p className="pt-1 font-poppins font-bold text-center whitespace-nowrap text-[#020313]">
                    Firebase
                  </p>
                </li>
                <li className="pt-3 flex flex-col justify-center items-center">
                  <img className="max-w-[28px]" src={Figma} />
                  <p className="pt-1 font-poppins font-bold text-center whitespace-nowrap text-[#020313]">
                    Figma
                  </p>
                </li>
              </ul>
              {/* <div className="mt-4 md:text-right flex flex-row  items-center">
                <ul className="flex flex-row justify-center items-center">
                  <li className="flex flex-col justify-center items-center">
                    <img className="max-w-[40px]" src={TWIcon} />
                    <p className="font-poppins font-bold text-center whitespace-nowrap text-[#020313]">
                      Tailwind
                    </p>
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <img className="max-w-[40px]" src={GitHub} />
                    <p className="font-poppins font-bold text-center whitespace-nowrap text-[#020313]">
                      Github
                    </p>
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <img className="max-w-[40px]" src={FireBase} />
                    <p className="font-poppins font-bold text-center whitespace-nowrap text-[#020313]">
                      Firebase
                    </p>
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <img className="max-w-[28px]" src={Figma} />
                    <p className="font-poppins font-bold text-center whitespace-nowrap text-[#020313]">
                      Figma
                    </p>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
