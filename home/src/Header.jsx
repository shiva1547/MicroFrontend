import React from "react";
import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <Link to="/">
          <div className="flex-grow">Header</div>
        </Link>
        ||
        <Link to="/cart">
          <div className="flex-grow">Cart</div>
        </Link>
        <div className="flex-end relative">
          <Login />
          <MiniCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
