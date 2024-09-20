import React, { useEffect, useRef, useState } from "react";
import { DownIcon, RightArrowIcon } from "../assets/Icon/Icon";
import "../App.css";
import CoverBob from "../assets/images/Cover_Bob.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css';
import Home_Cover_first from "../assets/images/Home_cover_1.jpg"
import Home_Cover_second from "../assets/images/Home_cover_2.jpg"
import Home_Cover_third from "../assets/images/Home_cover_3.jpg"
import Home_Cover_fourth from "../assets/images/Home_cover_5.jpg"

const bulletImages:string[] = [Home_Cover_first,Home_Cover_second,Home_Cover_third]

const downImages =[
  {industry:"Fintech",image:CoverBob,project:"Cover Bob"},
  {industry:"Transportaion",image:Home_Cover_fourth,project:"Something Good"},
]

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>(CoverBob);
  const handleHover = () => {
    setIsHovering(true);
  };

  const handleHoverLeave = () => {
    setIsHovering(false);
    setCurrentImage(CoverBob);
    setActiveIndex(0);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    let interval;
    if (isHovering) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % bulletImages.length); 
      }, 300); 

      return () => clearInterval(interval); 
    }
  }, [isHovering]);

  useEffect(() => {
    if (isHovering) {
      setCurrentImage(bulletImages[activeIndex]); 
    }
  }, [activeIndex, isHovering]);

  useEffect(() => {
    const fadeUpElements = document.querySelectorAll(".fade-up");
    fadeUpElements.forEach((el) => {
      setTimeout(() => {
        el.classList.add("fade-up-loaded"); 
      }, 100); 
    });
  }, []);

  useEffect(() => {
    const imageElements = document.querySelectorAll(".image-animation");
    imageElements.forEach((el) => {
      setTimeout(() => {
        el.classList.add("image-animation-loaded"); 
      }, 300); 
    });
  }, []);

  return (
    <div className="relative">
        <div className="absolute z-10 flex flex-wrap gap-14 md:gap-0 xl:justify-between lg:justify-center w-full px-[1.25rem] md:px-20 mt-[85px] xl:mt-[100px]">
          <div>
            <h1 className="font-light text-[1.2rem] md:text-[1.8rem] tracking-[-1.5px] leading-[1.3] pr-3 max-w-[35rem] fade-up">
              <u>Full-stack digital agency</u> crafting innovative solutions:
              From concept to creation, we transform ideas into impactful
              digital experiences
            </h1>
          </div>
          <div className="flex gap-3 self-end items-center lg:pl-3"
           onMouseEnter={handleHover}
           onMouseLeave={handleHoverLeave}>
            <p>We bridge the raw to beautiful</p>
            <div className="cursor-pointer">
              <RightArrowIcon />
            </div>
          </div>
        </div>
      {/* <div className="absolute z-10 max-w-[59rem]  top-80 right-0 left-0 bottom-0  text-white lg:pr-3 group px-[5rem] mx-auto">
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
      </div> */}
      
      <div className="absolute z-10 flex flex-col  xl:justify-between lg:justify-center max-w-full mt-[233px] sm:mt-[220px] md:mt-[220px] lg:mt-[220px] px-[1.25rem] md:px-[5.22rem] lg:px-40 xl:px-20 text-white">
      <p>Industry:</p>
      <span className="font-bold">Agency</span>
      <div className="min-h-[70px]"></div>
        <h1 className="text-[4rem] 1.88rem tracking-[-1px] min-w-fit">
          Est Populo
        </h1>
        <span
          className={`absolute text-xs bottom-[-24px] left-0 h-[1px] bg-black transition-all
            w-0 group-hover:w-fit
            duration-300 ease-out`}
            ></span>
        </div>

      <div className="absolute top-[199px] bottom-0 w-full z-0 h-[49.47917vh] image-animation">
        <img
           src={currentImage}
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
        <div className="fixed z-4 left-[1rem] bottom-[1rem] sm:left[1.25rem] sm:bottom[1.25rem] md:left-[3.3333rem] md:bottom-[3.3333rem]">
          <DownIcon />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
