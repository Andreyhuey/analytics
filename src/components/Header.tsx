import React from "react";
import Image from "next/image";
//
import logo from "../assets/subtract.svg";
import backgroundImage from "../assets/background-top.svg";
import mainScreen from "../assets/main-screen.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="relative overflow-hidden bg-[url('../assets/background-top.svg')] bg-no-repeat bg-cover">
      <div className="relative z-10 lg:py-12 md:py-8 py-4 px-4 lg:px-40">
        {/* nav component for tabs and pcs */}
        <nav>
          <div className="md:flex justify-between hidden">
            <div className="flex justify-between items-center gap-x-16">
              <Link className="flex gap-3 items-center cursor-pointer" href="/">
                <Image src={logo} alt="Analytics logo" />
                <h1 className=" font-extrabold text-[18px] ">ANALYTICS</h1>
              </Link>

              <ul className="text-[#8794BA] font-[400] gap-x-8 flex items-center">
                <li>
                  <Link href="/">Products</Link>
                </li>
                <li>
                  <Link href="/">Pricing</Link>
                </li>
                <li>
                  <Link href="/">FAQ</Link>
                </li>
                <li>
                  <Link href="/">Blog</Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-8 text-[#8794BA] font-[400]">
                <button>Sign in</button>
                <button className="border border-[#8794BA] rounded-3xl px-8 py-2 hover:bg-[#EF2A82] hover:text-white">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="relative z-10 pl-4 lg:pl-40">
        <div className="flex flex-col lg:flex-row justify-between gap-3 pt-6">
          <div className="flex flex-1 pt-20 lg:items-start items-center justify-center lg:justify-start flex-col gap-3 lg:max-w-[470px] pr-4">
            <h1 className="font-[700] md:text-[40px] text-[30px] text-center lg:text-start md:max-w-[550px] ">
              Monitor your business on real-time dashboard
            </h1>
            <p className="text-[#8794BA] font-[400] text-center lg:text-start md:max-w-[550px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
              vitae nibh nunc mattis imperdiet sed nullam.{" "}
            </p>

            <button className="bg-[#EF2A82] px-10 py-2 my-5 rounded-3xl">
              Try for free
            </button>
          </div>

          <Image
            src={mainScreen}
            alt="main screen content"
            // layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
