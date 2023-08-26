import React from "react";
import { Footer } from ".";

const Pricing = () => {
  return (
    <div className="relative overflow-hidden bg-[url('../assets/background-bottom.svg')] bg-no-repeat bg-cover">
      <span className=""></span>
      <div className="relative lg:pt-60 md:pt-44 mt-[34rem] md:mt-0 text-center pb-20 px-4 lg:px-40">
        <div className="flex flex-col items-center gap-4 justify-center pb-7">
          <p className="text-[40px] font-[700] lg:max-w-[660px]">
            Pricing Plans
          </p>
          <p className=" text-center lg:max-w-[660px] text-[#8794BA]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est.{" "}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between lg:gap-x-16 md:gap-x-1 gap-y-6 py-4">
          <div className="h-[350px] lg:w-[280px] bg-[#0F1F4B]  flex flex-col px-14 py-3 gap-6 rounded-3xl">
            <div className="border border-b-[#2A407C] border-t-0 border-r-0 border-l-0 py-5">
              <p className="font-[700] text-[30px]">Starter</p>
              <p className="text-[#8794BA] pt-1">up to 3 users</p>
            </div>
            <div>
              <div className="font-[700] text-[30px]">
                <span className="text-[15px]">$</span>29
              </div>
              <p className="text-[#8794BA]">per month</p>
            </div>
            <button className="border border-[#2A407C] rounded-3xl mx-2 px-8 py-2 hover:bg-[#EF2A82]">
              order
            </button>
          </div>
          {/*  */}
          <div className="h-[350px] lg:w-[280px] bg-[#ffff]  flex flex-col px-14 py-3 gap-6 rounded-3xl">
            <div className="border border-b-[#D3D9E9] border-t-0 border-r-0 border-l-0 py-5">
              <p className="font-[700] text-[30px] text-[#172755]">Standard</p>
              <p className="text-[#8794BA] pt-1">up to 20 users</p>
            </div>
            <div>
              <div className="font-[700] text-[30px] text-[#172755]">
                <span className="text-[15px] ">$</span>99
              </div>
              <p className="text-[#8794BA]">per month</p>
            </div>
            <button className="hover:bg-[#2A407C] rounded-3xl mx-2 px-8 py-2 bg-[#EF2A82] ">
              order
            </button>
          </div>
          {/*  */}
          <div className="h-[350px] lg:w-[280px] bg-[#0F1F4B]  flex flex-col px-14 py-3 gap-6 rounded-3xl">
            <div className="border border-b-[#2A407C] border-t-0 border-r-0 border-l-0 py-5">
              <p className="font-[700] text-[30px]">Premium</p>
              <p className="text-[#8794BA] pt-1">up to 200 users</p>
            </div>
            <div>
              <div className="font-[700] text-[30px]">
                <span className="text-[15px]">$</span>299
              </div>
              <p className="text-[#8794BA]">per month</p>
            </div>
            <button className="border border-[#2A407C] rounded-3xl mx-2 px-8 py-2 hover:bg-[#EF2A82]">
              order
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
