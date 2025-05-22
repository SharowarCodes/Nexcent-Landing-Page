import React from "react";

const Client = () => {
  const clientLogos = [
    "/Logo (1).png",
    "/Logo (2).png",
    "/Logo (3).png",
    "/Logo (4).png",
    "/Logo (5).png",
    "/Logo (6).png",
    "/Logo.png",

  ];

  return (
    <section className="bg-white pt-[80px] pb-[40px] text-center py-16 px-4">
      {/* Our Clients Section */}
      <div>
        <div className="flex justify-center mb-2">
          {/* <div className="h-1 w-10 bg-pink-500 rounded"></div> */}
        </div>
        <h2 className="text-[40px] font-semibold mb-2">Our Clients</h2>
        <p className="text-[24px] pt-[40px] text-gray-600 mb-8">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex pt-[40px] flex-wrap justify-center items-center h-[10px] gap-[40px] mb-16">
          {clientLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="h-8 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Manage your entire community Section */}
      <div>
        <div className="flex justify-center mb-2">
          {/* <div className="h-1 w-10 bg-pink-500 rounded"></div> */}
        </div>
        <h2 className="text-[34px] font-semibold">
          Manage your entire community
          <br />
          in a single system
        </h2>
        <p className="text-[24px] text-gray-600 mt-2">
          Who is Nextcent suitable for?
        </p>
      </div>
    </section>
  );
};

export default Client;
