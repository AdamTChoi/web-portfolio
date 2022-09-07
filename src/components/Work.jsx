import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import CFF from "../assets/cff.mp4";
import CSS from "../assets/css.png";
import Figma from "../assets/figma.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import TWIcon from "../assets/tailwind.png";
import WorkImg from "../assets/workImg.jpeg";

const Work = () => {
  return (
    <div name="work" className="w-full h-auto md:h-screen bg-[#E0E1E4]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4 md:pb-8">
          <p className="text-4xl md:text-6xl font-giaza inline font-bold border-b-4 border-slate-600">
            Work
          </p>
          <p className="py-4 md:py-6 font-poppins md:text-lg">
            Check out some of my recent work.
          </p>
        </div>
        <div className="max-w-[1000px] w-full flex justify-center flex-col  md:grid md:grid-cols-2 gap-8">
          <div className="group container content-div  h-full w-full rounded-md flex ">
            <video
              className="shadow-lg shadow-[#040c16]  content-div object-fill h-full w-full rounded-md  "
              src={CFF}
              muted
              autoPlay
              loop
            />

            {/* <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React app
              </span>
              <div className="pt-8 text-center">
                <a>
                  <button>Demo</button>
                </a>
                <a>
                  <button>Code</button>
                </a>
              </div>
            </div> */}
          </div>
          <div className="md:pr-4 flex flex-col justify-center py-2 md:py-0">
            <p className="font-poppins font-bold text-xl md:text-2xl tracking-widest">
              Chicago Future Fund FTX
            </p>
            <p className="font-poppins py-4 md:text-lg">
              The Chicago Future Fund FTX is Equity and Transformation’s (EAT)
              and FTX’s guaranteed income program that gives $500/month and
              no-fee banking services to 100 formerly incarcerated individuals
              for one year.
            </p>
            <div className="flex flex-row py-4">
              <img className="w-[30px]" src={HTML} />
              <img className="w-[30px]" src={CSS} />
              <img className="w-[30px]" src={JavaScript} />
              <img className="w-[30px]" src={ReactImg} />
              <img className="w-[30px]" src={FireBase} />
              <img className="w-[30px]" src={GitHub} />
            </div>
            <div className="flex">
              <button className="font-poppins border-2 group px-6 py-3 my-2 flex items-center  line-through bg-[#6b7185] rounded text-[white]">
                Code
                <span className="">
                  <HiArrowNarrowRight className="ml-2" />
                </span>
              </button>
              <a
                className="ml-4 font-poppins border-2 group px-6 py-3 my-2 flex items-center border-slate-800 hover:bg-[#6b7185] rounded hover:text-[white]"
                href="https://www.eatfuturefund.org"
                target="_blank"
                rel="noreferrer"
              >
                Live
                <span className="group-hover:translate-x-1 duration-300 group-hover:ml-3">
                  <HiArrowNarrowRight className="ml-2" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
