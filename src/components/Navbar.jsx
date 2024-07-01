"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
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
  
  const handleLogin = () => {
    router.push('/login')
  }
  return (
    <nav className="flex justify-between items-center bg-lime-700 py-8 px-4">
      <Link href={"/"}>
        <h3 className="text-2xl font-bold">Next Journey</h3>
      </Link>
      <ul className="flex items-center gap-6">
        {navLinks?.map((navLink) => (
          <Link
            className={`${pathName === navLink.path && "text-black font-bold"}`}
            key={navLink.path}
            href={navLink.path}
          >
            {navLink.title}
          </Link>
        ))}
        <button onClick={handleLogin} className="p-4 bg-black font-bold rounded-lg">Login</button>
      </ul>
    </nav>
  );
};

export default Navbar;
