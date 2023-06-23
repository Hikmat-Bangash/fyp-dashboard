"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

import Image from "next/image";
import logo from "../public/wsscmlogo.png";



const Header = () => {
  const [search, setSearch] = useState("");

  // JSX SECTION
  return (
    <div>
      <div className="w-full flex justify-between items-center px-8 py-2 bg-slate-50 top-0 fixed border-b shadow z-50">
        <div className="flex items-center gap-2 pl-7">
          <Image
            data-testid="wssc-logo"
            src={logo}
            className="h-9 w-10"
            width={40}
            height={36}
            alt="logo"
          />
          <h1
            data-testid="wssc-name"
            className="text-xl font-bold text-primaryColor-500"
          >
            WSSCM
          </h1>
        </div>
        {/* <h1 className="text-3xl font-semibold">{currentTab?.name}</h1> */}
        <div className="flex items-center justify-start gap-8">
          <div className="flex items-center gap-4 text-3xl text-primaryColor-500">
            <div data-testid="wssc-profile">
              <FaUserCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
