import { NavLink, PrimmaryBtn, Logo } from "./componants";
import { FiMenu } from "react-icons/fi";
import { useEffect, useRef } from "react";

const Header = () => {
  let menu = useRef();

  const OpenMenu = () => {
    menu.current.classList.toggle("-top-72");
  };

  return (
    <nav className="container mx-auto p-6">
      <div className="flex items-center justify-between">
        <Logo Mode="light" />
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink Location="#" Text="Portfolio" />
          <NavLink Location="#" Text="About" />
          <NavLink Location="#" Text="Contact" />
          <NavLink Location="#" Text="Social" />
          <PrimmaryBtn Location="#" Text="Call Me" />
        </div>
        <div className="md:hidden" id="mobile-btn">
          <FiMenu className="text-2xl cursor-pointer" onClick={OpenMenu} />
        </div>
      </div>
      <div className="md:hidden">
        <div
          ref={menu}
          id="mobile-menu"
          className=" absolute flex flex-col items-center space-y-4 bg-gray-50 py-8 left-6 right-6 font-bold drop-shadow-lg border-gray-300 rounded -top-72"
        >
          <NavLink Location="#" Text="Portfolio"/>
          <NavLink Location="#" Text="About" />
          <NavLink Location="#" Text="Contact" />
          <NavLink Location="#" Text="Social" />
          <PrimmaryBtn Location="#" Text="Call Me" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
