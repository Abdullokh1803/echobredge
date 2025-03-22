import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type navMobileProps = {
  showNav: boolean;
  navHide: () => void;
};

const NavMobile = ({ showNav, navHide }: navMobileProps) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      <div
        className={`${navOpen} fixed inset-0 transform transition-all duration-500 z-[9999] bg-black opacity-70 w-full h-screen`}
      ></div>
      <div className={`${navOpen} text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#2f334f] space-y-6 z-[10000]`}>
        {navLinks.map((link) => {
          return (
            <Link href={link.url} key={link.id}>
              <p className="nav_link_mb text-white text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px] active:pl-4">
                {link.label}
              </p>
            </Link>
          );
        })}
        <CgClose
          onClick={navHide}
          className="absolute top-[1.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default NavMobile;
