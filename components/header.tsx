import React from "react";
import { LuMenu } from "react-icons/lu";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-[50px] flex items-center justify-between">
      <Image
        src="/dp.png"
        className=" w-9 h-9 md:w-12 md:h-12"
        width={43}
        height={38}
        alt="logo"
      />
      <LuMenu className="w-6 h-6 cursor-pointer md:w-8 md:h-8" />
    </header>
  );
};

export default Header;
