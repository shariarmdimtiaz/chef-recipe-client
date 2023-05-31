import React from "react";
import bannerImage from "../assets/chef.png";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-[#DEF0F5] my-12 p-3 border rounded-xl md:flex justify-between">
        <div className="">
          <img
            className="max-h-[520px] p-5 md:ps-24"
            src={bannerImage}
            alt=""
          />
        </div>
        <div className="flex justify-end items-center">
          <div className="text-left px-5 md:px-10">
            <h1 className="font-extrabold text-4xl py-5">
              Welcome to <br />
              <span className="text-[#ff7f00] py-1">
                Korean World Class Chef
              </span>
            </h1>
            <p className="max-w-xl">
              Korean cuisine has evolved through centuries of social and
              political change. Originating from ancient agricultural and
              nomadic traditions in Korea and southern Manchuria, Korean cuisine
              reflects a complex interaction of the natural environment and
              different cultural trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
