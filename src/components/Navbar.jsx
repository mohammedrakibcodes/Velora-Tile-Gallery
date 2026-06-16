"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { RxHamburgerMenu } from "react-icons/rx";
import { CiLogin } from "react-icons/ci";
import { MdOutlineClose, MdOutlineBorderAll } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: <GoHome size={18} />,
    },
    {
      name: "All Tiles",
      path: "/all-tiles",
      icon: <MdOutlineBorderAll size={18} />,
    },
    {
      name: "My Profile",
      path: "/my-profile",
      icon: <CgProfile size={18} />,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#CAAA98]/20 bg-[#202940]/95 shadow-lg backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/velora.png"
            alt="Velora Logo"
            width={260}
            height={260}
            priority
            className="h-16 w-auto object-contain"
          />

          <div>
            <p className="text-[10px] tracking-[1.5px] text-[#CAAA98] md:text-[11px]">
              Premium Tile
            </p>
          </div>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`group relative flex items-center gap-2 font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                    isActive
                      ? "text-[#CAAA98]"
                      : "text-white hover:text-[#CAAA98]"
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>

                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#CAAA98] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-lg bg-[#CAAA98] px-5 py-2 font-medium text-[#202940] shadow-md transition-all duration-300 hover:bg-[#9A8678] hover:shadow-xl active:scale-95"
          >
            <CiLogin size={20} />
            <span>Login</span>
          </Link>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer text-white transition-all duration-300 hover:scale-110 md:hidden"
        >
          {isMenuOpen ? (
            <MdOutlineClose size={30} />
          ) : (
            <RxHamburgerMenu size={30} />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen
            ? "max-h-[400px] border-t border-[#CAAA98]/20 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#202940] px-5 py-5">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 font-medium transition-all duration-300 hover:translate-x-2 ${
                      isActive
                        ? "text-[#CAAA98]"
                        : "text-white hover:text-[#CAAA98]"
                    }`}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                </li>
              );
            })}

            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#CAAA98] px-5 py-3 font-medium text-[#202940] shadow-md transition-all duration-300 hover:bg-[#9A8678] hover:shadow-xl active:scale-95"
            >
              <CiLogin size={20} />
              <span>Login</span>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
