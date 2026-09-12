import React from "react";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div className="bg-blue-500 flex justify-between items-center px-5 py-6 text-2xl">
      <h2>Website</h2>
      <div className="flex gap-7 underline ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/course">Course</Link>
        <Link to="/product">Product</Link>
      </div>
      
    </div>
  );
};

export default Navbar;
