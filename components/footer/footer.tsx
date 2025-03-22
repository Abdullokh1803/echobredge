import Link from "next/link";
import React from "react";
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { navLinks } from "@/constant/constant";

const socialLinks = [
  {
    name: "Linkedin",
    icon: FaLinkedin,
    href: "#",
  },
  {
    name: "X",
    icon: FaXTwitter,
    href: "#",
  },
  {
    name: "Youtube",
    icon: FaYoutube,
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="w-[80%] mx-auto py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8">
          <h1 className="select-none text-2xl max-[450px]:text-[22px] font-bold md:text-[26px] text-[#8A2BE2]">
            <span className="text-[#0e86fd]">Echo</span>Bridge
          </h1>
          <nav className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                className="text-[14px] tracking-widest font-bold text-gray-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex md:flex-row-reverse md:justify-between flex-col items-center gap-8">
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, i) => (
              <Link key={i} href={link.href}>
                <div className="size-10 rounded-full bg-gray-300 inline-flex items-center justify-center">
                  <link.icon className="size-4" />
                </div>
              </Link>
            ))}
          </div>
          <p className="text-gray-600 text-xs">
            &copy; EchoBridge, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
