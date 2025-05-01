import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import Button from "../common/Button";
import MenuSvg from "../../assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Make sure this is imported if using <Link>

const Header = () => {
  const { hash } = useLocation(); // extract hash for comparison

  const navigation = [
    { id: "0", title: "CALL FOR PAPERS", url: "call-for-papers" },
    { id: "1", title: "REGISTRATION", url: "registration" },
    { id: "2", title: "COMMITTEES", url: "committees" },
    { id: "3", title: "ABOUT US", url: "about-us" },
    { id: "4", title: "PUBLICATIONS", url: "publications" },
    { id: "5", title: "SPONSORS", url: "sponsors" },
    { id: "6", title: "CONTACT US", url: "contact-us" },
  ];

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
    openNavigation ? enablePageScroll() : disablePageScroll();
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-light-border transition-colors duration-200 ${
        openNavigation ? "bg-light-sb" : "bg-light-sb/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-2 lg:px-5 xl:px-5 max-lg:py-4">
        <NavLink
          className="block w-[12rem] xl:mr-8 text-light-pt font-grotesk text-lg"
          to="/"
        >
          International Conference
        </NavLink>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-light-sb lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-light-pt transition-colors hover:text-light-hl ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-3 py-3 md:py-4 lg:text-xs lg:font-semibold lg:leading-5 xl:px-12 ${
                  item.url === hash ? "lg:text-light-pt" : "lg:text-light-pt/50"
                } lg:hover:text-light-pt`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
