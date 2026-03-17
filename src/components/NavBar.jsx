import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-custom-dark-blue text-custom-white flex w-full items-center justify-around text-3xl py-4">
      <div>
        <Link to='/' className="font-bold hover:text-custom-light-blue transition">
          <span >ITEC</span>
        </Link>
      </div>
      <div className="flex text-2xl gap-20 font-light">
        <Link to="/" className="hover:text-custom-light-blue transition">
         <span>Home</span>
        </Link>
        <Link to="/about" className="hover:text-custom-light-blue transition">
          <span>About</span>
        </Link>
        <Link to="/programs" className="hover:text-custom-light-blue transition">
          <span>Programs</span>
        </Link>
        <Link to="/contact" className="hover:text-custom-light-blue transition">
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
