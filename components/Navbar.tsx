import Image from "next/image";
import React from "react";
import carLogo from "../public/assets/logo.svg";
import Link from "next/link";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <header className="w-full  z-10">
      <nav className="max-w-[1440px] mx-auto bg-transparent">
        <div className="flex justify-between items-center sm:px-16 px-6 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src={carLogo}
              alt=""
              className="object-contain"
              width={118}
              height={18}
            />
          </Link>
          <Button className="">Sign in</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
