import React from "react";
import { Link, Outlet } from "react-router";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-7 py-4">
        <Link className="text-2xl font-semibold" to="men">Men</Link>
        <Link className="text-2xl font-semibold" to="women">Women</Link>
        <Link className="text-2xl font-semibold" to="kids">Kids</Link>
      </div>

      <Outlet/>
    </div>
  );
};

export default Product;
