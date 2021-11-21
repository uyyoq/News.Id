import React, { Fragment, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MenuItems } from "./menuItems";

function Navbar() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  // burger menu
  const first = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 7px) rotate(0deg)",
  });
  const second = useSpring({
    transform: isOpen
      ? "translate(10px, 4px) rotate(45deg)"
      : "translate(2px, 19px) rotate(0deg)",
  });
  const third = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 31px) rotate(0deg)",
  });
  return (
    <Fragment>
      <nav className="fixed mx-auto bg-white top-0 right-0 inset-x-auto z-10 w-full pt-5 md:py-6">
        <div className="flex mx-auto justify-between my-auto px-8 lg:px-24 w-full ">
          <div className="flex lg:mx-0">
            <Link href="/">
              <a className="py-1">
                <img className="h-auto w-28" src="/news.svg" />
              </a>
            </Link>
          </div>
          <div className="flex my-auto">
            <div className="flex relative">
              {/* HUMBURGER BUTTON */}
              <div className="-mr-2 flex md:hidden">
                <svg
                  onClick={handleClick}
                  width="40"
                  height="26"
                  viewBox="0 0 44 44"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <animated.rect width="40" height="4" rx="2" style={first} />
                  <animated.rect width="40" height="4" rx="2" style={second} />
                  <animated.rect width="40" height="4" rx="2" style={third} />
                </svg>
              </div>
              <div className="uppercase borders cursor-pointer  ">
                <div className="hidden md:flex">
                  <button className="hover:bg-blue-600 hover:text-white text-xs text-gray-100 text-blue-600 focus:border-orange-300 appearance-none font-bold rounded-md py-1 px-2 mx-2">
                    DAFTAR
                  </button>
                  <button className="border-4 border-blue-600 hover:bg-blue-600 text-xs hover:border-blue- focus:border-orange-300 appearance-none hover:text-gray-100 rounded-md font-bold text-blue-700 py-1 px-2 mx-2">
                    MASUK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center font-bold mt-6 flex">
          <ul className="hidden md:flex">
            {MenuItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className=""
                  className={
                    router.pathname == item.url
                      ? "text-xs lg:text-sm px-4 sm:px-3 pb-2"
                      : "text-xs lg:text-sm hover:text-blue-700 pb-2 px-4 sm:px-3"
                  }
                >
                  <Link href={item.url}>
                    <a>{item.list}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* NAVBAR MOBILE VER */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="bg-white shadow flex flex-col px-6 md:hidden">
              <div
                ref={ref}
                className="select-none px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                {MenuItems.map((item, index) => {
                  return (
                    <div className="">
                      <Link key={index} href={item.url}>
                        <a
                          className={
                            router.pathname == item.url
                              ? "flex flex-row px-3 py-2 rounded bg-gray-200"
                              : item.sm
                          }
                        >
                          <p className="font-semibold">{item.list}</p>
                        </a>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </Fragment>
  );
}

export default Navbar;
