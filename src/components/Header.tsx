import { MenuIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import SliderImage from "../assets/images/image_03@2x.png";
import HeaderLogoBlack from "../assets/images/logo_03.png";
import HeaderLogo from "../assets/images/logo_white@2x.png";
import HeaderBottomShape from "../assets/images/Shape_06@2x.png";

const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);
  const [hamburgerClicked, sethamburgerClicked] = useState<boolean>(false);

  const showHeader = () => {
    if (window.scrollY >= 80) {
      setMenuIsVisible(true);
    } else {
      if (hamburgerClicked) {
        setMenuIsVisible(true);
      } else {
        setMenuIsVisible(false);
      }
    }
  };
  const showMobileMenu = () => {
    console.log(window.scrollY);
    sethamburgerClicked(!hamburgerClicked);
    if (window.scrollY >= 80) {
      setMenuIsVisible(true);
    } else {
      setMenuIsVisible(false);
    }
  };

  window.addEventListener("scroll", showHeader);

  return (
    <header className="bg-gradient-to-l from-amber-gradient_start to-amber-gradient_end relative">
      <div>
        <img
          className="absolute bottom-0"
          src={HeaderBottomShape}
          alt=" bottom shape"
        />
      </div>
      <nav
        className={
          menuIsVisible || hamburgerClicked
            ? "flex h-16 bg-white border-b-2 border-white border-opacity-30 justify-around fixed w-full top-0"
            : "flex h-16 border-b-2 border-white border-opacity-30 justify-around fixed top-0 w-full"
        }
      >
        {/* Top Nav */}
        <div className="flex items-center">
          <div>
            <img
              width="200"
              src={
                menuIsVisible || hamburgerClicked ? HeaderLogoBlack : HeaderLogo
              }
              alt="best designer"
            />
          </div>
        </div>
        <div
          className="flex items-center xl:hidden cursor-pointer"
          onClick={showMobileMenu}
        >
          <div
            className={`border-2 p-1 px-2 rounded ${
              menuIsVisible || hamburgerClicked
                ? "border-amber-hamburger_btn_background"
                : "border-white"
            }`}
          >
            <MenuIcon
              className={`h-6  ${
                menuIsVisible || hamburgerClicked
                  ? "text-amber-hamburger_btn_background"
                  : "text-white "
              }`}
            />
          </div>
        </div>
        <div className="text-white font-sfpro items-center gap-5 cursor-pointer text-lg hidden xl:flex">
          <p className={`font-bold ${menuIsVisible ? "text-black" : ""}`}>
            Home
          </p>
          <p className={` ${menuIsVisible ? "text-black" : ""}`}>Portfolio</p>
        </div>
        <div className="hidden items-center xl:flex">
          <p
            className={`custom_btn ${
              menuIsVisible
                ? "bg-gradient-to-r from-amber-gradient_start to-amber-gradient_end"
                : ""
            }`}
          >
            <span className={menuIsVisible ? "text-white" : ""}>HIRE ME</span>
          </p>
        </div>
      </nav>

      {/* Mobile Navigation */}

      {hamburgerClicked && (
        <div className="bg-white py-20 block xl:hidden w-full fixed top-14">
          <div className="m-auto w-48 text-center">
            <p className="font-bold text-black font-sfpro text-2xl">Home</p>
            <p className="font-sfpro mt-12 text-2xl">Portfolio</p>
          </div>
          <div className="flex justify-center mt-24">
            <p className="bg-gradient-to-r from-amber-gradient_start to-amber-gradient_end text-amber-btn_color font-sfpro font-bold py-3 px-3 w-24 shadow cursor-pointer text-sm text-center">
              <span className="text-white text-center">HIRE ME</span>
            </p>
          </div>
        </div>
      )}

      {/* Slider */}
      <div className="flex-none xl:flex w-9/12 h-full m-auto pb-32 py-24 text-center xl:text-left">
        <div className="w-full mt-10 mr-28">
          <p className="font-sfpro font-bold text-xl text-white">
            BUSINESS WORKFLOW
          </p>
          <p className="font-sfpro font-bold text-6xl text-white mt-10">
            Get the most efficient UI design for your business now!
          </p>
          <p className="font-sfpro font-bold text-2xl text-white mt-12">
            Hire me to design a clean and modern UI for your product’s website.
          </p>

          <div className="flex-none md:flex mt-14 justify-center xl:justify-start">
            <p className="custom_btn">HIRE ME</p>
            <p className="custom_hover_btn mt-3 md:mt-0">HIRE ME</p>
          </div>
        </div>
        <div className="ml-0 md:ml-24 mt-20 xl:mt-0">
          <img className="w-full" src={SliderImage} alt="Slider" />
        </div>
      </div>
    </header>
  );
};

export default Header;
