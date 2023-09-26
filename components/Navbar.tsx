"use client";
import React, { useEffect, useState, memo, useCallback,useMemo } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import "styles/globals.css";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },

  {
    label: "Tic-Tac",
    page: "tictactoe",
  },
  {
    label: "CSS",
    page: "css",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Solar",
    page: "solar",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollValue = totalScroll / windowHeight;

      setScroll(scrollValue);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  }, []);

  const handleNavbarToggle = useCallback(() => {
    setNavbar((prevNavbar) => !prevNavbar);
  }, []);

  const renderNavItems = useMemo(() => {
    return NAV_ITEMS.map((item, idx) => (
      <Link
        key={idx}
        to={item.page}
        className={"block min-lg:noBlackShadow lg:inline-block text-neutral-100 hover:text-neutral-500"}
        spy={true}
        smooth={true}
        offset={-100}
        tabIndex={0}
        duration={500}
        onClick={handleNavbarToggle}
      >
        {item.label}
      </Link>
    ));
  }, [handleNavbarToggle]);

  return (
    <header className="w-full backdrop-blur-sm mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-stone-900 bg-opacity-70 border-b border-stone-600">
      <div className="justify-between fade fadeOut lg:items-center lg:flex mx-auto max-w-3xl  lg:max-w-5xl">
        <div>
          <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
            <Link to="home" className="noBlackShadow">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">Harsh Patel</h2>
              </div>
            </Link>
            <div className="lg:hidden">
              <button className="p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400 focus:border " onClick={handleNavbarToggle}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className={`flex-1 bg-opacity-60 bg-stone-900 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 mb-10 ${navbar ? "block bg-opacity-100" : "hidden"}`}>
            <div className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {renderNavItems}
            </div>
          </div>
        </div>
      </div>
      <div id="progressBarContainer" style={{ height: `${scroll * 12}px` }}>
        <div id="progressBar" style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}`, height: `${scroll * 12}px` }} />
      </div>
    </header>
  );
};

export default memo(Navbar);
