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
      <nav className="fixed mx-auto bg-white top-0 right-0 inset-x-auto z-10 w-full py-6">
        <div className="flex mx-auto my-auto justify-between px-8 lg:px-14 w-full ">
          <div className="flex lg:mx-0">
            <Link href="/">
              <a className="font-bold text-2xl">LOGO</a>
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
              <div className="font-semibold uppercase borders line select-none cursor-pointer">
                <ul className="hidden md:flex">
                  {MenuItems.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className=""
                        className={
                          router.pathname == item.url
                            ? "text-blue-700 px-4 pb-2"
                            : "hover:text-blue-700 pb-2 px-4"
                        }
                      >
                        <Link href={item.url}>
                          <a className="text-base">{item.list}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
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
      <style jsx>
        {`
          .line .line:hover {
            border-bottom: 2px solid #1e3a8a;
            transition: all 0.2s;
          }

          .borders {
            border-bottom: 2px solid transparent;
            border-top: 2px solid transparent;
          }
        `}
      </style>
    </Fragment>
  );
}

export default Navbar;
