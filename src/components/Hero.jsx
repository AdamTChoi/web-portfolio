import React from "react";
import { Animated } from "react-animated-css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Hero = (props) => {
  return (
    <div name="hero" className="w-full h-screen bg-[#E0E1E4]">
      <div
        className={
          !props.nav
            ? "max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full"
            : "hidden"
        }
      >
        <Animated animationIn="fadeIn" animationInDelay={1000}>
          <p className=" mt-12 font-giaza text-8xl sm:text-[9rem]">Adam</p>
        </Animated>
        <Animated animationIn="fadeIn" animationInDelay={3000}>
          <p className="font-glacial align-center text-xl sm:text-3xl tracking-widest">
            FRONT END DEVELOPER
          </p>
        </Animated>
        <Animated animationIn="fadeIn" animationInDelay={1950}>
          <p className=" font-giaza text-8xl sm:text-[9rem]">Choi</p>
        </Animated>
        <Animated animationIn="fadeIn" animationInDelay={5000}>
          <p className="font-poppins mt-[25px] max-w-[100%] sm:max-w-[700px] items-center text-center text-md sm:text-lg">
            I'm a Chicago-based Front-End Developer who enjoys using modern
            technologies to design satisfying user interfaces. I love to
            constantly challenge myself to learn new frameworks.{" "}
          </p>
        </Animated>
        <Animated animationIn="fadeIn" animationInDelay={9000}>
          <p className="font-poppins mt-[20px] max-w-[100%] sm:max-w-[700px] text-[#575c6d] text-center">
            In my free time you can find me making some beats or praying that
            the White Sox will win a World Series.{" "}
          </p>
        </Animated>
        <Animated animationIn="fadeInLeft" animationInDelay={13000}>
          <div className="mt-[20px]">
            <Link to="work" smooth={true} duration={700}>
              <button className="font-poppins border-2 group px-6 py-3 my-2 flex items-center border-slate-800 hover:bg-[#6b7185] rounded hover:text-[white]">
                View work
                <span className="group-hover:rotate-90 duration-300 group-hover:ml-3">
                  <HiArrowNarrowRight className="ml-2" />
                </span>
              </button>
            </Link>
          </div>
        </Animated>
      </div>
      {/* <img src={Logo} /> */}
    </div>
  );
};

export default Hero;
