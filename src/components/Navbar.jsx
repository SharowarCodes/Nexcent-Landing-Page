import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      <div className="flex items-center space-x-2">
        <img src={" "} alt="" className="h-6" />
        <span className="text-xl font-bold text-gray-800">Nexcent</span>
      </div>

      <ul className="flex space-x-6 text-gray-700 text-sm font-medium">
        <li className="hover:text-green-600 cursor-pointer">Home</li>
        <li className="hover:text-green-600 cursor-pointer">Features</li>
        <li className="hover:text-green-600 cursor-pointer">Community</li>
        <li className="hover:text-green-600 cursor-pointer">Blog</li>
        <li className="hover:text-green-600 cursor-pointer">Pricing</li>
      </ul>

      <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-6 py-2 rounded">
        Register Now →
      </button>
    </nav>
  );
};

export default Navbar;
