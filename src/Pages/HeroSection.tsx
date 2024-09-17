import React, { useEffect, useRef, useState } from "react";
import { DownIcon, RightArrowIcon } from "../assets/Icon/Icon";
import "../App.css";
import CoverBob from "../assets/Cover_Bob.jpg";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative">
      <div className="container">
      <div className="absolute z-10 flex flex-wrap xl:justify-between lg:justify-center w-full  px-20 mt-[120px]">
        <div>
          <h1 className="font-light text-[2.28571rem] tracking-[-1.5px] leading-[1.3] pr-3 max-w-[35rem]">
            <u>Full-stack digital agency</u> crafting innovative solutions: From
            concept to creation, we transform ideas into impactful digital
            experiences
          </h1>
        </div>
        <div className="flex gap-3 self-end items-center pl-3 pt-[3.5rem]">
          <p>We bridge the raw to beautiful</p>
          <div className="cursor-pointer">
            <RightArrowIcon />
          </div>
        </div>
      </div>
      </div>
      <div className="absolute z-10 top-80 right-0 left-0 bottom-0  text-white lg:pr-3 group px-[5rem] mx-auto">
        <p>Industry:</p>
        <span className="font-bold">Agency</span>
        <div className="min-h-[40px]"></div>
        <h1 className="text-black text-[4rem] tracking-[-1px] min-w-fit">
          Est Populo
        </h1>
        <span
          className={`absolute text-xs bottom-[-24px] left-0 h-[1px] bg-black transition-all
            w-0 group-hover:w-fit
            duration-300 ease-out`}
            ></span>
                        
      </div>

        <div className="absolute top-72 bottom-0 w-full z-0 h-[49.47917vh]">
          <img
            src={CoverBob}
            alt=""
            className="object-cover w-full h-full object-center mb-48"
          />
        <div className="absolute bottom-0 right-0 w-[6.66667rem] z-30">
          <ul className="absolute top-[-8rem] -translate-y-1/2 right-[3.33333rem] list-none cursor-pointer">
            <li
              className="w-[0.88889rem] h-[0.88889rem] mb-[0.88889rem] relative custom-li"
              onClick={() => handleClick(0)}
            ></li>
            <li
              className="w-[0.88889rem] h-[0.88889rem] mb-[0.88889rem] relative custom-li"
              onClick={() => handleClick(1)}
            ></li>
            <li
              className="w-[0.88889rem] h-[0.88889rem] mb-[0.88889rem] relative custom-li"
              onClick={() => handleClick(2)}
            ></li>
            <li
              className="w-[0.88889rem] h-[0.88889rem] mb-[0.88889rem] relative custom-li"
              onClick={() => handleClick(3)}
            ></li>
          </ul>
        </div>  
        
        </div>
    </div>
  );
};

export default HeroSection;
