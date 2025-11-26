"use client";

import { useState } from "react";
import {
  Menu,
  CircleUserRound,
  Search,
  ShoppingCart,
  Heart,
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Promo from "@/components/Promo";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-screen z-100">
      <Promo />
      <div className="bg-white  z-50 shadow">
        <div className="max-w-6xl p-6 flex flex-col md:flex-row justify-between gap-6 mx-auto">
          <Link href="/" className="font-semibold text-lg sm:text-xl">
            Bookstar
          </Link>

          <nav
            className={`md:flex ${
              isMobileMenuOpen ? "flex " : "hidden"
            } flex-col md:flex-row text-center gap-3`}
          >
            <ul className="flex flex-col md:flex-row text-center gap-3 items-center">
              <Link
                href={"/"}
                className="text-gray-500 hover:text-black font-semibold h-fit cursor-pointer"
              >
                Home
              </Link>
              <li className="flex w-full justify-center text-gray-500 focus:text-black font-semibold cursor-pointe">
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer">
                    Shop
                    <ChevronDown className="hidden sm:block w-5 h-5" />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className={"rounded-none z-200 flex flex-col"}>
                    <Link href={"/shop"} className="hover:bg-blue-200 p-3 py-1">Item 1</Link>
                    <Link href={"/shop"} className="hover:bg-blue-200 p-3 py-1">Item 1</Link>
                    <Link href={"/shop"} className="hover:bg-blue-200 p-3 py-1">Item 1</Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <Link href={"/about"} className="text-gray-500 hover:text-black font-semibold h-fit cursor-pointer">
                About
              </Link>
              <Link href={"/blog"} className="text-gray-500 hover:text-black font-semibold h-fit cursor-pointer">
                Blog
              </Link>
              <Link href={"/contacts"} className="text-gray-500 hover:text-black font-semibold h-fit cursor-pointer">
                Contacts
              </Link>
              <Link href={"/page"} className="text-gray-500 hover:text-black font-semibold h-fit cursor-pointer">
                Page
              </Link>
            </ul>
          </nav>

          <button
            className="md:hidden absolute top-6 right-6"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>

          <div
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-3 items-center text-blue-400 mt-4 sm:mt-0`}
          >
            <div className="flex gap-3 w-fit cursor-pointer hover:text-blue-300">
              <CircleUserRound />
              <span className="sm:font-bold ">Login/Register</span>
            </div>
            <div className=" cursor-pointer  hover:text-blue-30">
              <Search />
            </div>
            <div className="flex cursor-pointer  hover:text-blue-30">
              <ShoppingCart />
              <span>1</span>
            </div>
            <div className="flex cursor-pointer  hover:text-blue-30">
              <Heart />
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
