import React from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
  return (
    <div className=" px-4 lg:px-40">
      <div className="border border-t-[#2A407C] border-b-0 border-r-0 border-l-0 py-14">
        <div className="flex flex-col md:flex-row md:justify-between items-center text-center gap-y-10  ">
          <Image src={logo} alt="analytics logo" />
          <div className="flex flex-col md:flex-row text-[#8794BA] gap-x-9 gap-y-3">
            <p>Products</p>
            <p>Pricing Plans</p>
            <p>FAQ</p>
            <p>Blog</p>
          </div>
          <div className="flex items-center justify-center gap-5 text-[#8794BA] text-[24px] cursor-pointer">
            <BiLogoFacebook />
            <BiLogoTwitter />
            <BiLogoInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
