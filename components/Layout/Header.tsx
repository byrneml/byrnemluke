import { useRouter } from "next/router";
import Image from "next/image";
import config from "@/data/config";
import Link from "next/link";
import clsx from "clsx";
import React, { useState } from "react";

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
        <div className="relative flex md:items-center justify-between h-16">
          <Link href="/">
            <a className="hidden lg:block text-2xl">Luke Byrne</a>
          </Link>

          <Link href="/">
            <a className="block lg:hidden text-xl">LB</a>
          </Link>
          <ul className="space-y-2 md:space-y-0 md:space-x-8 flex flex-col md:flex-row sm:ml-6 text-right">
            {config.nav.map((item, index) => {
              const isActive = item.href === pathname;
              return (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-lg hover:text-green dark:hover:text-green"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};
