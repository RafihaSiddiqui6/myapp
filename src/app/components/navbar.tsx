'use client'
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <div className="flex items-center justify-between bg-white p-7 shadow-md">
      {/* Logo */}
      <div className="text-black text-4xl font-bold">
        <span className="text-pink-500">C</span>ase
        <span className="text-pink-500">M</span>ate
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:block"> {/* Hidden on small screens */}
        <ul className="flex space-x-8 text-black font-bold">
          <Link href="/">
            <li className="hover:text-pink-500 cursor-pointer text-2xl">Home</li>
          </Link>
          <Link href="/products">
            <li className="hover:text-pink-500 cursor-pointer text-2xl">Products</li>
          </Link>
          <Link href="/about">
            <li className="hover:text-pink-500 cursor-pointer text-2xl">About Us</li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-pink-500 cursor-pointer text-2xl">Contact</li>
          </Link>
        </ul>
      </div>

      {/* Hamburger Icon (Visible on small screens) */}
      <div className="md:hidden"> {/* Visible on small screens */}
        <button onClick={toggleMenu} className="text-black text-4xl focus:outline-none">
          {isOpen ? '✖' : '☰'} {/* Change icon based on menu state */}
        </button>
      </div>

      {/* Mobile Menu (Visible when isOpen is true) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="font-mono font-extrabold">
          <ul className="flex flex-col items-center space-y-4 bg-white text-black p-4 shadow-lg">
            <Link href="/">
              <li className="hover:text-gray-300 cursor-pointer text-2xl" onClick={toggleMenu}>Home</li>
            </Link>
            <Link href="/products">
              <li className="hover:text-gray-300 cursor-pointer text-2xl" onClick={toggleMenu}>Products</li>
            </Link>
            <Link href="/about">
              <li className="hover:text-gray-300 cursor-pointer text-2xl" onClick={toggleMenu}>About Us</li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-gray-300 cursor-pointer text-2xl" onClick={toggleMenu}>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}




