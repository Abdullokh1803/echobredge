"use client";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type navProps = {
  navShow: () => void;
};

const Nav = ({ navShow }: navProps) => {
  const [zNav, setZNav] = useState(false);

  useEffect(() => {
    const hundler = () => {
      if (window.scrollY >= 90) setZNav(true);
      if (window.scrollY < 90) setZNav(false);
    };

    window.addEventListener("scroll", hundler);

    return () => {
      window.removeEventListener("scroll", hundler);
    };
  }, []);

  return (
    <nav
      className={`w-full h-[12vh] z-[9999] duration-200 transition-all fixed inset-0 bg-white/10 backdrop-blur-xl backdrop-contrast-90 backdrop-brightness-100 ${
        zNav ? "bg-white shadow-md" : "fixed"
      }`}
    >
      <div className="w-[90%] h-full mx-auto flex items-center justify-between xl:w-[80%] ">
        <h1 className="select-none text-md max-[450px]:text-[22px] font-bold md:text-[26px] text-[#8A2BE2]">
          <span className="text-[#0e86fd]">Echo</span>Bridge
        </h1>
        <div className="max-[450px]:hidden max-[770px]:hidden p-[3px] gap-2 item-center lg:flex shadow-md rounded-full bg-white">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="nav_link">{link.label}</p>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          <button className="max-[450px]:py-3 max-[450px]:text-[14px] md:px-8 md:py-3 px-6 text-white font-semibold text-base bg-[#8A2BE2] hover:bg-[#6200be]  transition-all duration-200 rounded-full shadow-sm cursor-pointer">
            Try For Free
          </button>
          <HiBars3BottomRight
            onClick={navShow}
            className="w-8 h-8 cursor-pointer text-black lg:hidden"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
