import Image from "next/image";
import React from "react";

import monitor from "../assets/monitoring-Icon.svg";
import widget from "../assets/desktop-Icon.svg";
import rocket from "../assets/rocket-Icon.svg";
import screen1 from "../assets/screen-01.svg";
import screen2 from "../assets/screen-02.svg";
import screen3 from "../assets/screen-03.svg";

const Features = () => {
  return (
    <div className="my-2 py-12 px-4 lg:px-40">
      <div className="text-center">
        <h1
          className="text-[#172755] text-center font-[700] text-[40px]
"
        >
          Main Features
        </h1>
        <p className="text-[#8794BA]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet. Id vel in nam malesuada.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-9">
        <div className="flex flex-col items-center justify-center gap-3 py-5 text-center">
          <Image src={monitor} alt="" />
          <p className="text-[16px] text-[#172755] font-[700]">
            Monitoring 24/7
          </p>
          <p className="text-[#8794BA]">
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum
            nisi aliquet volutpat.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 py-5 text-center">
          <Image src={widget} alt="" />
          <p className="text-[16px] text-[#172755] font-[700]">
            Monitoring 24/7
          </p>
          <p className="text-[#8794BA]">
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum
            nisi aliquet volutpat.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 py-5 text-center">
          <Image src={rocket} alt="" />
          <p className="text-[16px] text-[#172755] font-[700]">
            Monitoring 24/7
          </p>
          <p className="text-[#8794BA]">
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum
            nisi aliquet volutpat.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-4 gap-y-1 py-9">
        <div className="lg:max-w-[410px] order-2 lg:order-1 text-center lg:text-left">
          <p className="font-[700] md:text-[40px] text-[30px]  text-[#172755]">
            Automated Reports & Widget Alerts
          </p>
          <p className="text-[#8794BA] pt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
            pulvinar risus pulvinar sit amet.
          </p>
        </div>
        <Image
          src={screen1}
          alt="desc"
          className="w-[600px] h-[400px] order-1 lg:order-2"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-start items-center gap-x-4 gap-y-1 py-9">
        <Image
          src={screen2}
          alt="desc"
          className="lg:w-[600px] h-[400px] lg:mr-7"
        />

        <div className="lg:max-w-[410px] text-center lg:text-left">
          <p className="font-[700] md:text-[40px] text-[30px] text-[#172755]">
            Fully customizable to address your needs
          </p>
          <p className="text-[#8794BA] pt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
            pulvinar risus pulvinar sit amet.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-x-4 gap-y-1 py-9">
        <div className="lg:max-w-[410px] order-2 lg:order-1 text-center lg:text-left ">
          <p className="font-[700] md:text-[40px] text-[30px] text-[#172755]">
            Pre-built Dashboard Templates
          </p>
          <p className="text-[#8794BA] pt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
            pulvinar risus pulvinar sit amet.
          </p>
        </div>
        <Image
          src={screen3}
          alt="desc"
          className="w-[600px] h-[400px] order-1 lg:order-2"
        />
      </div>
    </div>
  );
};

export default Features;
