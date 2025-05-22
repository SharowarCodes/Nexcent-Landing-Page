import React from "react";
import bannerimg from  "../assets/Illustration.png"

const Banner = () => {
  return (
    <section className="flex flex-col-reverse pt-[80px] pb-[40px] md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gray-100">
      {/* Text Section */}
      <div className="max-w-xl px-[80px] text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Lessons and insights <br />
          <span className="text-green-600">from 8 years</span>
        </h1>
        <p className="mt-4 text-gray-600 text-sm">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded text-sm">
          Register
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full px-[120px] md:w-1/2 mb-10 md:mb-0">
        <img src={bannerimg} alt="Hero Illustration" className="w-[400px] h-[400px]" />
      </div>
    </section>
  );
};

export default Banner;
