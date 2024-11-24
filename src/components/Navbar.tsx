"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-8 px-12 bg-[#fffafa]">
      {/* Navbar Container */}
      <div className="flex justify-between items-center ">
        {/* Logo */}
        <Image src={"/images/logo_6.png"} alt="logo" width={150} height={150} />

        {/* Hamburger Icon for Mobile */}
        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖️" : "☰"}
        </button>

        {/* Navigation Links */}
        <div className={`sm:flex gap-6 font-semibold text-[20px] hidden`}>
          <ul>
            <Link href={""}>Features</Link>
          </ul>
          <ul>
            <Link href={""}>About</Link>
          </ul>
          <ul>
            <Link href={""}>Options</Link>
          </ul>
          <ul>
            <Link href={""}>Pricing</Link>
          </ul>
          <ul>
            <Link href={""}>News</Link>
          </ul>
          <ul>
            <Link href={""}>FAQ</Link>
          </ul>
        </div>

        {/* Button */}
        <button className="bg-pink-600 hover:bg-[#363fbe] text-white px-4 py-2 rounded-xl text-[15px] sm:block hidden">
          Get started
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center mt-4 gap-4 font-semibold text-[20px] sm:hidden">
          <ul>
            <Link href={""}>Features</Link>
          </ul>
          <ul>
            <Link href={""}>About</Link>
          </ul>
          <ul>
            <Link href={""}>Options</Link>
          </ul>
          <ul>
            <Link href={""}>Pricing</Link>
          </ul>
          <ul>
            <Link href={""}>News</Link>
          </ul>
          <ul>
            <Link href={""}>FAQ</Link>
          </ul>
          <button className="bg-pink-600 hover:bg-[#363fbe] text-white px-4 py-2 rounded-xl text-[15px]">
            Get started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
