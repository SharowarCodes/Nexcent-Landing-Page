import React from "react";

const Info = () => {
  const categories = [
    {
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      icon: "👥", // Replace with actual icons or SVGs
    },
    {
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      icon: "🏢",
    },
    {
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      icon: "🤝",
    },
  ];

  return (
    <section className="pt-[80px] pb-[40px] px-4 py-16 bg-white">
      {/* Top Cards */}
      <div className="grid w-full h-[300px] grid-cols-1 pt-[40px] md:grid-cols-3 gap-[80px] text-center mb-16">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-gray-50  p-6 rounded shadow-sm hover:shadow-md transition"
          >
            <div className="text-[24px] mb-4">{cat.icon}</div>
            <h3 className="font-semibold pt-[20px] text-lg mb-2">{cat.title}</h3>
            <p className="text-sm pt-[20px] text-gray-600">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
