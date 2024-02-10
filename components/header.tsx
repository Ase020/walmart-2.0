"use client";

import React, { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.input.value;
    router.push(`/search?q=${input}`);
    console.log(input);
  };

  return (
    <header className="flex flex-col md:flex-row items-center bg-walmart px-4 md:px-10 py-7 md:space-x-5">
      <Link href="/" className="mb-5 md:mb-0">
        <Image
          src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg"
          alt="walmart logo"
          width={150}
          height={150}
          priority
        />
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex items-center rounded-full flex-1 bg-white w-full md:w-auto"
      >
        <input
          type="text"
          name="input"
          placeholder="Search..."
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-xs text-black w-full md:w-auto"
        />

        <button type="submit">
          <Search className="h-10 w-10 px-2 rounded-full bg-yellow-400 cursor-pointer" />
        </button>
      </form>

      <div className="flex items-center gap-4 justify-between md:space-x-5 mt-5 md:mt-0">
        <Link
          href="/"
          className="hidden xl:flex items-center space-x-2 text-sm text-white font-bold "
        >
          <Grid2X2 size={20} />
          <p className="capitalize">Departments</p>
        </Link>

        <Link
          href="/"
          className="hidden xl:flex items-center space-x-2 text-sm text-white font-bold "
        >
          <LayoutGrid size={20} />
          <p className="capitalize">Services</p>
        </Link>

        <Link
          href="/"
          className="flex items-center space-x-2 text-sm text-white font-bold "
        >
          <Heart size={20} />
          <div className="">
            <p className="capitalize text-xs font-extralight">Reorder</p>
            <p className="capitalize">my items</p>
          </div>
        </Link>

        <Link
          href="/"
          className="flex items-center space-x-2 text-sm text-white font-bold "
        >
          <User size={20} />
          <div className="">
            <p className="capitalize text-xs font-extralight">Sign in</p>
            <p className="capitalize">Account</p>
          </div>
        </Link>

        <Link
          href="/basket"
          className="flex items-center space-x-2 text-sm text-white font-bold "
        >
          <ShoppingCart size={20} />
          <div className="">
            <p className="capitalize text-xs font-extralight">no items</p>
            <p className="capitalize">$ 0.00</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
