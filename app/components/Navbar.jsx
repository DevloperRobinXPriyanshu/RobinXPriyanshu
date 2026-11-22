"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="border-b-2 border-blue-700 bg-purple-900 flex items-center justify-between px-4 py-1">
        {/* Logo */}
        <div>
          <Image
            src="/assets/logo.png"
            alt="My Photo"
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>

        {/* Nav Links for Medium devices */}
        <ul className="hidden sm:flex flex-1 justify-around text-2xl text-white">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/admission">Add Student</Link></li>
          <li><Link href="/classes">Classes</Link></li>
        </ul>

        {/* Menu / Close Button for Small devices */}
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setSidebar(!sidebar)}
            className="p-2 text-3xl text-white rounded-full active:bg-purple-500"
          >
            {sidebar ? <IoClose /> : <MdOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Sidebar for small devices */}
      {sidebar && (
        <aside className="sm:hidden w-full bg-purple-700 border-b-2 border-blue-700">
          <ul className="text-2xl text-white text-center flex flex-col gap-2 p-2">
            <li className="pb-2 border-b-2 border-white">
              <Link href="/" onClick={() => setSidebar(false)}>Home</Link>
            </li>
            <li className="pb-2 border-b-2 border-white">
              <Link href="/admission" onClick={() => setSidebar(false)}>Add Student</Link>
            </li>
            <li className="pb-2 border-b-2 border-white">
              <Link href="/classes" onClick={() => setSidebar(false)}>Classes</Link>
            </li>
          </ul>
        </aside>
      )}
    </header>
  );
};

export default Navbar;