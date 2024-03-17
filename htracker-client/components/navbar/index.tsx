"use client";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex justify-between px-28 py-4">
      <div className="flex gap-2 items-center">
        <Image
          src="/static/images/logo.png"
          alt="htracker-logo"
          width={50}
          height={50}
        />
        <h1 className="text-xl font-black">hTracker</h1>
      </div>
      <div>
        <Link href="/auth/register">
          <button className="px-4 py-1 rounded bg-secondary text-white">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
};
