"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const navLinks = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
  ];
  return (
    <nav className="flex justify-between bg-lime-700 py-8 px-4">
      <Link href={"/"}>
        <h3 className="text-2xl font-bold">Next Journey</h3>
      </Link>
      <ul className="flex gap-6">
        {navLinks?.map((navLink) => (
          <Link
            className={`${pathName === navLink.path && "text-black font-bold"}`}
            key={navLink.path}
            href={navLink.path}
          >
            {navLink.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
