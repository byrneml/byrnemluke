import { useRouter } from "next/router";
import Image from "next/image";
import config from "@/data/config";
import Link from "next/link";
import clsx from "clsx";
import React, { useState, useEffect } from "react";

export const Header: React.FC = () => {
  const { pathname } = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <>
      <nav className="py-6">
        <div className="max-w-7xl">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden z-50">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md fill-black dark:fill-white  focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <HamburgerIcon className={isOpen ? "hidden" : "visible"} />
                <CrossIcon className={!isOpen ? "hidden" : "visible"} />
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start z-50">
              <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-0 sm:pr-0 sm:right-0">
                <div>
                  <span className="sr-only">Open user menu</span>
                  <Link href="/">
                    <a>
                      <span className="flex">
                        <Image
                          className="rounded-md"
                          src={config.avatar}
                          width={48}
                          height={48}
                          alt={config.siteName}
                          priority
                        />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <ul className="space-x-8 hidden sm:flex sm:ml-6">
              {config.nav.map((item, index) => {
                const isActive = item.href === pathname;
                return (
                  <li key={index}>
                    <Link href={item.href}>
                      <a
                        aria-current={isActive ? "page" : undefined}
                        className={clsx(
                          pathname === item.href ? "font-bold" : "",
                          "text-black hover:text-gray-900",
                          "dark:text-gray-200 dark:hover:text-gray-100"
                        )}
                      >
                        {item.label}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={clsx(isOpen ? "visible" : "hidden", "sm:hidden")}
          id="mobile-menu"
        >
          <div className="fixed inset-0 bg-white max-h-fit w-full z-10 dark:bg-gray-900">
            <div className="flex flex-col max-w-3xl mx-auto h-screen px-6 mt-24">
              <ul>
                {config.nav.map((item, index) => {
                  const isActive = item.href === pathname;
                  return (
                    <li
                      key={index}
                      className="border-b border-gray-200 dark:border-gray-600"
                    >
                      <Link href={item.href}>
                        <a
                          aria-current={isActive ? "page" : undefined}
                          className={clsx(
                            pathname === item.href ? "font-semibold" : "",
                            "text-gray-900 hover:font-semibold block px-1 py-4 rounded-md",
                            "dark:text-gray-200"
                          )}
                        >
                          {item.label}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

function HamburgerIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 5.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 10.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 15.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
