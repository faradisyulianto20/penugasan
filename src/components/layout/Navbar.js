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

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-screen z-100">
      <Promo />
      <div className="bg-white  z-50 shadow">
        <div className="max-w-7xl p-6 flex flex-col md:flex-row justify-between gap-6 mx-auto">
          <span className="font-semibold text-lg sm:text-xl">Bookstar</span>

          <nav
            className={`md:flex ${
              isMobileMenuOpen ? "flex " : "hidden"
            } flex-col md:flex-row text-center gap-3`}
          >
            <ul className="flex flex-col md:flex-row text-center gap-3 items-center">
              <li className="text-gray-500 hover:text-black font-semibold h-fit">
                Home
              </li>
              <li className="flex w-full justify-center text-gray-500 focus:text-black font-semibold">
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    Shop
                    <ChevronDown className="hidden sm:block w-5 h-5" />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className={"rounded-none z-200"}>
                    <DropdownMenuItem>Item 1</DropdownMenuItem>
                    <DropdownMenuItem>Item 2</DropdownMenuItem>
                    <DropdownMenuItem>Item 3</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className="text-gray-500 hover:text-black font-semibold h-fit">
                About
              </li>
              <li className="text-gray-500 hover:text-black font-semibold h-fit">
                Blog
              </li>
              <li className="text-gray-500 hover:text-black font-semibold h-fit">
                Contacts
              </li>
              <li className="text-gray-500 hover:text-black font-semibold h-fit">
                Page
              </li>
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
            <div className="flex gap-3 w-fit">
              <CircleUserRound />
              <span className="sm:font-bold">Login/Register</span>
            </div>
            <div>
              <Search />
            </div>
            <div className="flex">
              <ShoppingCart />
              <span>1</span>
            </div>
            <div className="flex">
              <Heart />
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
