"use client";

import { useState, useEffect, useRef } from "react";
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Promo from "@/components/Promo";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import SearchResults from "@/components/SearchResults";
import { useCart, useWishlist } from "@/hooks/useBooks";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const searchRef = useRef(null);

  const { data: cartItems } = useCart();
  const { data: wishlistItems } = useWishlist();

  const cartCount = cartItems?.length || 0;
  const wishlistCount = wishlistItems?.length || 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setDebouncedQuery("");
  };

  return (
    <div className="fixed top-0 left-0 w-screen z-100">
      <Promo />
      <div className="bg-white z-50 shadow">
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

                  <DropdownMenuContent
                    className={"rounded-none z-200 flex flex-col"}
                  >
                    <Link href={"/shop"} className="hover:bg-blue-200 p-3 py-1">
                      Item 1
                    </Link>
                    <Link href={"/shop"} className="hover:bg-blue-200 p-3 py-1">
                      Item 2
                    </Link>
                    <Link href={"/shop"} className="hover:bg-blue-200 p-3 py-1">
                      Item 3
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <Link
                href={"/about"}
                className="text-gray-500 hover:text-black font-semibold h-fit cursor-pointer"
              >
                About
              </Link>
              <Link
                href={"/blog"}
                className="text-gray-500 hover:text-black font-semibold h-fit cursor-pointer"
              >
                Blog
              </Link>
              <Link
                href={"/contacts"}
                className="text-gray-500 hover:text-black font-semibold h-fit cursor-pointer"
              >
                Contacts
              </Link>
              <Link
                href={"/page"}
                className="text-gray-500 hover:text-black font-semibold h-fit cursor-pointer"
              >
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
            } md:flex flex-col md:flex-row gap-3 items-center text-blue-500 mt-4 sm:mt-0`}
          >
            <div className="flex gap-3 w-fit cursor-pointer">
              <CircleUserRound />
              <Link className="sm:font-bold hover:text-blue-400" href={"#"}>
                Login/Register
              </Link>
            </div>

            <div className="relative" ref={searchRef}>
              <div className="flex items-center gap-2">
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isSearchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
                  }`}
                >
                  <Input
                    type="search"
                    placeholder="Search books, authors, publishers..."
                    className="text-black"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus={isSearchOpen}
                  />
                </div>
                <button
                  className="cursor-pointer hover:text-blue-400 transition-colors"
                  onClick={() => {
                    if (isSearchOpen) {
                      handleSearchClose();
                    } else {
                      setIsSearchOpen(true);
                    }
                  }}
                >
                  {isSearchOpen ? <X /> : <Search />}
                </button>
              </div>

              {isSearchOpen && debouncedQuery.length >= 2 && (
                <SearchResults
                  query={debouncedQuery}
                  onClose={handleSearchClose}
                />
              )}
            </div>

            <Link
              className="flex cursor-pointer hover:text-blue-400 gap-1"
              href={"/cart"}
            >
              <ShoppingCart />
              <span className="font-bold">{cartCount}</span>
            </Link>

            <Link
              className="flex cursor-pointer hover:text-blue-400 gap-1"
              href={"/wishlist"}
            >
              <Heart />
              <span className="font-bold">{wishlistCount}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-white">
        <div className="flex px-6 text-gray-500 w-full max-w-6xl pb-6">
          <span className="font-semibold text-black">Home</span>{" "}
          <ChevronRight /> Shop
        </div>
      </div>
    </div>
  );
}
