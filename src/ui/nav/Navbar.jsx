"use client";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCartArrowDown, FaRocket } from "react-icons/fa";

export const Navbar = () => {
  const [headerSticky, setHeaderSticky] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const makeSticky = () => {
    if (window.scrollY >= 400) {
      setHeaderSticky(true);
    } else {
      setHeaderSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", makeSticky);

    return () => {
      window.addEventListener("scroll", makeSticky);
    };
  }, []);

  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Our Services",
      path: "/services",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "FAQs",
      path: "/#faqs",
    },
  ];

  return (
    <div
      className={`z-[99999999] backdrop-blur-md w-full px-5 lg:px-10 py-5 min-h-[40pt] shadow-2xl text-gray-800 transition top-0 ${
        headerSticky
          ? "bg-gray-50 text-gray-50 fixed"
          : "block bg-gray-700 text-white"
      }`}
    >
      <div className="w-full flex flex-col lg:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full">
          <div className="w-full font-bold text-2xl">
            <img
              src={`${headerSticky ? "logo.png" : "logo-dark.png"}`}
              className="h-[60pt]"
            />
          </div>

          <div
            className="lg:hidden"
            onClick={() => setShowMobileNav((prev) => !prev)}
          >
            <button className="bg-green-500 text-accent-200 shadow-lg flex justify-center items-center px-4 py-2 rounded-lg border-2 border-transparent hover:bg-accent-100/50 transition hover:border-accent-100 hover:text-accent-100">
              <AiOutlineMenu />
            </button>
          </div>
        </div>

        <div
          className={`w-full lg:flex justify-between ${
            showMobileNav ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:space-x-4 text-lg mt-10 lg:mt-0 lg:text-md font-[450] lg:items-center">
            {menu.map((nav) => {
              return (
                <div key={nav.path}>
                  <div className="lg:hidden my-2 border-b-[1px] border-b-gray-100 pb-3 w-1/2">
                    <a
                      key={nav.path}
                      href={nav.path}
                      className="relative hover:text-gray-200/90 transition"
                    >
                      <div className="">{nav.name}</div>
                    </a>
                  </div>
                  <a
                    key={nav.path}
                    href={nav.path}
                    className="hidden lg:block relative after:w-[0%] hover:after:w-[100%] after:h-[3px] after:absolute hover:after:bg-gray-200 hover:text-gray-200/90 transition after:rounded-xl hover:after:duration-500 after:scale-x-0 hover:after:scale-x-100 after:-bottom-2"
                  >
                    <div className="">{nav.name}</div>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="flex space-x-4 justify-end text-sm font-[450]">
            {/* <a
              href="/cart"
              className="flex justify-center items-center text-2xl hover:text-green-600 text-slate-500 transition"
            >
              <div className="">
                <FaCartArrowDown />
              </div>
            </a> */}

            <a
              href="/contact"
              className="bg-green-600 text-green-50 text-sm font-bold px-5 py-3 hover:text-green-600 hover:bg-green-50 border-2 border-green-600 shadow-lg hidden lg:flex justify-around items-center space-x-3"
            >
              <div className="">Request Quote</div>

              <div className="animate-pulse">
                <FaRocket />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
